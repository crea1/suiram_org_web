import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import './scss/style.scss'

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );
});
