import { mongoConnect } from "@/lib/mongoConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(req:NextRequest,context:{ params: Promise<{ id: string }> }){
    try{
        const {id} = await context.params
        const {db} = await mongoConnect()
        const service =await db.collection("services").findOne({_id: new ObjectId(id)})
        if (!service) {
          return NextResponse.json({ error: "Service not found" }, { status: 404 });
             }
            const formattedServices = ({
            id:service._id.toString(),
            title:service.title,
            category: service.category,
            shortDescription: service.shortDescription,
            price: service.price,
            duration: service.duration,
            rating: service.rating,
            totalReviews: service.totalReviews,
            image: service.image,
            isFeatured: service.isFeatured,
            description: service.description,
            architectId: service.architectId,
            architectName: service.architectName,
            architectExperience: service.architectExperience,
            architectAvatar: service.architectAvatar
           
         })
        return NextResponse.json(formattedServices)

    }catch(err){
        console.log(err);
    }
}

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { db } = await mongoConnect();
//     const body = await req.json();

//     const result = await db.collection("services").updateOne(
//       { _id: new ObjectId(params.id) },
//       {
//         $set: {
            
//           title: body.title,
//           category: body.category,
//           shortDescription: body.shortDescription,
//           description: body.description,
//           price: body.price,
//           duration: body.duration,
//           rating: body.rating,
//           totalReviews: body.totalReviews,
//           architectId: body.architectId,
//           architectName: body.architectName,
//           architectExperience: body.architectExperience,
//           image: body.image,
//           isFeatured: body.isFeatured,
//           updatedAt: new Date(),
//         },
//       }
//     );

//     if (result.matchedCount === 0) {
//       return NextResponse.json(
//         { message: "Service not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Service updated successfully",
//     });
//   } catch (err) {
//     console.error("PATCH SERVICE ERROR 👉", err);
//     return NextResponse.json(
//       { message: "Failed to update service" },
//       { status: 500 }
//     );
//   }
// }

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log(id);

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid service ID" }, { status: 400 });
    }

    const body = await req.json();
    const updateData = Object.fromEntries(
      Object.entries(body).filter(([_, value]) => value !== undefined)
    );

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ message: "No valid fields to update" }, { status: 400 });
    }

    const { db } = await mongoConnect();
    const result = await db.collection("services").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service updated successfully", modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error("PATCH SERVICE ERROR 👉", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}


export async function DELETE(
  req: NextRequest,
  context:{ params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const { db } = await mongoConnect();

    const result = await db
      .collection("services")
      .deleteOne({ _id: new ObjectId(id) });
    // client.close();

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete Service" },
      { status: 500 }
    );
  }
}