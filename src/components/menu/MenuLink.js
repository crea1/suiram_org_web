import React from "react";

export class MenuLink extends React.Component {

    render() {
        return (
            <div className={"menu-link"}><a href={this.props.link}>{this.props.linkname}</a></div>
        );
    }
}