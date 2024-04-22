import React from 'react'
import img1 from '../assets/pudding.jpg'
import img2 from '../assets/humuss.jpg'
import img5 from '../assets/juicee.jpg'

import './best.css'
import BestData from './BestData'


const Best = () => {
    return (
        <div className='best'>
            <div className="topBest">
                <h1>Our Best Serves</h1>
            </div>
            <div className="bestClass">
                <BestData
                    cardCname="juice1"
                    card='card'
                    cardImg={img5}
                    cardText="Apple Beetroot Carrot (ABC) Juice"
                    label='label'
                />

                <BestData
                    cardCname="juice1"
                    card='card'
                    cardImg={img2}
                    cardText="Apple Beetroot Carrot (ABC) Juice"
                    label='label1'
                />

                <BestData
                    cardCname="juice1"
                    card='card'
                    cardImg={img1}
                    cardText="Apple Beetroot Carrot (ABC) Juice"
                    label='label2'
                />
            </div>
            
        </div>
    )
}

export default Best