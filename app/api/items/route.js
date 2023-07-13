import connectMongoDB from "@/app/libs/mongodb";
import Item from "@/app/models/item";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name ,description}=await request.json();
    await connectMongoDB();

    const newItem=new Item({ name, description });
    await newItem.save();
    return NextResponse.json({message:"Item created"},{status:201})
}

export async function GET(){
    await connectMongoDB()
    const items=await Item.find({})
    return NextResponse.json({items},{status:200})
}
export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    const items=await Item.findByIdAndDelete(id)
    return NextResponse.json({items},{status:200})
}