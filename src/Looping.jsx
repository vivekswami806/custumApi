import React from 'react'

function Looping() {
    let arr=[1,2,3,4,5,6,7]
    let globalArr=[]
  return (
  <>
  {
    (function(){
        for(let i=0;i<arr.length;i++)
       {
         globalArr.push(<h1 key={Math.random()}>{arr[i]}</h1>)
       }
    }())

  } 
  {globalArr}
  </>
  )
}

export default Looping