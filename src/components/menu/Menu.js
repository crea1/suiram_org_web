import React from "react";
import BurgerButton from "./BurgerButton";
import MenuDrawer from "./MenuDrawer";

export class Menu extends React.Component {

    render() {
        return (
            <nav id="menu">
                <BurgerButton clickHandler={this.props.burgerClicked} isActive={this.props.drawerOpen}/>
                <MenuDrawer drawerOpen={this.props.drawerOpen}/>
            </nav>
        );
    }

}