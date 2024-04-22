import React from 'react'
import './beverages.css'
import bg from '../assets/beveragesBg.png'
import BestData from './BestData'
import glowJuice from '../assets/glowJuice.jpg'
import almond from '../assets/almondMilk.jpg'
import abc from '../assets/juicee.jpg'
import proB from '../assets/probioticBoba.jpg'
import vanillaMatcha from '../assets/vanillaMatcha.jpg'
import butter from '../assets/butterApple.jpg'




const Beverages = () => {
    return (
        <>
            <div id='beverages'>
                <div className='bevContent'>
                    <img src={bg} alt="" />
                    <img className='bvgBg' src={bg} alt="" />
                </div>

                <div className='bev'>
                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={glowJuice}
                        cardText="Glow Juice With Raw Turmeric (7 Days 7 Shots)"
                        label='label3'
                    />

                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={almond}
                        cardText="Almond Milk (Freshly Extracted)"
                        label='label4'
                    />

                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={abc}
                        cardText="Apple Beetroot Carrot Juice (ABC)"
                        label='label5'
                    />

                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={proB}
                        cardText="The Korean Strawberry Probiotic Milk Boba"
                        label='label6'
                    />

                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={vanillaMatcha}
                        cardText="Iced Matcha Vanilla Latte (Oats Smoothie)"
                        label='label7'
                    />

                    <BestData
                        cardCname="glowJuice"
                        card='glow'
                        cardImg={butter}
                        cardText="Butterscotch Apple Oats Smoothie"
                        label='label8'
                    />
                </div>
            </div>
        </>
    )
}

export default Beverages