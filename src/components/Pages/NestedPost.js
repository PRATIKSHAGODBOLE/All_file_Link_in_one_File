import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import OldestPost from './OldestPost'
import LatestPost from './LatestPost'
import Liked from './Liked'
import Disliked from './Disliked'
export default function NestedSocialPost() {
  return (
    //This is nav&tabs past of bootstrap.
    <div className='container'>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="btn btn-info m-3 active " aria-current="page" to="latest">LATEST</Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-info m-3" to="oldest">OLDEST</Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-info m-3" to="liked">LIKED</Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-info m-3" to="disliked">DISLIKED</Link>
  </li>
</ul>
<Routes>
  <Route path="latest"element={<LatestPost/>}/>
  <Route path="oldest"element={<OldestPost/>}/>
  <Route path="liked" element={<Liked/>}/>
  <Route path="disliked" element={<Disliked/>}/>
</Routes>
    </div>
  )
}
