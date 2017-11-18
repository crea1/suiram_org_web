import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {actions} from "./reducers";
import configureStore from "./store";

import "./scss/style.scss";
import App from "./containers/App";

const store = configureStore();
store.dispatch(actions.initApp());

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('mount')
);

render();
store.subscribe(render);
