"use client";

import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const Remove = ({id}) => {

    const router=useRouter()

    
    async function handelDel(){
        const confirmed=confirm("Are u sure want to delete")
        
        if(confirmed)
            await axios.delete(`http://localhost:3000/api/items?id=${id}`).then(()=>{
                router.refresh()
            })


    }
  return (
    <div>
        

        <AiFillDelete onClick={handelDel} style={{"color":"white"}} />

    </div>
  )
}

export default Remove