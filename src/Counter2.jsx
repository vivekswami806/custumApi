import React, { createRef, useRef, useState } from 'react'

function Counter2() {
    let count=1
    let [count1,setCount1]=useState(1)
    let count2=createRef(1)
    let count3=useRef(1)
    let [ref,setRef]=useState()
    
    function incHandler()
    {
        console.log('createRef',count2===ref)
        ++count
        count3.current=count3.current+1
        count2.current=count2.current+1
        setCount1(count1+1)
        console.log('normal varible',count)
        console.log('useRef',count3.current)
        console.log('createRef',count2.current)
        console.log('useRef',count3===count3)
        setRef(count2)
       
    }
  return (
    <>
    <h1>normal varible {count}</h1>
    <h1>state {count1} </h1>
    <h1>createRef {count2.current}</h1>
    <h1>useRef {count3.current}</h1>
    <button onClick={incHandler}>inc</button>
    </>
  )
}

export default Counter2