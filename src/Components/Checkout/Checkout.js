import React from "react";
import Burger from "../Burger/Burger";
import './css/Checkout.css'
import ContactData from "../../Containers/ContactForm/ContactData";
import {Redirect, Route} from "react-router";
import Aux from "../../Hoc/Aux";
import {connect} from "react-redux";

class Checkout extends React.Component {

    onCancel = () => {
        this.props.history.push('/')
    }

    onContinueHandler = () => {
        this.props.history.push(this.props.match.url + '/contact')
    }

    render() {

        if (!Object.keys(this.props.ingredient).length) {
            if (this.props.checkoutFlag) {
                return <Redirect to={'/'}/>
            }

        }

        return (
            <Aux>
                <div align={'center'}>
                    <h1>We hope it Taste Well !!</h1>
                    <h2> Enjoy your Meal</h2>

                    <Burger
                        ingredients={this.props.ingredient}/>
                    <h1> Total Amount : ${this.props.totalPrice}</h1>

                    <button className="btn btn-sm animated-button thar-two" onClick={this.onCancel}>Cancel
                    </button>
                    <button className="btn btn-sm animated-button thar-two" onClick={this.onContinueHandler}>Continue
                    </button>
                </div>

                <Route path={this.props.match.url + '/contact'} component={ContactData}/>
            </Aux>
        )


    }

}


const mapStateToProps = (state) => {
    return {
        ingredient: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        checkoutFlag: state.burgerReducer.checkoutFlag
    }
}


export default connect(mapStateToProps)(Checkout);