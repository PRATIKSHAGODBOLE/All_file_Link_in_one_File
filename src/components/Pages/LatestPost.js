import axios from 'axios';
import React, { useState, useEffect } from 'react'


export default function LatestPost() {
  const [posts, setposts] = useState([]) //([]) = data nhi hai to array ki tarah consider krna hai

  // new data update hone ke bad latest page show ho
  function getDataofLatestPost() {
    axios
      .get("http://127.0.0.1:3003/posts")
      .then((res) => {
        let postData = res.data
        postData = postData.filter((post) => post.oldest == false && post.latest == true) // As Per db.json (true and false)
        setposts(postData)
      })
      .catch(err => console.log(err))
  }

  //Fetching API DATA                                     
  useEffect(() => {
    getDataofLatestPost(); //call the function here this all for line no 08 (we can call the function again & again)
  }, [])

  //Function defined liked
  const likePost = (post) => {
    //console.log(post)
    post.liked = true
    post.disliked = false
    post.oldest = true
    post.latest = false
    // Now we also updated data base db
    //Note put is use for update the single data
    axios.put(`http://127.0.0.1:3003/posts//${post.id}`, post)  //Location with current post.id mentioned(kise update krna hai with this above data (post))
      .then(() => {
        getDataofLatestPost();
      })
      .catch(err => console.log(err))
  }
  // -----------------------------------------
  //Function defined disliked
  const dislikePost = (post) => {
    post.liked = false
    post.disliked = true
    post.oldest = true
    post.latest = false
    // Now we also update the database
    axios.put(`http://127.0.0.1:3003/posts/${post.id}`, post)
      .then(() => {
        getDataofLatestPost()
      })
      .catch(err => console.log(err))
  }
  // ------------------------------------------------
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
            <th scope="col" colSpan={2} >Actions</th>          
            </tr>
        </thead>
        <tbody>
          {posts.length !=0 ? ( 
          //{posts ?
            // posts && is used here for conditional rendering
            posts.map((post, i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  {/* Post we send to the function using onclick and always we use ()=> this things  */}
                  <button className="btn btn-warning btn-sm" onClick={() => likePost(post)}>Like</button>
                </td>
                <td>

                  <button className="btn btn-info btn-sm"onClick={() => dislikePost(post)}>Dislike</button>
                </td>
              </tr>
            ))):<tr>
              <td className='text-center text-danger' colSpan={4}>No Records Available</td>
            </tr>
          }
          
        </tbody>
      </table>
    </div>

  )
}


