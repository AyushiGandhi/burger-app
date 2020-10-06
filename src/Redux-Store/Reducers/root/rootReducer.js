import {combineReducers} from "redux";
import BurgerReducer from "../BurgerReducer";
import {OrderReducer} from "../OrderReducer";
import AuthReducer from "../AuthReducer";

const rootReducer = combineReducers({
    burgerReducer: BurgerReducer,
    orderReducer: OrderReducer,
    authReducer: AuthReducer
})

export default rootReducer;