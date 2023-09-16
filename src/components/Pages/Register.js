import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
   let Navigate = useNavigate()
    const [register, setregister] = useState({
        email:"",
        password:"",
        name:"",
        role:"Visitor"
    })

    function RegisterFun(){
        axios.post("http://127.0.0.1:3003/users", register)
        .then((res)=>alert("User Register Successfully"))
        .catch((err)=>console.log(err))
        Navigate("/login")
    }
    
  return (
    <div className='container'>
     <div className='row'>
            <div className='col'>
                <h1 className=' text-center text-primary'>Register Page</h1>
            </div>
        </div>
        <div className='row'>
            <div className='offset-md-3 col-md-3'></div>
     <form>
        <label htmlFor=''>Email</label>
        <input type="text" className='form-control'
        onChange={(e)=>setregister({...register, email: e.target.value})}/>

        <label htmlFor=''>Password</label>
        <input type="text" className='form-control'
        onChange={(e)=>setregister({...register, password: e.target.value})}/>

        <label htmlFor=''>Name</label>
        <input type="text" className='form-control'
        onChange={(e)=>setregister({...register, name: e.target.value})}/>

        <button className='btn btn-success m-2' onClick={RegisterFun}>Register</button>

        </form>
        </div>
    </div>
  )
}
