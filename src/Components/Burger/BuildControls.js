import React from "react";
import controlsCSS from './css/BuildControls.module.css'
import BuildLabel from "./BuildLabel";
import {connect} from "react-redux";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]

const BuildControls = (props) => {
    const {moreBtn, lessBtn, price, setOrderSummary} = props;
    let BuildLabels = controls.map((ingredData, index) =>

        <BuildLabel key={ingredData.label + index}
                    label={ingredData.label}
                    moreBtn={() => moreBtn(ingredData.type)}
                    lessBtn={() => lessBtn(ingredData.type)}
        />)

    return (
        <div className={controlsCSS.BuildControls}>
            <div className={controlsCSS.price}> Current Price : ${price}</div>
            {BuildLabels}
            <button className={controlsCSS.order_now}
                    onClick={setOrderSummary}
                /*disabled={!purchaseFlag}*/>
                {props.isAuthenticated ? 'Order Now!' : 'LOGIN To Order!'} </button>
        </div>

    )
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.idToken !== null
    }
}

export default connect(mapStateToProps)(BuildControls);