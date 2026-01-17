import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(req:NextRequest) {
    try{

         const {db} = await mongoConnect()
         const featured = new URL(req.url).searchParams.get("featured");
         const limit = new URL(req.url).searchParams.get("limit");
         // const services = await db.collection("services").find().toArray()   
            const services = await db.collection("services").find(featured === "true" ? { isFeatured: true } : {}).limit(limit ? Number(limit) : 0).toArray(); 
         const formattedServices = services.map((service)=>({
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
         }))
         return NextResponse.json(formattedServices)
    }catch(err){
     console.log(err);
    }
 }
 export async function POST(req:NextRequest) {
    try{
         const {db} = await mongoConnect()
         const data = await req.json()
         const result = await db.collection("services").insertOne(data)
         return NextResponse.json({message:"service Created Successfully",insertedId:result.insertedId},{status:201})
    }catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to create service" },
      { status: 500 }
    );
  }
 }
