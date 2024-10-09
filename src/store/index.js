import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "./middlewares/logger";
import counterReducer from "./reducers/counterReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  userReducer: userReducer,
  productReducer: productReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
