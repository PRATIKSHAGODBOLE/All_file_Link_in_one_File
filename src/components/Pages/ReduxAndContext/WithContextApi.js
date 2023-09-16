import React, { createContext, useContext, useState } from 'react'

const store  = createContext(null)
export default function WithCotextAPI() {
    const [userDetails, setuserDetails] = useState({
        name: 'Vinod',
        age:20
    })
    function UpdateAge()
    {
        setuserDetails({...userDetails, name : "rahul" , age:30})
    }
  return (
    <div>
    <store.Provider value={{ userDetails, UpdateAge }}> {/*store ke andar userDetails ke nam se pada hai*/}
    <h4 className='bg-secondary p-2 text-center text-white'>WithContextAPI data mentioned on parents only</h4>
        <h4>This is Parent </h4>
           <h4 style={{ fontFamily: "initial" }}>(Name/age Mentioned on Parent component. We sent to child component) </h4>
        <hr /> 
        <ChildComponent/>

    </store.Provider>
    </div>
  )                                       
}

function ChildComponent(){
    const storeData = useContext(store) //store ke data ko use krna chahta hu (store ko storeData me dal diya)
    return (                             //useContext(store) store ko use kr rhe
        <>
        <h4>This is Child Component</h4>
        <h4 style={{ fontFamily: "initial" }}>
            Name: {storeData.userDetails.name}  {/* when button click update name here*/}
        </h4>
        <hr />
        <SubChildComponent/>
        </>
    )
}

function SubChildComponent(){
    const Data = useContext(store) //store ko use krna
    return (
        <>
        <h4>This is Sub Child Component</h4>
        <h4 style={{ fontFamily: "initial" }}>Name : {Data.userDetails.name}</h4>
        <h4 style={{ fontFamily: "initial" }}>Age: {Data.userDetails.age}</h4>
        <button className='btn btn-danger' onClick={Data.UpdateAge}>Update Age</button>
        </>
    )
}