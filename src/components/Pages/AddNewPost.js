import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddNewPost() {
    let navigate = useNavigate()
    const [newpost, setnewpost] = useState({
        title:"",
        body:"",
        latest:true,
        oldest:false,
        liked:false,
        disliked:false
    })


    function createrecord(){
        axios.post("http://127.0.0.1:3003/posts", newpost)
        .then((res)=>alert("New Data Updated"))
        .catch((err)=>console.log(err))
       
        navigate('/nested')
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
     <h1 className='text-success'>Create New List</h1>
     <form>
        <label htmlFor=''>title</label>
        <input type="text" className='form-control'
        onChange={(e)=>setnewpost({...newpost, title: e.target.value})}/>

        <label htmlFor=''>body</label>
        <input type="text" className='form-control'
        onChange={(e)=>setnewpost({...newpost, body: e.target.value})}/>

        <button className='btn btn-primary' onClick={createrecord}>Create-New-Record</button>
     </form>
     </div>
     </div>
    </div>
  )
}
