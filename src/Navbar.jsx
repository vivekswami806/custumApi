import React from 'react'
import Banner from './Banner'

function Navbar(props) {
    console.log(props.children.props.name)
  return (
    <>
    <div>Navbar</div>
     {props.children}
    </>
    
  )
}

export default Navbar