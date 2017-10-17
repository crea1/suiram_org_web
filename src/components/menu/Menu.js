import React from "react";
import {BurgerButton} from "./BurgerButton";

export class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <BurgerButton/>
            </nav>
        );
    }
}