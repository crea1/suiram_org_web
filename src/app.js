import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';

import './scss/style.scss';


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Main),
        document.getElementById('mount')
    );
});
