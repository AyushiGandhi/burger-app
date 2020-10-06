import React from "react";
import Aux from "../../Hoc/Aux";
import BurgerIngred from "./BurgerIngred";
import burgerCSS from './css/Burger.module.css'

const Burger = (props) => {
    let {ingredients} = props;


    let BurgerIngredient = Object.keys(ingredients).map(key => {
        return [...Array(Number(props.ingredients[key])).fill(key)].map((ingredientData, index) => {
            return <BurgerIngred type={ingredientData} key={ingredientData + index}/>
        })
    }).reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue)
    }, [])

    if (BurgerIngredient.length < 1) {
        BurgerIngredient = <h4> Please Add some Ingredients! </h4>
    }

    return (
        <Aux>
            <div className={burgerCSS.Burger}>
                <BurgerIngred type={'bread-top'}/>
                {BurgerIngredient}
                <BurgerIngred type={'bread-bottom'}/>
            </div>

        </Aux>
    )
}

export default Burger;