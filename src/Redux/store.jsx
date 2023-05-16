import {legacy_createStore as createStore,combineReducers ,applyMiddleware} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import datasReducers from "./datacounter/dataReducer";

const rooteReducer=combineReducers({
    datas:datasReducers
});


const store=createStore(rooteReducer,applyMiddleware(thunk))


export default store;