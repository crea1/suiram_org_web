const React = require('react');
import {Welcome} from "./Welcome";

export class Main extends React.Component {
    render() {
        return (
            <section id="welcome">
                <Welcome />
            </section>
        );
    }
}