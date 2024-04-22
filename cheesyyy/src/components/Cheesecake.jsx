import React from 'react'
import './cheesecake.css'
import blueberry from '../assets/blueberryCh.jpg'
import lemonBg from '../assets/lemonBg.jpg'
import lemonCh from '../assets/lemonCh.jpg'
import blueberryBg from '../assets/blueberryBg1.png'





const Cheesecake = () => {
  return (
    <div className='ch'>
      <div className="lemonDiv">
        <img src={lemonBg} />
        <div className="left">
          <img src={lemonCh} alt="" />
        </div>

        <div className="right">
          <h1>Lemon Cheese Cake </h1>
          <h3>(800 Grams)</h3>
          <button className='label11'></button>
        </div>
      </div>

      <div className="berryDiv">
        <img src={blueberryBg} />
        <div className="right1">
          <img src={blueberry} alt="" />
        </div>

        <div className="left1">
          <h1>Blueberry Cheese Cake </h1>
          <h3>(800 Grams)</h3>
          <button className='label12'></button>
        </div>
      </div>

    </div>
  )
}

export default Cheesecake