import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SocialDetails() {
    let {id} = useParams()
    const [post, setpost] = useState()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:3003/posts/${id}`)
        .then((res)=> setpost(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className='container'>
<h2 className='text-center text-primary'>Social Post Details</h2>

<table class="table table-bordered table-striped">
  <tbody>
    <tr>
        <th>id : </th>
        <th>{post?.id}</th>
    </tr>
    <tr>
        <th>title : </th>
        <th>{post?.title}</th>
    </tr>
    <tr>
        <th>body : </th>
        <th>{post?.body}</th>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}
