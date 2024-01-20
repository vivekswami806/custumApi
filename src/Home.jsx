import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

function Home({obj:{add:{ca,ta:temp="unknown"}}}) {
    console.log('hello i am props in home',temp)
  return (
    <div>
        Home
        <Navbar>
             <Banner name="utsav"/>  
        </Navbar>
       
    </div>
  )
}
//default Props
Home.defaultProps = {
    salary:1000
  }

export default Home