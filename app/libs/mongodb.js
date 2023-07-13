import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log("Datbase connected");
    }catch(e){
        console.log(e);
    }
}
export default connectMongoDB