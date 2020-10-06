import * as actionType from '../Actions/index/actionTypes'

let initialState = {
    order: [],
    spinnerFlag: false,
    redirectFlag: false,
    errorFlag: false,
    checkoutFlag: false,
    orderFailed: false
}

export const OrderReducer = (state = initialState, action) => {

    const GET_ORDER_SUCCESS = (state, action) => {
        return {
            ...state,
            order: action.order,
            orderFailed: false,
            spinnerFlag: false
        }
    }
    const GET_ORDER_FAILED = (state) => {
        return {
            ...state,
            orderFailed: true,
            spinnerFlag: false
        }

    }
    const CHECKOUT_FLAG = (state) => {
        return {
            ...state,
            checkoutFlag: false,
            redirectFlag: false
        }
    }

    const FETCH_ORDERS = (state, action) => {
        let newOrder = state.order.concat({id: action.orderId.name, ...action.orderData});
        return {
            ...state,
            order: newOrder,
            spinnerFlag: false,
            redirectFlag: true,
            checkoutFlag: true
        }

    }
    const FETCH_ORDERS_ERROR_HANDLING = (state) => {
        return {
            ...state,
            spinnerFlag: false,
            errorFlag: true,
            redirectFlag: false
        }

    }
    const SPINNER_FLAG_START = (state) => {
        return {
            ...state,
            spinnerFlag: true,
        }
    }

    switch (action.type) {

        case actionType.GET_ORDER_SUCCESS : return GET_ORDER_SUCCESS(state, action)

        case actionType.GET_ORDER_FAILED :return GET_ORDER_FAILED(state, action)

        case actionType.CHECKOUT_FLAG :return CHECKOUT_FLAG(state, action)

        case actionType.FETCH_ORDERS  :return FETCH_ORDERS(state, action)

        case actionType.FETCH_ORDERS_ERROR_HANDLING  :return FETCH_ORDERS_ERROR_HANDLING(state, action)

        case actionType.SPINNER_FLAG_START :return SPINNER_FLAG_START(state, action)

        default :return {...state}
    }
}