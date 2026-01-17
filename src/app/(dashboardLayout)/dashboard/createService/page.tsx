"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TService } from "@/types/servces";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth"; 
import { TUser } from "@/types/user";
export default function CreateServicePage() {
  const { user } = useAuth() as { user: TUser | null }; 
   console.log(user);
  const router = useRouter();

  const { register, handleSubmit } = useForm<TService>({
    defaultValues: {
      rating: 0,
      totalReviews: 0,
      isFeatured: false,
    },
  });

  const onSubmit = async (data: TService) => {
    try {
      // get service image file===========
      const imageFile = data.image[0];
      if (!imageFile) {
        alert("Please select a service image");
        return;
      }

      //  upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );

      const serviceImageUrl = imgRes.data.data.url;
    //===================
      //  create service in MongoDB
      await axios.post("/api/services", {
        title: data.title,
        category: data.category,
        shortDescription: data.shortDescription,
        description: data.description,
        price: Number(data.price),
        duration: data.duration,
        rating: Number(data.rating),
        totalReviews: Number(data.totalReviews),
        architectId: data.architectId,
        architectName: data.architectName,
        architectExperience: data.architectExperience,
        image: serviceImageUrl,         
        architectAvatar: user?.image,  
        createdAt: new Date().toISOString(), 
        isFeatured: data.isFeatured,
        phoneNumber: user?.phone,
      });

      alert("Service created successfully!");
      router.push("/services");

    } catch (error) {
      console.error("CREATE SERVICE ERROR 👉",error);
      alert("Failed to create service");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center  p-4 mt-20">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Create New Service</CardTitle>
          <CardDescription>Add all service information below</CardDescription>
        </CardHeader>

        <CardContent>
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
                <Input type="number" {...register("price", { required: true })} />
              </Field>

              <Field>
                <FieldLabel>Duration</FieldLabel>
                <Input {...register("duration", { required: true })} />
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

              {/* 🔥 Service Image file input */}
              <Field className="md:col-span-2">
                <FieldLabel>Service Image</FieldLabel>
                <Input type="file" accept="image/*" {...register("image", { required: true })} />
              </Field>

              <Field className="md:col-span-2">
                <FieldLabel>Short Description</FieldLabel>
                <Textarea rows={2} {...register("shortDescription", { required: true })} />
              </Field>

              <Field className="md:col-span-2">
                <FieldLabel>Description</FieldLabel>
                <Textarea rows={4} {...register("description", { required: true })} />
              </Field>

              <Field className="flex items-center gap-3 md:col-span-2">
                <input type="checkbox" className="h-4 w-4" {...register("isFeatured")} />
                <FieldLabel>Featured Service</FieldLabel>
              </Field>

              <Field className="md:col-span-2">
                <Button className="w-full" type="submit">
                  Create Service
                </Button>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
