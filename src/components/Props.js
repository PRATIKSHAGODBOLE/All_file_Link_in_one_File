import React from 'react'

export default function Props(props) {
    let {text} = props.Movi

  return (
   <div className ="card">
  <img src= {props.Movi.imgSrc}class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.Movi.title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  )
}
