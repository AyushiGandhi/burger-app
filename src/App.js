import React from 'react';
import './App.css';
import Layout from "./Containers/BurgerBuilder/Layout";
import Auth from "./Containers/Auth/Auth";
import Checkout from "./Components/Checkout/Checkout";
import ContactData from "./Containers/ContactForm/ContactData";
import Orders from "./Components/Orders/Orders";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import {Route, Switch} from "react-router";
import Logout from "./Containers/Auth/Logout";
import {getTokenStatus} from "./Redux-Store/Actions/authAction";
import {connect} from "react-redux";


class App extends React.Component {

    componentDidMount() {
        this.props.getTokenStatus()
    }


    render() {

        let routes = (
            <Switch>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/'} exact component={BurgerBuilder}/>
                <Route component={BurgerBuilder}/>
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path={'/checkout'} component={Checkout}/>
                    <Route path={'/contact'} component={ContactData}/>
                    <Route path={'/orders'} component={Orders}/>
                    <Route path={'/logout'} component={Logout}/>
                    <Route component={BurgerBuilder}/>
                </Switch>)
        }


        return (


            <Layout>
                <Switch>
                    {routes}
                </Switch>
            </Layout>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.idToken !== null
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getTokenStatus: () => dispatch(getTokenStatus())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
