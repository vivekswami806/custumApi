import React from 'react'
import useGetAPI from '../utilities/apiHelper'

function Prod3() {
    let option={method:"POST",data:{id:10000,name:"utsav"}}
   let result= useGetAPI('https://jsonplaceholder.typicode.com/posts', option)
   console.log('helo result #',result)
  return (
    <div>Prod3</div>
  )
}

export default Prod3