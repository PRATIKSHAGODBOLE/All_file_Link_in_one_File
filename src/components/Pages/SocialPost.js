import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SocialPost() {
    const [posts, setposts] = useState()

    useEffect(()=>{
        axios.get("http://127.0.0.1:3003/posts")
        .then((res)=> setposts(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className='container'>
     <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      
    </tr>
  </thead>
  <tbody>
{posts?
posts.map((post,i)=>(
<tr key={i}>
    <td>
        <Link to =  {`/social/${post.id}`}>{post.id}</Link>
    </td>
    <td>{post.title}</td>
</tr>
)):
<tr>
    <td>Loading..</td>
</tr>

}
    
    
  </tbody>
</table>
    </div>
  )
}
