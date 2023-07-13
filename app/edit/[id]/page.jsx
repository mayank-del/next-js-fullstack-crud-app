"use client";

import React,{useState} from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';


const Edit = ({params}) => {
 const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    let data={}
    if(name!=="" && description!=="")
        data={data:{name:name,description:description}}
    else if(name!=="" && description==="")
        data={data:{name:name}}
    else if(name==="" && description!=="")
        data={data:{description:description}}

    
    await axios.patch(`http://localhost:3000/api/items/${params.id}`,data);

    router.push('/')
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="name"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        style={{ background: "green", color: "white" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Edit;
