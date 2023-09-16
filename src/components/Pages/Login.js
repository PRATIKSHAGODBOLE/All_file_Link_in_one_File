import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()
  const [users, setusers] = useState([])
  const [loginDetails, setloginDetails] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    axios.get("http://127.0.0.1:3003/users", loginDetails)
      .then((res) => setusers(res.data))
      .catch((err) => console.log(err))
  })

  function LoginFun() {
    let founduser = users.find((u) => u.email == loginDetails.username)
    if (founduser) {
      if (founduser.password == loginDetails.password) {

        if (founduser.role == "Author") {
          sessionStorage.setItem("role", "Author")
          navigate('/home')
        } 
        else {
          sessionStorage.setItem("role", "Visitor")
          navigate('/home')
        }
      } 
      else {
        alert("You have a not access Register first")
        navigate('/register')
      }
    }
  }

  function RegisterFun() {
    navigate("/register")
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='text-primary'>Login-Page</h1>
          <form>
            <label htmlFor=''>username</label>
            <input type="text" className='form-control'
              onChange={(e) => setloginDetails({ ...loginDetails, username: e.target.value })} />

            <label htmlFor=''>password</label>
            <input type="password" className='form-control'
              onChange={(e) => setloginDetails({ ...loginDetails, password: e.target.value })} />
            <br></br>

            <button className='btn btn-primary m-3' onClick={LoginFun}>Login</button>
            <button className='btn btn-success' onClick={RegisterFun}>Register</button>

          </form>
        </div>
      </div>
    </div>
  )
}
