import React from "react";

export class BurgerButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {isActive: false};

        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div className={"menu-button"}
                 onClick={this.handleClick}>
                <div className="burger-icon">
                    <div className="burger-container">
                        <span className={"burger-bun-top"  + (this.state.isActive ? " burger-clicked" :"")}/>
                        <span className={"burger-filling"  + (this.state.isActive ? " burger-clicked" :"")}/>
                        <span className={"burger-bun-bot"  + (this.state.isActive ? " burger-clicked" :"")}/>
                    </div>
                </div>
            </div>
        );
    }

    handleClick() {
        this.setState(
            prevState => ({
                isActive: !prevState.isActive
            })
        );
    }
}