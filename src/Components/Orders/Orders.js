import React from "react";

import OrderDisplay from "./OrderDisplay";
import Spinner from "../Navigation/Spinner";
import {getOrdersAsync, spinnerFlagHandler} from "../../Redux-Store/Actions/orderAction";
import {connect} from "react-redux";


class Orders extends React.Component {

     componentDidMount() {
        this.props.spinnerFlagStart();
        this.props.getOrdersAsync(this.props.idToken)
    }

    render() {
        let OrderDisplays;
        if (Object.keys(this.props.orders).length > 0) {
            OrderDisplays = this.props.orders.map(data => {
                return <OrderDisplay key={data.id}
                                     delivery={data.contactInformation.delivery_method}
                                     ingredients={data.ingredients}
                                     name={data.contactInformation.name}
                                     totalPrice={data.totalPrice}
                />
            })
        } else OrderDisplays = <div align={'center'}>
            <h1> No Orders made Yet !!</h1>
            <h2> Please , Make Some Orders first to take Fun of our Burger </h2>
        </div>


        return (
            <div>
                {this.props.spinnerFlag ? <Spinner/> : OrderDisplays}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orderReducer.order,
        orderFailedFlag: state.orderReducer.orderFailed,
        spinnerFlag: state.orderReducer.spinnerFlag,
        idToken: state.authReducer.idToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrdersAsync: (idToken) => dispatch(getOrdersAsync(idToken)),
        spinnerFlagStart: () => dispatch(spinnerFlagHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);