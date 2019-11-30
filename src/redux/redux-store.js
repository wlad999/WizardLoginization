import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import checkInReducer from "./reducers/checkInReducer";

let reducers = combineReducers({
  checkInPage: checkInReducer
});

const enhancer = applyMiddleware(thunkMiddleware);

let store = createStore(reducers, composeWithDevTools(enhancer));
export default store;
