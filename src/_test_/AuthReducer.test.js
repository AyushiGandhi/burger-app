import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import AuthReducer from "../Redux-Store/Reducers/AuthReducer";
import * as actionType from '../Redux-Store/Actions/index/actionTypes'

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

let success = {
    ...initialState,
    token: {
        ...initialState.token,
        email: 'ayu@gmail.com',
    },
    idToken: 'token',
    errorFlag: false,
    spinnerFlag: false
}


enzyme.configure({adapter: new Adapter()});

describe('[AuthReducer.js]', () => {
    it('Returns Initial State [default type] ', function () {
        expect(AuthReducer({...initialState}, {})).toEqual({...initialState})
    });

    it(' AUTH_INIT', function () {
        expect(AuthReducer({...initialState}, {type: actionType.AUTH_INIT}))
            .toEqual({...initialState, spinnerFlag: true})

    });

    it(' AUTH_FAIL ', function () {
        expect(AuthReducer({...initialState}, {type: actionType.AUTH_FAIL}))
            .toEqual({...initialState, errorFlag: true, spinnerFlag: false,})
    });

    it(' AUTH_SUCCESS ', function () {
        expect(AuthReducer({...initialState},
            {
                type: actionType.AUTH_SUCCESS,
                responseData: {
                    email: 'ayu@gmail.com',
                    idToken: 'token'
                }
            })).toEqual({...success})
    });

})