import React from "react";
import sideCSS from './css/SideDrawer.module.css'
import burgerLogo from "../../assets/burger.png";
import Aux from "../../Hoc/Aux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

const SideDrawer = (props) => {
    const {SideDrawerHandler, sideDrawerFlag} = props

    return (
        <Aux>

            <header className={sideCSS.mobileContainer}>
                <div className={sideCSS.topnav}>
                    <div className={[sideCSS.listDown, sideCSS.activeLogo].join(' ')} onClick={SideDrawerHandler}>
                        <div className={sideCSS.display}>
                            <div className={sideCSS.menu}/>
                            <div className={sideCSS.menu}/>
                            <div className={sideCSS.menu}/>
                        </div>
                        <img src={burgerLogo} alt="Burger Logo"/>
                        <span className={sideCSS.label}>Burger App</span>
                    </div>

                    {
                        sideDrawerFlag ?
                            <Aux>
                                <div className={sideCSS.listDown}>
                                    <Link to={'/'} className={sideCSS.test}>Burger Builder</Link>
                                </div>

                                {
                                    props.isAuthenticated ?
                                        <Aux>
                                            <div className={sideCSS.listDown}>
                                                <Link to={'/orders'} className={sideCSS.test}>My Orders</Link>
                                            </div>
                                            <div className={sideCSS.listDown}>
                                                <Link to={'/logout'} className={sideCSS.test}>LOGOUT</Link>
                                            </div>
                                        </Aux>
                                        : <div className={sideCSS.listDown}>
                                            <Link to={'/auth'} className={sideCSS.test}>LOGIN</Link>
                                        </div>
                                }

                            </Aux> : null
                    }

                </div>
            </header>
        </Aux>
    )
}

export default withRouter(SideDrawer)
