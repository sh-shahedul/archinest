import { mongoConnect } from "@/lib/mongoConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(req:NextRequest,context:{params:{id:string}}){
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