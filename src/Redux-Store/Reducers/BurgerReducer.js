import * as actionType from '../Actions/index/actionTypes'

const initialState = {
    ingredients: {},
    errorFlag: false,
    totalPrice: 0,
    building : false
}

const INGREDIENT_PRICE = {salad: 20, bacon: 10, meat: 50, cheese: 10}

const BurgerReducer = (state = initialState, action) => {

    const ADD_INGREDIENT =(state, action) => {
        return {
            ...state,
            ingredients:
                {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1,
                },
            totalPrice: state.totalPrice < 0 ? 0 : state.totalPrice + INGREDIENT_PRICE[action.ingredient],
            building: true
        }

    }

    const REMOVE_INGREDIENT = (state, action) => {
        if (state.ingredients[action.ingredient] > 0) {
            return {
                ...state,
                ingredients:
                    {
                        ...state.ingredients,
                        [action.ingredient]: state.ingredients[action.ingredient] - 1
                    },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient],
                building: true
            }
        } else return {...state , building: false}

    }

    const GET_INGREDIENTS = (state, action) => {
        return {
            ...state,
            ingredients: {...action.ingredients},
            totalPrice: 0,
            errorFlag: action.errorFlag,
            building: false
        }

    }
    switch (action.type) {

        case actionType.ADD_INGREDIENT : return ADD_INGREDIENT(state, action)

        case actionType.REMOVE_INGREDIENT : return REMOVE_INGREDIENT(state, action)

        case actionType.GET_INGREDIENTS : return GET_INGREDIENTS(state, action)

        default : return {...state}
    }
}

export default BurgerReducer;