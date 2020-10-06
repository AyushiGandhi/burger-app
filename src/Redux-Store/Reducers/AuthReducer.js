import * as actionType from '../Actions/index/actionTypes';

let initialState = {
    errorFlag: false,
    token: {
        email: '',
        expiresIn: '',
        refreshToken: ''
    },
    idToken: null,
    errorMessage: [],
    spinnerFlag: false
}


const AuthReducer = (state = initialState, action) => {

    const AUTH_INIT = (state) => {
        return {...state, spinnerFlag: true}
    }

    const AUTH_SUCCESS = (state, action) => {
        return {
            ...state,
            token: {
                ...state.token,
                email: action.responseData.email,
                //expiresIn: action.responseData.expiresIn,
                //refreshToken: action.responseData.refreshToken
            },
            idToken: action.responseData.idToken,
            errorFlag: false,
            spinnerFlag: false
        }

    }
    const AUTH_FAIL = (state, action) => {
        return {
            ...state,
            errorFlag: true,
            spinnerFlag: false,
           // errorMessage: [...action.errorData]
        }
    }
    const AUTH_LOGOUT = (state) => {

        localStorage.removeItem('idToken');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId')

        return {
            ...state,
            token: {},
            idToken: null
        }
    }


    switch (action.type) {
        case actionType.AUTH_INIT :return AUTH_INIT(state, action)

        case actionType.AUTH_SUCCESS :return AUTH_SUCCESS(state, action)

        case actionType.AUTH_FAIL :return AUTH_FAIL(state, action)

        case actionType.AUTH_LOGOUT :return AUTH_LOGOUT(state, action)

        default :return {...state}
    }
}


export default AuthReducer