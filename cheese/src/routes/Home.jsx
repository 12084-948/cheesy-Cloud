import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Best from '../components/Best'
import Hero from '../components/Hero'
import Contact from '../components/Contact'


const Home = () => {
  // const {cart, setCart} = useState([])
  return (
    <div>
        <Navbar />
        <Hero />
        <Best />
        <Contact />
    </div>
  )
}

export default Home