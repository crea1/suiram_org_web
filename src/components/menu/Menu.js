import React from "react";
import {BurgerButton} from "./BurgerButton";
import {MenuDrawer} from "./MenuDrawer";

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
        this.clickHandler = this.clickHandler.bind(this)
    }

    render() {
        return (
            <nav id="menu">
                <BurgerButton clickHandler={this.clickHandler}/>
                <MenuDrawer drawerOpen={this.state.drawerOpen}/>
            </nav>
        );
    }

    clickHandler() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }


}