
import React/* , { useEffect }  */from 'react'
import axios from 'axios'
import {AiFillEdit} from 'react-icons/ai'
import Link from 'next/link'
import Remove from './Remove'

const getItems=async()=>{
  
    try{
        const result=await axios.get('http://localhost:3000/api/items')
        /* if(!result.ok){
            throw new Error("failed to fetch data from database!")
        } */
       
        return result

    }catch(e){
        console.log(e);
    }
}

export default async  function ItemList () {
    
    const items=await getItems()
    
  return (
    <div>
    <div className='list'>
        
        {items.data.items.map((res)=>(
            <div className='card'>
                <div className='content'>
                    <h1>Id :{res["_id"]}</h1>
                    <h3>Name :{res["name"]}</h3>
                    <p>Des :{res["description"]}</p>
                </div>
                <div className='icons'>
                    <Link id={res["_id"]} href={`/edit/${res["_id"]}`}>
                    <AiFillEdit style={{"color":"white"}} />

                    </Link>
                    <Remove id={res["_id"]}/>
                </div>
               
            </div>
        ))}
    </div>
    <Link href={`/addItem`}>
            <button style={{"background":"blue","color":"white"}} >Add Topic</button>

        </Link>
        </div>
  )
}
