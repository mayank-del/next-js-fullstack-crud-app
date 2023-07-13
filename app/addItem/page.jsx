"use client";

import React,{useState} from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';

const AddItem = () => {
    const[name,setName]=useState("")
    const[description,setDescription]=useState("")
    const router = useRouter();

async function handleSubmit(e){
    e.preventDefault();
    const data={name:name,description:description}
    await axios.post("http://localhost:3000/api/items",data)
   router.push('/')
}


  return (
    <div>
        <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" name='name' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <button style={{"background":"green","color":"white"}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddItem