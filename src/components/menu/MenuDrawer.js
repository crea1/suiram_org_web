import React from "react";

export class MenuDrawer extends React.Component {

    render() {
        return (
            <div className={"menu-drawer " + (this.props.drawerOpen ? "menu-open" : "")}>
                a menu should be here
            </div>
        );
    }
}