import React, {useState} from "react";
import toolbarCSS from './css/ToolBar.module.css'
import burgerLogo from "../../assets/burger.png";
import {Link} from "react-router-dom";
import Aux from "../../Hoc/Aux";

const ToolBar = (props) => {


    return (
        <header className={toolbarCSS.nav}>
            <div className={[toolbarCSS.listLeft, toolbarCSS.activelogo].join(' ')}>
                <img src={burgerLogo} alt="Burger Logo"/>
            </div>
            <Link to={'/'} className={toolbarCSS.listLeft}>Burger Builder</Link>

            {
                props.isAuthenticated ?
                    <Aux>
                        <Link to={'/orders'} className={toolbarCSS.listLeft}>My Orders</Link>
                        <Link to={'/logout'} className={toolbarCSS.listRight}>LOGOUT</Link>
                    </Aux>
                    : <Link to={'/auth'} className={toolbarCSS.listRight}>LOGIN</Link>
            }



        </header>


    )
}

export default ToolBar

