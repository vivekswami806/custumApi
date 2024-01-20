import React from 'react'
import useGetAPI from '../utilities/apiHelper'

function Product2() {
  let res=  useGetAPI('https://dummyjson.com/products')
  
  return (
    <div>Product2</div>
  )
}

export default Product2