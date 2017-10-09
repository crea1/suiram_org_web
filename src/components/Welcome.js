const React = require('react');

export class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome-stuff">
                <div className="welcome-hi">Hi there, I'm</div>
                <h1>Marius Kristensen</h1>
                <div className="welcome-hi2">a developer living in Oslo, Norway</div>
            </div>
        );
    }
}
