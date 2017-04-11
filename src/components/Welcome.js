var React = require('react');
var ReactDOM = require('react-dom');

var Welcome = React.createClass({
  render: function () {
    return (
      <div id="welcome-stuff">
        <h1>Marius Kristensen</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Welcome />,
  document.getElementById('welcome')
);
