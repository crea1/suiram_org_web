import React from "react";

export class BurgerButton extends React.Component {
    render() {
        return (
            <div className="menu-button">
                <div className="burger-icon">
                    <div className="burger-container">
                        <span className="burger-bun-top"/>
                        <span className="burger-filling"/>
                        <span className="burger-bun-bot"/>
                    </div>
                </div>
            </div>
        );
    }
}