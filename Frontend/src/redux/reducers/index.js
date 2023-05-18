
import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import ProductReducer from "./productReducer";
import CommentReducer from "./commentReducer";
import CartReducer from "./commandeReducer";

const rootReducer = combineReducers({
    AuthReducer,ProductReducer,CommentReducer,CartReducer

})
export default rootReducer;