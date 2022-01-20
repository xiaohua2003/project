import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
const DataFetch = () => {
    const [post, setPost]=useState({})
    const [id, setId]=useState(1)
    const [btnId, setBtnid]=useState(1)
    
    const getId=(event)=>{
        setId(event.target.value)
    }
    const getBtn_id=()=>{
        setBtnid(id)
    }
    useEffect( ()=>{
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`).then(res=>setPost(res.data)).catch(error=>{
            console.log(error)
        }); 
    },[btnId])
    return ( 
        <div>
            <input type="text" value={id} onChange={getId}/>
            <button onClick={getBtn_id}>Click</button>
            <ul>
              {post.title}        
            </ul>
        </div>
     );
}
//{post.map((post) => <li key={post.id}>{post.title}</li>) }
export default DataFetch;