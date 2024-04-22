import React from 'react'
import './hero.css'
import bg1 from '../assets/background.jpg'
const Hero = () => {
  return (
    <div>
         <div className="hero">
                <img src={bg1} alt="" />
            </div>
                <div className="right">
                    <h1>Hello! </h1>
                    <h3> Welcome to Cheesy Cloud.</h3>
                    <p>Don't have time to have healthy yet yummy 
                        breakfast? No worries, we got you! Here you can get
                        a numerous options to eat healthy as well as delicious
                        food which you might can never get rid off. We serve healthy 
                        beverages like juices, smoothies and turmeric latte. We also serve
                        healthy kebabs, baked oats, Hummus with bread etc. All the dishes are
                        prepared hygienically and with compassion. So don't take any chance
                        for your health and order healthy food NOW!
                    </p>

                        {/* <img src={img3} alt="" /> */}

                </div>
    </div>
  )
}

export default Hero