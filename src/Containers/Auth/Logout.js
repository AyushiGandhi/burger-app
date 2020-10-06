import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {authLogout} from "../../Redux-Store/Actions/authAction";

class Logout extends React.Component {

    componentDidMount() {
        this.props.authLogout()
    }


    render() {
        return <Redirect to={'/'}/>
    }

}

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => dispatch(authLogout())
    }
}


export default connect(null, mapDispatchToProps)(Logout)