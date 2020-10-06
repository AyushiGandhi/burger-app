import React from "react";

const OrderSummary = (props) => {
    const {ingredients} = props

    let OrderSummary = Object.keys(ingredients).map((keyIngred, index) => {
        return <li key={keyIngred + index}><span>{keyIngred} : {ingredients[keyIngred]}</span></li>
    })

    return (
        <div>
            <ul>
                {OrderSummary}
            </ul>
        </div>
    )
}


export default OrderSummary