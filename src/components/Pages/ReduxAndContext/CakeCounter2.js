
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './CakeShopApp/ActionFun'

function CakeCounter2(props) {
    // available this data for that we created provider in app.js file
  return (
    <div className='container'>
        <h4 className='text-primary'>Cake Counter-2</h4>
        <h4 style={{ fontFamily: "initial" }}>No of Cakes: {props.noOfCakes}</h4>
        <button className='btn btn-primary' onClick={props.buy_Cake}>Buy Cake</button>
        <hr></hr>
    </div>
  )
}                          

//sare data ko ham yaha available krayege using props
//below line means state ko props me convert kr do
const mapStateToProps = (state) =>{
     return{
        noOfCakes : state.cake.noOfCakes   //state kiski cakeReducer ki and reducer ke andar noofcakes hai
     }
}

//dispatch call function (dispatch function ko as props bhejege)
const mapDispatchToProps = (dispatch) =>{
  return{
    buy_Cake:()=>{
        dispatch(buyCake())
    }
  }
}
  

//function ko cakecounter libarray ke sath connect krna hai (CakeCounter1 and mapStateToProps ko ak sath jod diya using connect)
export default connect(mapStateToProps,mapDispatchToProps) (CakeCounter2)
