import React, { useState } from 'react'

function CounterState() {
    console.log('...........loaded in dom..............')
   let [num,setNum] =useState(1)
   function incHandler()
   {
    //setNum(num+1)
    setNum((pre)=>{
        return  ++pre
    })
   }
   
  return (

    <div>CounterState
        {console.log(num)}
        <h1>{num} </h1>
        <button onClick={incHandler}>click</button>
    </div>
  )
}

export default CounterState