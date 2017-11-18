import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

//TODO
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(
        sagaMiddleware,
    ))(createStore);

export default (initialState) => {
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState
    );
    //sagaMiddleware.run(sagas);
    return store;
};