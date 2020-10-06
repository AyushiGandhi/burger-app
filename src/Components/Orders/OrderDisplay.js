import React from "react";

import orderCSS from './CSS/OrderDisplay.module.css'

const OrderDisplay = (props) => {
    const {delivery, ingredients, name, totalPrice} = props;
    let newIngred = Object.entries(ingredients).map(data => (
        <span key={data[0]} className={orderCSS.spanbox}>{data[0]} : {data[1]}  </span>))


    return (
        <div className={orderCSS.box}>
            <h1> Order Details</h1>
            <span className={orderCSS.spanhead}> Name : </span>
            <span className={orderCSS.spanbox}>{name}</span> <br/><br/>

            <span className={orderCSS.spanhead}>Ingredients : </span>
            {newIngred}<br/><br/>

            <span className={orderCSS.spanhead}> Total Price : </span>
            <span className={orderCSS.spanbox}> <strong> ${totalPrice}</strong></span> <br/><br/>

            <span className={orderCSS.spanhead}>Delivery Method : </span>
            <span className={orderCSS.spanbox}>{delivery}</span>
        </div>

    )

}

export default OrderDisplay;