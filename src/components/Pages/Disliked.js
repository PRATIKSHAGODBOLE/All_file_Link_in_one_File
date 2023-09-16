import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Disliked() {
    const [posts, setposts] = useState()

    useEffect(()=>{
        axios.get("http://127.0.0.1:3003/posts")
        .then((res)=>{
            let postData = res.data
            postData = postData.filter((post)=> post.liked == false && post.disliked == true)
            setposts(postData)
        })
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container'>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col" colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts ?
              // posts && is used here for conditional rendering
              posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  
                </tr>
              )) : <tr>
                <td>Loading...!!</td>
              </tr>
            }
          </tbody>
        </table>
    </div>
  )
}
