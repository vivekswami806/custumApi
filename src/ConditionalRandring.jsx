import React, { useState } from 'react'
import Login from './Login'

function ConditionalRandring() {
    let [count,setCount]=useState(41)
    //1.  normal if and else
    // if(count>3)
    // {
    //     return <h1>i am if block</h1>
    // }
    // else{
    //     return <h1>i am else block</h1>
    // }
    //2. react  varible way
    // let template=''
    // if(count>2)
    // {
    //     template=<Login/>
    // }
    // else{
    //     template="<h1>hello i am admin</h1>"
    // }
    // return template

    //3. switch case is possible
    // switch (count) {
    //     case 4:
            
    //       return <h1>hello  iam utsav</h1>
    
    //     default:
    //         return <Login/>
    // }

    //ternary
    return (
    //4.ternary oper.
    //count>2?<Login/>:'you have to login first'
    //5.  shortcurcit
//     <>
//     {console.log('hii') }
//     {console.log('hii')}
//      {count>2&& <Login/>}
//    { !count>2 && <h1>must have login</h1>}
//     </>

<>
{
   (function(){
      if(count>2)
      {
        return <Login/>
      }
      else{
          return <h1>hello</h1>
      }
   }())
}
</>
   
    )
  
}

export default ConditionalRandring