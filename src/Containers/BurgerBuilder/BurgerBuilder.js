import React from "react";
import {connect} from "react-redux";

import Aux from "../../Hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls";
import Modal from "../../Components/Modal/Modal";
import Spinner from "../../Components/Navigation/Spinner";
import {addIngredient, checkoutFlagHandler, removeIngredient} from "../../Redux-Store/Actions/index/indexAction";
import {getIngredientsAsync} from "../../Redux-Store/Actions/burgerAction";


class BurgerBuilder extends React.Component {

    state = {
        orderNowFlag: false,
        spinnerFlag: false
    }

    componentDidMount() {
        this.props.getIngredientsAsync();
    }

    setOrderSummaryHandler = () => {
        if (this.props.totalPrice > 0 && this.props.isAuthenticated) {
            this.setState({orderNowFlag: true})
        } else {
            this.props.history.push('/auth')
        }
    }

    setBackdropHandler = () => {
        if (this.props.totalPrice > 0) {
            this.setState({orderNowFlag: false})
        }
    }

    setContinueHandler = () => {
        this.setState({spinnerFlag: true})
        this.props.setCheckOutHandler()
        this.props.history.push('/checkout')
    }

    render() {


        if (this.props.errorFlag) {
            return <div>
                <h1 align={'center'}>Something Went Wrong , Please Try Again Later !!</h1>
            </div>
        }


        return (
            <Aux>
                {/* ORDER SUMMARY & BACKDROP */}
                {this.state.orderNowFlag ?
                    <Modal
                        ingredients={this.props.ingredient}
                        BackdropHandler={this.setBackdropHandler}
                        ContinueHandler={this.setContinueHandler}
                        totalPrice={this.props.totalPrice}
                        spinnerFlag={this.state.spinnerFlag}
                    /> : null}

                {

                    !Object.keys(this.props.ingredient).length ? <Spinner/> :
                        <Aux>
                            <Burger
                                ingredients={this.props.ingredient}/>

                            <BuildControls moreBtn={this.props.onIngredientAdded}
                                           lessBtn={this.props.onIngredientRemove}
                                           price={this.props.totalPrice}
                                           setOrderSummary={this.setOrderSummaryHandler}/>
                        </Aux>
                }
            </Aux>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ingredient: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        errorFlag: state.burgerReducer.errorFlag,
        isAuthenticated: state.authReducer.idToken !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingredient) => dispatch(addIngredient(ingredient)),
        onIngredientRemove: (ingredient) => dispatch(removeIngredient(ingredient)),
        getIngredientsAsync: () => dispatch(getIngredientsAsync()),
        setCheckOutHandler: () => dispatch(checkoutFlagHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

