// // "use client";

// // import { Button } from "@/components/ui/button";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";
// // import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { TService } from "@/types/servces";
// // import { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";

// // interface EditEventModalProps {
// //   eventId: string;
// //   open: boolean;
// //   onClose: (open: boolean) => void;
// //   onUpdated: () => void;
// // }

// // export function UpdateServiceModal({
// //   eventId,
// //   open,
// //   onClose,
// //   onUpdated,
// // }: EditEventModalProps) {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { isSubmitting },
// //   } = useForm<TService>({
// //     defaultValues: {
// //       title: "",
// //       date: "",
// //       location: "",
// //       image: "",
// //       description: "",
// //       id: eventId,
// //     },
// //   });

// //   const [loading, setLoading] = useState(false);

// //   // Fetch event data when modal opens
// //   useEffect(() => {
// //     if (!open || !serviceId) return;

// //     const fetchEvent = async () => {
// //       try {
// //         const res = await fetch(`/api/services/${serviceId}`);
// //         if (!res.ok) throw new Error("Failed to fetch event");
// //         const data: TService = await res.json();
// //         console.log(data);
// //         // Prefill the form with fetched data
// //         reset({
// //           title: data.title,
// //           date: data.date,
// //           location: data.location,
// //           image: data.image,
// //           description: data.description,
// //           id: data.id,
// //         });
// //       } catch (error) {
// //         console.error("Failed to fetch event", error);
// //       }
// //     };

// //     fetchEvent();
// //   }, [eventId, open, reset]);

// //   const onSubmit = async (data: Partial<TService>) => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`/api/events/${eventId}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(data),
// //       });

// //       if (!res.ok) throw new Error("Update failed");

// //       onUpdated();
// //       onClose(false);
// //     } catch (error) {
// //       console.error(error);
// //       alert("Failed to update event");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Dialog open={open} onOpenChange={onClose}>
// //       <DialogContent className="max-w-lg z-99">
// //         <DialogHeader>
// //           <DialogTitle>Edit Event</DialogTitle>
// //         </DialogHeader>

// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <FieldGroup>
// //             <Field>
// //               <FieldLabel>Title</FieldLabel>
// //               <Input {...register("title", { required: true })} />
// //             </Field>

// //             <Field>
// //               <FieldLabel>Date</FieldLabel>
// //               <Input type="text" {...register("date", { required: true })} />
// //             </Field>

// //             <Field>
// //               <FieldLabel>Location</FieldLabel>
// //               <Input {...register("location", { required: true })} />
// //             </Field>

// //             <Field>
// //               <FieldLabel>Image URL</FieldLabel>
// //               <Input {...register("image", { required: true })} />
// //             </Field>

// //             <Field>
// //               <FieldLabel>Description</FieldLabel>
// //               <Textarea
// //                 rows={4}
// //                 {...register("description", { required: true })}
// //               />
// //             </Field>
// //           </FieldGroup>

// //           <DialogFooter className="mt-4 flex justify-end gap-2">
// //             <Button
// //               type="button"
// //               variant="outline"
// //               onClick={() => onClose(false)}
// //             >
// //               Cancel
// //             </Button>

// //             <Button type="submit" disabled={loading || isSubmitting}>
// //               {loading ? "Updating..." : "Update Event"}
// //             </Button>
// //           </DialogFooter>
// //         </form>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }

// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { TService } from "@/types/servces";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// interface UpdateServiceModalProps {
//   serviceId: string;
//   open: boolean;
//   onClose: (open: boolean) => void;
//   onUpdated: () => void;
// }

// export function UpdateServiceModal({
//   serviceId,
//   open,
//   onClose,
//   onUpdated,
// }: UpdateServiceModalProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting },
//   } = useForm<TService>();

//   const [loading, setLoading] = useState(false);

//   // 🔹 Load service data
//   useEffect(() => {
//     if (!open || !serviceId) return;

//     const fetchService = async () => {
//       try {
//         const res = await fetch(`/api/services/${serviceId}`);
//         if (!res.ok) throw new Error("Failed to fetch service");

//         const data: TService = await res.json();

//         reset({
//           title: data.title,
//           category: data.category,
//           price: data.price,
//           duration: data.duration,
//           rating: data.rating,
//           totalReviews: data.totalReviews,
//           architectId: data.architectId,
//           architectName: data.architectName,
//           architectExperience: data.architectExperience,
//           shortDescription: data.shortDescription,
//           description: data.description,
//           image: data.image,
//           isFeatured: data.isFeatured,
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchService();
//   }, [serviceId, open, reset]);

//   // const onSubmit = async (data: Partial<TService>) => {
//   //   setLoading(true);
//   //   try {
//   //     const res = await fetch(`/api/services/${serviceId}`, {
//   //       method: "PATCH",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (!res.ok) throw new Error("Update failed");

//   //     onUpdated();
//   //     onClose(false);
//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("Failed to update service");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// const onSubmit = async (formData: Partial<TService>) => {
//   setLoading(true);

//   // ✅ clean & normalize data
//   const payload = {
//     title: formData.title,
//     category: formData.category,
//     shortDescription: formData.shortDescription,
//     description: formData.description,
//     duration: formData.duration,

//     price: formData.price ? Number(formData.price) : 0,
//     rating: formData.rating ? Number(formData.rating) : 0,
//     totalReviews: formData.totalReviews
//       ? Number(formData.totalReviews)
//       : 0,

//     architectId: formData.architectId,
//     architectName: formData.architectName,
//     architectExperience: formData.architectExperience,

//     image: formData.image,
//     isFeatured: Boolean(formData.isFeatured),
//   };

//   try {
//   const res = await fetch(`/api/services/${serviceId}`, {
//   method: "PATCH",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(payload),
// });

// let result = null;

// // 🔒 defensive parsing
// if (res.headers.get("content-type")?.includes("application/json")) {
//   result = await res.json();
// }

// if (!res.ok) {
//   throw new Error(result?.message || "Update failed");
// }

// console.log("UPDATE SUCCESS 👉", result);


//     onUpdated();
//     onClose(false);
//   } catch (err) {
//     console.error("UPDATE SERVICE ERROR 👉", err);
//     alert("Failed to update service");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-4xl">
//         <DialogHeader>
//           <DialogTitle>Edit Service</DialogTitle>
//         </DialogHeader>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <Field>
//               <FieldLabel>Title</FieldLabel>
//               <Input {...register("title", { required: true })} />
//             </Field>

//             <Field>
//               <FieldLabel>Category</FieldLabel>
//               <Input {...register("category", { required: true })} />
//             </Field>

//             <Field>
//               <FieldLabel>Price</FieldLabel>
//               <Input type="number" {...register("price", { valueAsNumber: true })} />
//             </Field>

//             <Field>
//               <FieldLabel>Duration</FieldLabel>
//               <Input {...register("duration")} />
//             </Field>

//             <Field>
//               <FieldLabel>Rating</FieldLabel>
//               <Input type="number" step="0.1" {...register("rating")} />
//             </Field>

//             <Field>
//               <FieldLabel>Total Reviews</FieldLabel>
//               <Input type="number" {...register("totalReviews")} />
//             </Field>

//             <Field>
//               <FieldLabel>Architect ID</FieldLabel>
//               <Input {...register("architectId")} />
//             </Field>

//             <Field>
//               <FieldLabel>Architect Name</FieldLabel>
//               <Input {...register("architectName")} />
//             </Field>

//             <Field className="md:col-span-2">
//               <FieldLabel>Architect Experience</FieldLabel>
//               <Input {...register("architectExperience")} />
//             </Field>

//             {/* Image URL (update) */}
//             <Field className="md:col-span-2">
//               <FieldLabel>Service Image URL</FieldLabel>
//               <Input {...register("image")} />
//             </Field>

//             <Field className="md:col-span-2">
//               <FieldLabel>Short Description</FieldLabel>
//               <Textarea rows={2} {...register("shortDescription")} />
//             </Field>

//             <Field className="md:col-span-2">
//               <FieldLabel>Description</FieldLabel>
//               <Textarea rows={4} {...register("description")} />
//             </Field>

//             <Field className="flex items-center gap-3 md:col-span-2">
//               <input type="checkbox" {...register("isFeatured")} />
//               <FieldLabel>Featured Service</FieldLabel>
//             </Field>

//           </FieldGroup>

//           <DialogFooter className="mt-6">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => onClose(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit" disabled={loading || isSubmitting}>
//               {loading ? "Updating..." : "Update Service"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TService } from "@/types/servces";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface UpdateServiceModalProps {
  serviceId: string;
  open: boolean;
  onClose: (open: boolean) => void;
  onUpdated: () => void;
}

export function UpdateServiceModal({ serviceId, open, onClose, onUpdated }: UpdateServiceModalProps) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<TService>();
  const [loading, setLoading] = useState(false);

  // Load service data
  useEffect(() => {
    if (!open || !serviceId) return;

    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${serviceId}`);
        if (!res.ok) throw new Error("Failed to fetch service");

        const data: TService = await res.json();
        reset({ ...data });
      } catch (err) {
        console.error("FETCH SERVICE ERROR 👉", err);
      }
    };

    fetchService();
  }, [serviceId, open, reset]);

  const onSubmit = async (formData: Partial<TService>) => {
    if (!serviceId) {
      alert("Service ID missing");
      return;
    }

    setLoading(true);

    const payload = {
      title: formData.title || "",
      category: formData.category || "",
      shortDescription: formData.shortDescription || "",
      description: formData.description || "",
      duration: formData.duration || "",
      price: Number(formData.price) || 0,
      rating: Number(formData.rating) || 0,
      totalReviews: Number(formData.totalReviews) || 0,
      architectId: formData.architectId || "",
      architectName: formData.architectName || "",
      architectExperience: formData.architectExperience || "",
      image: formData.image || "",
      isFeatured: Boolean(formData.isFeatured),
    };

    try {
      const res = await fetch(`/api/services/${serviceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result?.message || "Update failed");

      console.log("UPDATE SUCCESS 👉", result);
      onUpdated();
      onClose(false);
    } catch (err) {
      console.error("UPDATE SERVICE ERROR 👉", err);
      alert(err instanceof Error ? err.message : "Failed to update service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input {...register("title", { required: true })} />
            </Field>
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Input {...register("category", { required: true })} />
            </Field>
            <Field>
              <FieldLabel>Price</FieldLabel>
              <Input type="number" {...register("price", { valueAsNumber: true })} />
            </Field>
            <Field>
              <FieldLabel>Duration</FieldLabel>
              <Input {...register("duration")} />
            </Field>
            <Field>
              <FieldLabel>Rating</FieldLabel>
              <Input type="number" step="0.1" {...register("rating")} />
            </Field>
            <Field>
              <FieldLabel>Total Reviews</FieldLabel>
              <Input type="number" {...register("totalReviews")} />
            </Field>
            <Field>
              <FieldLabel>Architect ID</FieldLabel>
              <Input {...register("architectId")} />
            </Field>
            <Field>
              <FieldLabel>Architect Name</FieldLabel>
              <Input {...register("architectName")} />
            </Field>
            <Field className="md:col-span-2">
              <FieldLabel>Architect Experience</FieldLabel>
              <Input {...register("architectExperience")} />
            </Field>
            <Field className="md:col-span-2">
              <FieldLabel>Image URL</FieldLabel>
              <Input {...register("image")} />
            </Field>
            <Field className="md:col-span-2">
              <FieldLabel>Short Description</FieldLabel>
              <Textarea rows={2} {...register("shortDescription")} />
            </Field>
            <Field className="md:col-span-2">
              <FieldLabel>Description</FieldLabel>
              <Textarea rows={4} {...register("description")} />
            </Field>
            <Field className="flex items-center gap-3 md:col-span-2">
              <input type="checkbox" {...register("isFeatured")} />
              <FieldLabel>Featured Service</FieldLabel>
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onClose(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || isSubmitting}>
              {loading ? "Updating..." : "Update Service"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
