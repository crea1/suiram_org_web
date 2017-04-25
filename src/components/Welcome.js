var React = require('react');
var ReactDOM = require('react-dom');

//const logo = require('../images/logo.svg');


var Welcome = React.createClass({
    render: function () {
        return (
            <div id="welcome-stuff">
                <div className="welcome-hi">Hi there, I'm</div>
                <h1>Marius Kristensen</h1>
                <div className="welcome-hi2">a developer living in Oslo, Norway</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome')
);
