import React from "react";
import {MenuLink} from "./MenuLink";

export default class MenuDrawer extends React.Component {

    render() {
        return (
            <div className={"menu-drawer " + (this.props.drawerOpen ? "menu-open" : "")}>
                <h1 style={{fontSize: '2vw'}}>menu</h1>
                <MenuLink linkname={"Home"} link={"#"}/>
                <MenuLink linkname={"About"} link={"#about"}/>
            </div>
        );
    }
}