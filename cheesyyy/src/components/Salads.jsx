import React from 'react'
import './salads.css'
import saladBg from '../assets/saladBg.jpg'
import BestData from './BestData'
import salad1 from '../assets/saladMain1.jpg'
import salad2 from '../assets/saladMain2.jpg'
import salad3 from '../assets/saladMain3.jpg'
import salad4 from '../assets/saladMain4.jpg'



const Salad = () => {
    return (
        <div className='salads'>
            <img src={saladBg} alt="" />
            <div className="saladsDiv">
                <BestData
                    cardCname="salad1"
                    card='saladsss1'
                    cardImg={salad1}
                    cardText="Chickpeas Salad With Peanut Butter Dressing"
                    label='label14'
                />

                <BestData
                    cardCname="salad1"
                    card='saladsss1'
                    cardImg={salad2}
                    cardText="Tofu-Chickpeas Veges Salad"
                    label='label15'
                />

                <BestData
                    cardCname="salad1"
                    card='saladsss1'
                    cardImg={salad3}
                    cardText="Tofu-Chickpeas Veges Salad"
                    label='label16'
                />

                <BestData
                    cardCname="salad1"
                    card='saladsss1'
                    cardImg={salad4}
                    cardText="Healthy Chickpeas-Tofu Salad "
                    label='label17'
                />
            </div>
        </div>

    )
}

export default Salad