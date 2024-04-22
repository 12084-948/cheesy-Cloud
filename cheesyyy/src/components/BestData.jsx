import React from 'react'

const BestData = (props) => {
    return (
        <div className='bestC'>
            <div className="best">
                <div className={props.card}>
                    <img className={props.cardCname} src={props.cardImg} alt="" />
                    <h3>{props.cardText}</h3>
                    <button className={props.label}>{props.price}</button>
                </div>
            </div>
        </div>
    )
}

export default BestData