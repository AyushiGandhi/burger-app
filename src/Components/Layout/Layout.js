import React from "react";
import Aux from "../../Hoc/Aux";

const Layout = (props) => {

    const box = {
        'border' : ' 2px solid black' ,
        'margin' : '2px 0px 20px 0px',
        'padding' : '7px'
    }
    return (
        <Aux>
            <div style={box}>Toolbar , SideDrawer & Backdrop in Layout.js</div>
            {props.children}
        </Aux>
    )
}


export default Layout;