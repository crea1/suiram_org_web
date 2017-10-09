const React = require('react');
import {Welcome} from "./Welcome";
import {About} from "./About";

export class Main extends React.Component {
    render() {
        return (
            <div>
                <section id="welcome">
                    <Welcome />
                </section>
                <section id="about">
                    <About />
                </section>
            </div>
        );
    }
}