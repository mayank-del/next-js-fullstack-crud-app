import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
  },
  
  {timestamps:true}
  );
  
  
  // Define a Mongoose model
  const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);
  export default Item