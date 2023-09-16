
// import React, { createContext, useContext, useState } from 'react'

// const store = createContext(null)

// export default function ContextAPI() {
//     const [userdetails, setuserdetails] = useState({
//         CAKE : 20,
//     })

//     function buycake(){
//         setuserdetails({...userdetails, CAKE: (userdetails.CAKE) - 1})
//     }

//     function buildcake(){
//         setuserdetails({...userdetails, CAKE: (userdetails.CAKE) + 1})
//     }
//   return (
//     <div className='container'>
//     <store.Provider value={{userdetails, buycake, buildcake}}>
//      <>
//      <h4>This is Parents</h4>
//      <h6>Counter 01</h6>
//      <ChildComponent/>
//      </>
//     </store.Provider>
//     </div>
//   )
// }

// function ChildComponent(){
//     const storeData = useContext(store)
//     return(
//         <>
//         <h4>This is ChildComponent</h4>
//         <h6>Buy-Cake:{storeData.userdetails.CAKE}</h6>
//          <SubChildComponent/>
//         </>
//     )
// }


// function SubChildComponent(){
//     const Data = useContext(store)
//     return(
//         <>
//         <h4>This is SubChildComponent</h4>
//         <h6>Buy-Cake : {Data.userdetails.CAKE}</h6>
//         <h6>Build-Cake : {Data.userdetails.CAKE}</h6>
//          <button className='btn btn-success mx-3' onClick={Data.buycake}>Buy-Cake</button>
//          <button className='btn btn-danger' onClick={Data.buildcake}>Build-Cake</button>
//         </>
//     )
// }

import React, { createContext, useContext, useState } from 'react'

const store = createContext(null)

export default function ContextAPI() {
    const [userdetails, setuserdetails] = useState({
        Counter : 20,
    })

    function increase(){
          setuserdetails({...userdetails, Counter: (userdetails.Counter) + 1})  
    }

    function dicrease(){
        setuserdetails({...userdetails, Counter: (userdetails.Counter) - 1})  
  }
  return (
    <div className='container'>
     <store.Provider value={{userdetails, increase, dicrease}}>
     <>
     <h4>This is Parents</h4>
     <h6>Counter 01</h6>
     <ChildComponent/>
     </>
     </store.Provider>
    </div>
  )
}

function ChildComponent(){
  const storeData = useContext(store)
  return(
    <>
    <h4>This is ChildComponent</h4>
    <h6>INCREASE : {storeData.userdetails.Counter}</h6>
    <SubChildComponent/>
    </>
  )
}

function SubChildComponent(){
    let Data = useContext(store)
    return(
        <>
        <h4>This is SubChildComponent</h4>
        <h6>INCREASE : {Data.userdetails.Counter}</h6>
        <h6>DICREASE : {Data.userdetails.Counter}</h6>

        <button className='btn btn-warning mx-3' onClick={Data.increase}>INCREASE</button>
        <button className='btn btn-info' onClick={Data.dicrease}>DICREASE</button>

        </>
    )
}

