import React from 'react';

import {Menu} from "./menu/Menu";
import {Welcome} from "./Welcome";
import {About} from "./About";

export class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <section id="welcome">
                    <Welcome/>
                </section>
                <section id="about">
                    <About/>
                </section>
            </div>
        );
    }
}