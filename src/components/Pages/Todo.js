import React, { useState } from 'react'

export default function Todo() {
    const [username, setusername] = useState("Pratiksha")
    // Array of Object
    const [todoitems, settodoitems] = useState([
        { action: "Buy Flowers", done: false },
        { action: "Buy Movie Ticket", done: true },
        { action: "Meeting@10Am", done: false },
        { action: "Call Mom", done: false },
    ])
    // -----------------------------------
    // New record useState
    const [newitem, setnewitem] = useState()
    //------------------------------------
    //Show Completed useState
    const [showCompleted, setshowCompleted] = useState(false) //initially it's false table show nhi hoga

    //------------------------------------
    // createNewTodo function
    function createNewTodo(){
        //console.log(newitem)
        //if newitem hame milta hai to
        if(newitem){  //all the todo item update again
            settodoitems([...todoitems, {action:newitem, done:false}])
            console.log(todoitems.length) //length will be update
            setnewitem(" ") //for blank the input box
        }
    }
    // ----------------------------------
    // toggleTodo function(true value false & false value true)
    function toggleTodo(todo){                                             //jo bhi done value hogi usko not kr diya true hai to false
        settodoitems(todoitems.map((item)=> item.action === todo.action?{...item, done:!item.done}:item))
    }
    // todoTableRow function
    function todoTableRow(doneValue){
      //todo filter for when we click on the it's removed
     return todoitems                          //item ko filter krega then map
     .filter((item)=>item.done == doneValue)
     .map((item, i)=>(
      <tr key={i}>
         <td>{i+1}</td>
         <td>{item.action}</td>
         <td>
            <input type="checkbox" checked={item.done}
            // we use toggle here for we can chnage true to false and false to true
            //we use item for we can select one item of toggle or click
            onChange={()=>toggleTodo(item)}/>
         </td>
      </tr>
     ))
    }
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
        <h4 className='bg-primary text-center text-white mt-3 '>{username}'s Todo List
            {/*we are checking how many todo not complete */}
            {" "}({todoitems.filter((t)=>!t.done).length} Todos Pending)</h4>
    </div>
</div>

    {/* -------------------------------------- */}
    {/* Add New Record */}
    <div className='row'>
        <div className='col-md-8'>
            <input type="text" className='form-control'
            onChange={(e)=>setnewitem(e.target.value)}
            value={newitem}
            />
            </div>
            <div className='col-md-4'>
            <button className='btn btn-primary' onClick={createNewTodo}>Add</button>
        </div>
    </div>
{/* ----------------------------------------------------------------------------------- */}
    {/* ----Table with done value false-- WITHOUT CLICK */}
    <div className='row'>
        <div className='col-md-12'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Done</th>
    </tr>
  </thead>
  <tbody>
    {/* if we want to call function emigiatally without using button click(when screen load to ye function call hoga) */}
    {/* we working on show todo which completed */}
    {todoTableRow(false)}  {/* Aise todo show hoge to tick nhi hai(Done Value False)*/}
  </tbody>
</table>
{/* When No to available */}
{todoitems.filter((t) => !t.done).length === 0 && (
              <h2 className="text-danger text-center ">-----No Todo Available-----</h2>
            )} 
        </div>
    </div>
    {/* ----------------------------------------------------------------------------- */}
    {/* checkbox to show and hide table */}
    <div className='row'>
        <div className='col-md-2'>
          <input type="checkbox" checked={showCompleted} 
          onChange={(e)=>setshowCompleted(e.target.checked)}/><span className='text-primary'
          > Show completed</span>
          </div>
      </div>

 {/* ---Table with done value true */}
 {showCompleted?                //conditional rendering
    <div className='row'>
    <div className='col-md-12'>
    <table class="table">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Description</th>
  <th scope="col">Done</th>
</tr>
</thead>
<tbody>
{todoTableRow(true)}  
</tbody>
</table>

    </div>
</div>
 :null}
   
    </div>
  )
}
