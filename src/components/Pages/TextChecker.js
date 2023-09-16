import React, { useState } from 'react'

export default function TextChecker(props) {
  const[text, setText] = useState("")
  let {header} = props

  const Handleonchange = (e) =>{
  setText(e.target.value)
  }
  const uppercase = () =>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const lowercase = () =>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const clearcase = () =>{
    let newtext = " "
    setText(newtext)
  }
  return (
    <div>
      <h1 className='text-primary'>{header}</h1>
      <textarea
      className='form-control'
      rows="6"
      value={text}
      onChange={Handleonchange}
       placeholder='Text somthing here..'/><br></br>
     <button className='btn btn-primary mx-2' onClick={uppercase}>UpperText</button>
     <button className='btn btn-primary mx-2' onClick={lowercase}>LowerText</button>
     <button className='btn btn-primary mx-2' onClick={clearcase}>ClearText</button>

     <h2 className='mt-10'>Your Text Summary</h2>
     <p>{text?text.split(" ").length:0} Word {text.length} Character</p>

     <h2>Preview</h2>
     <p>{text}</p>
    </div>
  )
}
