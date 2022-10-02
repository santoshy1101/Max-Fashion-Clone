import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"
import thunk from "redux-thunk"
import ProductReducer from "./Reducer";

const rootReducer = combineReducers({maxFashion:ProductReducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)