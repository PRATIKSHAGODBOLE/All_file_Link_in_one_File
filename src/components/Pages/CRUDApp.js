import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function CRUDApp() {
    const [students, setstudents] = useState()
    const [post, setpost] = useState()
    const [newpost, setnewpost] = useState({id:"", name:"", age:"", grade:""})
    const [EditFormShow, setEditFormShow] = useState()
    const [AddNewRecord, setAddNewRecord] = useState(false)

    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/PRATIKSHAGODBOLE/ReactTest/students")
        .then((res)=>setstudents(res.data))
        .catch((err)=>console.log(err))
    })

    function EditFun(post){
        console.log(post)
        setpost(post)
        setEditFormShow(true)
    }
    function EditTheRecord(){
        axios.put(`https://my-json-server.typicode.com/PRATIKSHAGODBOLE/ReactTest/students/${post.id}`, newpost)
        .then((res)=>{
            alert("New Edit Data Updated")
            setEditFormShow(false)
            window.location.reload()
        })
        .catch((err)=>console.log(err))
    }
    function DeleteFun(post){
        if(window.confirm("Are you sure you want to delete data")){
            axios.delete(`https://my-json-server.typicode.com/PRATIKSHAGODBOLE/ReactTest/students/${post.id}`)
            .then((res)=>{alert("Deleted Record Successfully")})
            .catch((err)=>console.log(err))
        }   
    }
    function CreateNewRecord(){
        setAddNewRecord(true)
    }
    function AddRecord(){
        axios.post("https://my-json-server.typicode.com/PRATIKSHAGODBOLE/ReactTest/students", newpost)
        .then((res)=>{alert("New Record Updated")})
        .catch((err)=>console.log(err))
        window.location.reload()
    }
  return (
    <div className='container'>
        <h4 className='bg-primary  text-center text-white mt-3 p-2'>List of Student (Live API from JSON-Placeholder But We can't changes in the List)</h4>
        <button className='btn btn-success' onClick={CreateNewRecord}>New Record</button>
        {AddNewRecord?
          <form>
          <>
            <label htmlFor=''>Name</label>
            <input type='text'  className='form-control'
            onChange={(e)=>setnewpost({...newpost, name: e.target.value})}/>

            <label htmlFor=''>Age</label>
            <input type='text'  className='form-control'
            onChange={(e)=>setnewpost({...newpost, age: e.target.value})}/>

          <label htmlFor=''>Grade</label>
            <input type='text' className='form-control'
            onChange={(e)=>setnewpost({...newpost, grade: e.target.value})}/>

          <br></br>
          <button className='btn btn-primary' onClick={AddRecord}>AddNewRecord</button>
          
          </>
        </form>

        :null}
        {EditFormShow?
          <form>
            <>
            <label htmlFor=''>id</label>
            <input type='test' defaultValue={post.id} className='form-control'
            onChange={(e)=>setnewpost({...newpost, id: e.target.value})}/>

            <label htmlFor=''>name</label>
            <input type='test' defaultValue={post.name} className='form-control'
            onChange={(e)=>setnewpost({...newpost, name: e.target.value})}/>

            <label htmlFor=''>age</label>
            <input type='test' defaultValue={post.age} className='form-control'
            onChange={(e)=>setnewpost({...newpost, age: e.target.value})}/>

          <label htmlFor=''>grade</label>
            <input type='test' defaultValue={post.grade} className='form-control'
            onChange={(e)=>setnewpost({...newpost, grade: e.target.value})}/>

            <br></br>
            <button className='btn btn-primary' onClick={EditTheRecord}>EditTheRecord</button>
            
            </>
          </form>
        :
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Grade</th>
      <th scope="col" colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
    { students&&
      students.map((post,i)=>(
       <tr key={i}>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.age}</td>
        <td>{post.grade}</td>
        <td>
            <button className='btn btn-warning btn-sm' onClick={()=> EditFun(post)}>Edit</button>
        </td>
        <td>
            <button className='btn btn-info btn-sm' onClick={()=> DeleteFun(post)}>Delete</button>
        </td>
       </tr>
      ))

    }
  </tbody>
</table>
}
    </div>
  )
}
// -------------------------------------------
