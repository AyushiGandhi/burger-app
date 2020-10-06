import React from "react";
import {connect} from "react-redux";

import './CSS/Auth.css'
import Spinner from "../../Components/Navigation/Spinner";
import Input from "../ContactForm/Input";
import {auth, authInit, authLogout} from "../../Redux-Store/Actions/authAction";
import {Redirect} from "react-router";

let inputForm = [{name: 'Email', label: 'email'}, {name: 'Password', label: 'password'}]

class Auth extends React.Component {


    state = {
        loginForm: {
            email: undefined,
            password: undefined
        },
        signUpFlag: false
    }

    onChangeHandler = (event) => {
        let value = event.target.value.trim()
        let login = {...this.state.loginForm}
        login[event.target.name] = value;
        this.setState({loginForm: {...login}})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.authInit();
        this.props.authenticate(this.state.loginForm.email, this.state.loginForm.password, this.state.signUpFlag)
        this.setSignHandler()
    }

    setSignHandler = () => {
        let flag = !this.state.signUpFlag
        this.setState({signUpFlag: flag})
    }


    render() {

        let SIGN = this.state.signUpFlag ? 'SIGN UP' : 'SIGN IN';
        let notSIGN = !this.state.signUpFlag ? 'SIGN UP' : 'SIGN IN';

        if (this.props.errorMessage.length > 0) {
            return <div align={'center'} className={'error'}>
                <h2> Please Try Again Later !!!</h2>
                <h1> Error : {this.props.errorMessage[0]}</h1>
                <h2> Reason : {this.props.errorMessage[1]}</h2>

            </div>
        }

        if (this.props.isAuthenticated && this.state.signUpFlag) {
            return <Redirect to={'/'}/>
        }

        if (this.props.building && this.state.signUpFlag) {
           return <Redirect to={'/checkout'}/>
        }

        return (
            <div>
                {this.props.spinnerFlag ? <Spinner/> :
                    <form>
                        <div className="container">
                            <h1 align={'center'}>{SIGN}</h1>
                            {inputForm.map((data, index) =>
                                <Input key={data.name + index}
                                       name={data.name}
                                       label={data.label}
                                       value={this.state.loginForm[data.label] || ''}
                                       onChangeHandler={this.onChangeHandler}/>)}

                            <div align={'center'}>
                                <button type="submit" className="registerbtn"
                                        onClick={this.submitHandler}>
                                    SUBMIT
                                </button>
                                <br/>

                                <button className="signbtn"
                                        onClick={this.setSignHandler}>
                                    {notSIGN}
                                </button>
                            </div>

                        </div>
                    </form>
                }

                <h1>{this.props.errorMessage}</h1>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        errorFlag: state.authReducer.errorFlag,
        errorMessage: state.authReducer.errorMessage,
        spinnerFlag: state.authReducer.spinnerFlag,
        token: state.authReducer.token,
        isAuthenticated: state.authReducer.idToken !== null,
        building: state.burgerReducer.building
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (email, password, signUpFlag) => dispatch(auth(email, password, signUpFlag)),
        authInit: () => dispatch(authInit()),
        authLogout: () => dispatch(authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);