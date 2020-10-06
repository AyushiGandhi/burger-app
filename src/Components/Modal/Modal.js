import React from "react";
import OrderSummary from "./OrderSummary";
import modalCSS from './css/modal.module.css'
import Aux from "../../Hoc/Aux";
import Backdrop from "../Navigation/Backdrop";
import Spinner from "../Navigation/Spinner";

const Modal = (props) => {
    const {ingredients, BackdropHandler, ContinueHandler, spinnerFlag, totalPrice} = props

    const OrderSum =
        <div className={modalCSS.content}>

            <h2> Order Summary</h2>
            <OrderSummary ingredients={ingredients}/>
            <h3>Total Price : ${totalPrice} </h3>
            <button onClick={BackdropHandler} className={modalCSS.cancel}>Cancel</button>
            <button onClick={ContinueHandler} className={modalCSS.continue}>Continue</button>


        </div>


    return (
        <Aux>
            <Backdrop setBackdrop={BackdropHandler}/>
            <div className={modalCSS.Modal}>
                {spinnerFlag ? <Spinner/> : OrderSum}
            </div>
        </Aux>
    )
}


export default Modal;