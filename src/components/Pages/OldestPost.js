import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function OldestPost() {
    const [posts, setposts] = useState()

    // function so we can call again..
    function delDataofoldestPost() {
      axios
      .get("http://127.0.0.1:3003/posts")
      .then((res)=>{
          let postData = res.data
         postData = postData.filter((post)=>post.oldest == true && post.latest == false) // As Per db.json (true and false)
         setposts(postData)
      })
    .catch(err=>console.log(err))
    }
    //Fetching API DATA
    useEffect(()=>{
      delDataofoldestPost ();  
    },[])

    // Delete Function Declared here
    function deletePost(post) {
      post.liked = true
      post.disliked = true
      post.oldest = true
      post.latest = false
      // Now we also update the database
      if (window.confirm("Are you sure to delete the Record")) {
      axios.delete(`http://127.0.0.1:3003/posts/${post.id}`, post)
        .then(() => {
          delDataofoldestPost()
        })
        .catch(err => console.log(err))
      }
    }
  return (
    <div>
     <div className="row">
        <div className="col-md-12">
          <h4 className="text-center bg-primary text-white py-2">
            List of Posts
          </h4>
        </div>
      </div>

      <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
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
                  <td>
                  <button className='btn btn-danger btn-sm' onClick={() => deletePost(post)}>Delete</button>
                  </td>
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
