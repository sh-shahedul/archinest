"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "../ui/button";

interface DeleteServiceModalProps {
  serviceId: string;
  open: boolean;
  onClose: (open: boolean) => void;
  onDeleted: () => void;
}

export function DeleteServiceModal({
  serviceId,
  open,
  onClose,
  onDeleted,
}: DeleteServiceModalProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!serviceId) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/services/${serviceId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete service");
      }

      onDeleted();
      onClose(false);
    } catch (error) {
      console.error(error);
      alert("Failed to delete event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-destructive">Delete Service</DialogTitle>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          Are you sure you want to delete this event? This action{" "}
          <strong>cannot be undone</strong>.
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onClose(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Service"} 
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}