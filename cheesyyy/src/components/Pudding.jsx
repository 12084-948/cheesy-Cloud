import React from 'react'
import './pudding.css'
import puddingBg1 from '../assets/puddingBg1.jpg'
import puddingMain from '../assets/pudding.jpg'
import puddingMain2 from '../assets/pudding2.jpg'
import puddingMain3 from '../assets/pudding3.jpg'
import puddingMain4 from '../assets/pudding4.jpg'
import puddingMain5 from '../assets/pudding5.jpg'
import puddingMain6 from '../assets/pudding6.jpg'

// import puddingMain2 from '../assets/pudding.jpg'
// import puddingMain3 from '../assets/pudding.jpg'
// import puddingMain4 from '../assets/pudding.jpg'

import BestData from './BestData'



const Pudding = () => {
  return (
    <div className='pudding'>
      <img src={puddingBg1} alt="" />

      <div className="puddingDev">
        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain}
          cardText="Strawberry-Chia oats Pudding"
          label='label18'
        />

        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain2}
          cardText="Chocolate Pudding with 70% dark Chocolate"
          label='label18'
        />

        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain3}
          cardText="Mango Sticky Rice Pudding"
          label='label18'
        />

        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain4}
          cardText="Carrot Chilean Walnuts Baked Oats"
          label='label18'
        />

        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain5}
          cardText="Apple Cinnamon Baked Oats"
          label='label18'
        />

        <BestData
          cardCname="puddingMain1"
          card='pudding1'
          cardImg={puddingMain6}
          cardText="Strawberry-Chia oats Pudding With Coconut"
          label='label18'
        />
      </div>
    </div>
  )
}

export default Pudding