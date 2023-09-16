import React, {useState} from 'react'

export default function WithOutContext() {
    const [userdetails, setuserDetails] = useState({
        name: 'Mayank',
        age:30
    })
    
  return (
    <div>
        <hr></hr>
        <h4 className='bg-success text-white text-center p-2'>WithOutContextAPI</h4>
       <h4>This is Parent Component</h4>
       <hr></hr>
       <ChildComponent userDetails = {userdetails}/>
    </div>
  )
}

function ChildComponent (props){
    return(
        <>
        <h4>This is Child Component</h4>
       <hr></hr>
       <SubChildComponent userDetails = {props.userDetails}/>
        
        </>
    )
    
}

function SubChildComponent(props) {
    return(
        <>
        <h4>This is Sub ChildComponent</h4>
        <h4 style={{ fontFamily: "initial" }}>UserName : {props.userDetails.name}</h4>
        <h4 style={{ fontFamily: "initial" }}>UserAge : {props.userDetails.age}</h4>
        <hr></hr>
        </>
    )
}