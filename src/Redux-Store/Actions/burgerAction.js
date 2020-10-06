import * as actionType from './index/actionTypes';
import axios from '../../Burger_App_Firebase'

export const addIngredient = (ingredient) => {
    return {
        type: actionType.ADD_INGREDIENT,
        ingredient
    }
}

export const removeIngredient = (ingredient) => {
    return {
        type: actionType.REMOVE_INGREDIENT,
        ingredient
    }
}

export const getIngredientsAsync = () => {

    return (dispatch) => {
        axios.get('/ingredients.json').then(response => {
            dispatch(getIngredients(response.data, false))
        }).catch(e => {
            dispatch(getIngredients({}, true))
        })
    }
}

export const getIngredients = (ingredients, error) => {
    return {
        type: actionType.GET_INGREDIENTS,
        ingredients,
        errorFlag: error
    }
}


