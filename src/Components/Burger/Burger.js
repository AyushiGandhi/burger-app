import React from "react";
import Aux from "../../Hoc/Aux";
import BurgerIngred from "./BurgerIngred";
import burgerCSS from './css/Burger.module.css'

const Burger = () => {

    return(
        <Aux>
            <div className={burgerCSS.Burger}>
                <BurgerIngred type={'bread-top'} />
                <BurgerIngred type={'cheese'} />
                <BurgerIngred type={'salad'} />
                <BurgerIngred type={'meat'} />
                <BurgerIngred type={'cheese'} />
                <BurgerIngred type={'bread-bottom'} />
            </div>

        </Aux>
    )
}

export default Burger ;