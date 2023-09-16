import React from 'react'

export default function ReversePromoteSummary(props) {
  return (
    <>
     <td>{props.index+1}</td>
     <td>{props.name}</td>
     <td>{props.name.length}</td>
    <td>
    <button className='btn btn-primary btn-sm' onClick={props.callback}>Reverse</button>
    </td>
    <td>
    <button className='btn btn-success btn-sm' onClick={()=>props.promoteFun(props.name)}>Promote</button>

    </td>
    </>
  )
}
