import * as actionType from './index/actionTypes'
import axios from '../../Burger_App_Firebase'


export const checkoutFlagHandler = () => {
    return {
        type: actionType.CHECKOUT_FLAG
    }
}


export const spinnerFlagHandler = () => {
    return {
        type: actionType.SPINNER_FLAG_START,
    }
}


export const postOrderAsync = (orderData, idToken) => {
    return (dispatch) => {
        axios.post('/orders.json?auth=' + idToken, orderData).then(response => {
            dispatch(postOrderSuccess(response.data, orderData))
        }).catch(error => {
            dispatch(postOrderFailed())
        })

    }
}

const postOrderSuccess = (orderId, orderData) => {
    return {
        type: actionType.FETCH_ORDERS,
        orderId,
        orderData,

    }
}

const postOrderFailed = () => {
    return {
        type: actionType.FETCH_ORDERS_ERROR_HANDLING,
    }
}

export const getOrdersAsync = (idToken) => {
    return dispatch => {
        axios.get('/orders.json?auth=' + idToken).then(response => {
            let setOrders = [];
            for (let keys in response.data) {
                setOrders.push({...response.data[keys], id: keys})
            }
            dispatch(getOrderSuccess(setOrders))
        }).catch(e => {
            dispatch(getOrderFailed())
        })


    }
}

const getOrderSuccess = (order) => {
    return {
        type: actionType.GET_ORDER_SUCCESS,
        order
    }
}

const getOrderFailed = () => {
    return {
        type: actionType.GET_ORDER_FAILED
    }
}