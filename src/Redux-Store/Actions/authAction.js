import * as actionType from './index/actionTypes';
import axios from 'axios';

let api_key = 'AIzaSyAW8cAZ4SEO1vawcDEzpeIYNzbn1LP2O5c'
let signUp_url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
let signIn_url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

export const getTokenStatus = () => {
    return dispatch => {
        let idToken = localStorage.getItem('idToken');
        let userId = localStorage.getItem('userId')
        let expDate = new Date(localStorage.getItem('expirationDate'))
        if (!idToken && !userId) {
            dispatch(authLogout())
        } else {
            if (expDate < new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authSuccess(idToken));
                dispatch(checkAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000))
            }

        }
    }
}


export const authInit = () => {
    return {
        type: actionType.AUTH_INIT
    }
}

export const authLogout = () => {
    return {
        type: actionType.AUTH_LOGOUT
    }
}

const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expiresIn * 1000)
    }
}


export const auth = (email, password, signUpFlag) => {
    return dispatch => {
        let url = signUpFlag ? signUp_url : signIn_url;
        let authData = {email: email, password: password, returnSecureToken: true};

        axios.post(url + api_key, authData).then(response => {
            dispatch(authSuccess(response.data))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        }).catch(error => {
            dispatch(authFail(error))
        })


    }
}

const authSuccess = (data) => {
    let expDate = new Date(new Date().getTime() + data.expiresIn * 1000)
    localStorage.setItem('idToken', data.idToken);
    localStorage.setItem('expirationDate', expDate);
    localStorage.setItem('userId', data.localId)

    return {
        type: actionType.AUTH_SUCCESS,
        responseData: data
    }
}

const authFail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        errorData: [error.message, error.response.data.error.message]
    }
}

