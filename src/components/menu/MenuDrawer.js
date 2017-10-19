import React from "react";

export class MenuDrawer extends React.Component {

    render() {
        return (
            <div className={"menu-drawer " + (this.props.drawerOpen ? "menu-open" : "")}>
                <h1 style={{fontSize: '2vw'}}>menu</h1>
                <div>Home</div>
                <div>About</div>
            </div>
        );
    }
}