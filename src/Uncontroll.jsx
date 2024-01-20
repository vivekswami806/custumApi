import React, { createRef, useRef, useState } from 'react'

function Uncontroll() {
     let inputRef=createRef(5)
     let inputRef2=useRef(10)
     let [form,setForm]=useState('')
     let [isvalidate,setIsvalidate]=useState(false)
     console.log('input',inputRef) //null
     console.log('input2',inputRef2) //undefined
     function submitHandler()
     {
        inputRef.current.focus()
        console.log(inputRef.current.value,inputRef.current.name)
        console.log(inputRef2.current.value)
        console.log(form)
     }
     function textHandler(e)
     {
        setForm(e.target.value)
        if(e.target.value.length>7)
        {
            setIsvalidate(false)
        }
        else{
            setIsvalidate(true)
        }
     }
  return (
    <div>
        Uncontroll  <br/>
        <input type='text' placeholder='enter your name'   name="input1" ref={inputRef}/>
        <br/>
        <br/>
        <input type='text' placeholder='enter your lastname' name='input2' ref={inputRef2} />
        <input type='text' placeholder='enter your address' value={form} onChange={textHandler} />
        {  isvalidate   &&  <span style={{color:"red"}}>error *</span>}
        <button  onClick={submitHandler} >submit</button>
    </div>
  )
}

export default Uncontroll