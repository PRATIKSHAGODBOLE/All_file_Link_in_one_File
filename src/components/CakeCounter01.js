import React from 'react'
import { connect } from 'react-redux'
import { buildcake, buycake } from './CakeApp/ActionFun'

function CakeCounter01(props) {
  return (
    <div className='container'>
    <h1 className='text-center text-info'>Cake-Counter 01</h1>
    <h1>Number Of Cake : {props.NumberOfCake}</h1>
    <button className='btn btn-primary mx-3' onClick={props.buy_cake}>BUY_CAKE</button>
    <button className='btn btn-success mx-3' onClick={props.build_cake}>BUILD_CAKE</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        NumberOfCake : state.cake.NumberOfCake
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buy_cake : () =>{
            dispatch(buycake())
        },
            build_cake : () =>{
                dispatch(buildcake())
            }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeCounter01)