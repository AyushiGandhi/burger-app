import React from "react";
import Aux from "../../Hoc/Aux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends React.Component {

    render() {
        return (
            <Aux>
                <Burger/>
                <div><h4>Burger Controls</h4></div>
            </Aux>
        )
    }

}

export default BurgerBuilder;