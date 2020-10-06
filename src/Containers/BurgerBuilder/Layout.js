import React from "react";
import ToolBar from "../../Components/Navigation/ToolBar";
import {connect} from "react-redux";
import SideDrawer from "../../Components/Navigation/SideDrawer";

class Layout extends React.Component {

    state = {
        sideDrawerFlag: false
    }

    setSideDrawerHandler = () => {
        let sideDrawer = this.state.sideDrawerFlag
        this.setState({sideDrawerFlag: !sideDrawer})
    }

    render() {

        return (
            <div>
                {
                    window.innerWidth > 500 ?
                        <ToolBar isAuthenticated={this.props.isAuthenticated}/> :
                        <SideDrawer isAuthenticated={this.props.isAuthenticated}
                                    SideDrawerHandler={this.setSideDrawerHandler}
                                    sideDrawerFlag={this.state.sideDrawerFlag}/>
                }

                {this.props.children}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.idToken !== null
    }
}


export default connect(mapStateToProps)(Layout);

