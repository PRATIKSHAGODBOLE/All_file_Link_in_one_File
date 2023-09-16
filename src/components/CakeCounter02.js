
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buildcake, buycake } from './CakeApp/ActionFun'

export default function CakeCounter02() {
   const cake = useSelector((state)=>state.cake.NumberOfCake)
   const dispatch = useDispatch()
  return (
    <div className='container'>
     <h1 className='text-center text-primary'>Cake Counter 02</h1>
     <h1>No of Cake : {cake}</h1>
     <button className="btn btn-secondary mx-3" onClick={()=>dispatch(buycake())} >BUY_CAKE</button>
     <button className="btn btn-danger" onClick={()=>dispatch(buildcake())} >BUILD_CAKE</button>
    </div>
  )
}
