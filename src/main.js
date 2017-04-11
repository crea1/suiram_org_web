import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Welcome from "./components/Welcome";

import './scss/style.scss';


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );
});
