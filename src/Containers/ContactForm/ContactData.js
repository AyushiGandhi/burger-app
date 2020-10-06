import React from "react";
import {connect} from "react-redux";

import './CSS/ContactData.css';
import Spinner from "../../Components/Navigation/Spinner";
import Input from "./Input";
import '../../Redux-Store/Actions/index/indexAction'
import {postOrderAsync, spinnerFlagHandler} from "../../Redux-Store/Actions/orderAction";
import {Redirect} from "react-router";


let inputForm = [{name: 'Name', label: 'name'}, {name: 'Email', label: 'email'},
    {name: 'Address', label: 'address'}, {name: 'City', label: 'city'}, {name: 'PinCode', label: 'pincode'},]

let selectForm = [{name: 'Fastest', value: 'fastest'}, {name: 'Cheapest', value: 'cheapest'},
    {name: 'OnTime', value: 'onTime'}, {name: 'Free', value: 'free'}]

class ContactData extends React.Component {

    state = {
        orderForm: {
            name: undefined,
            email: undefined,
            address: undefined,
            city: undefined,
            pincode: undefined,
            delivery_method: undefined,
        },

    }

    formValidation = () => {
        let isValid = true;
        for (let keys in this.state.orderForm) {
            if (this.state.orderForm[keys] === undefined) {
                isValid = false
            }
        }
        return isValid
    }


    submitHandler = (event) => {
        event.preventDefault();

        let isValid = this.formValidation();
        if (isValid) {

            this.props.spinnerFlagHandler()
            let order = {
                ingredients: {...this.props.ingredient},
                contactInformation: {...this.state.orderForm},
                totalPrice: this.props.totalPrice,
            }

            this.props.fetchOrderAsync(order, this.props.idToken);
        } else {
            alert(`Enter all the Details !! `)
        }
    }


    onChangeHandler = (event) => {
        let value = event.target.value.trim()
        let newOrderForm = {...this.state.orderForm}
        newOrderForm[event.target.name] = value;
        this.setState({orderForm: {...newOrderForm}})
    }

    render() {

        if (this.props.errorFlag) {
            return <h1 align={'center'}>Something Went Wrong !!!</h1>
        }

        if (this.props.redirectFlag) {
            return <Redirect to={'/'}/>
        }

        return (
            <div>

                {this.props.spinnerFlag ? <Spinner/> :
                    <form>
                        <div className="container">
                            <h1>Enter your Contact Details</h1>
                            {inputForm.map(data => <Input key={data.name} name={data.name}
                                                          label={data.label}
                                                          value={this.state.orderForm[data.label] || ''}
                                                          onChangeHandler={this.onChangeHandler}
                            />)}


                            <label><b>Delivery Method</b></label><br/>
                            <select onChange={this.onChangeHandler} name={'delivery_method'}>
                                <option> --Select a Delivery Method--</option>
                                {selectForm.map(data =>
                                    <option key={data.value}
                                            value={data.value}>{data.name}
                                    </option>)}
                            </select>
                            <br/>


                            <div align={'center'}>
                                <button type="submit" className="registerbtn" onClick={this.submitHandler}>
                                    Order Now!
                                </button>
                            </div>

                        </div>
                    </form>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ingredient: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        spinnerFlag: state.orderReducer.spinnerFlag,
        errorFlag: state.orderReducer.errorFlag,
        redirectFlag: state.orderReducer.redirectFlag,
        idToken: state.authReducer.idToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrderAsync: (order, idToken) => dispatch(postOrderAsync(order, idToken)),
        spinnerFlagHandler: () => dispatch(spinnerFlagHandler())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactData);