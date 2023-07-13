import connectMongoDB from "@/app/libs/mongodb";
import Item from "@/app/models/item";
import { NextResponse } from "next/server";

export async function PATCH(request,{params}) {
    const {id}=params;
    const {data}=await request.json()
    await connectMongoDB()
    await Item.findByIdAndUpdate(id,data)
    console.log(data);
    return NextResponse.json({message:"item updated"},{status:200})
}