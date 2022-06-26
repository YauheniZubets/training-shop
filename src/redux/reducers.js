import { combineReducers } from "redux";
import prodsReducer from "./prodsToCartReducer";
import fromUrlReducer from './fromUrlReducer';
import productFromUrlReducer from './prodFromUrlReducer';
import delInfoReducer from './delInfoReducer';
import fullOrderReducer from './fullOrderReducer';

let combinedReducer = combineReducers({
    prods: prodsReducer,
    mainProducts: fromUrlReducer,
    currentProduct: productFromUrlReducer,
    deliveryInfo: delInfoReducer,
    fullOrder: fullOrderReducer
});

export default combinedReducer;
