import React from "react";
import PropTypes from 'prop-types';

const BurgerButton = ({clickHandler, isActive}) => {

    return (
        <div className={"menu-button " + (isActive ? " menu-open" : "")}
             onClick={clickHandler}>
            <div className="burger-icon">
                <div className="burger-container">
                    <span className={"burger-bun-top" + (isActive ? " burger-clicked" : "")}/>
                    <span className={"burger-filling" + (isActive ? " burger-clicked" : "")}/>
                    <span className={"burger-bun-bot" + (isActive ? " burger-clicked" : "")}/>
                </div>
            </div>
        </div>
    );

};

BurgerButton.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default BurgerButton;