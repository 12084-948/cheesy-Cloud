import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Best from '../components/Best'
import Hero from '../components/Hero'


const Home = () => {
  // const {cart, setCart} = useState([])
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <Best />
    </div>
  )
}

export default Home