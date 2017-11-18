import React from "react";
import PropTypes from 'prop-types';
import BurgerButton from "./BurgerButton";
import MenuDrawer from "./MenuDrawer";

const Menu = ({burgerClicked, drawerOpen}) => {
    return (
        <nav id="menu">
            <BurgerButton clickHandler={burgerClicked} isActive={drawerOpen}/>
            <MenuDrawer drawerOpen={drawerOpen}/>
        </nav>
    );
};

Menu.propTypes = {
    burgerClicked: PropTypes.func,
    isActive: PropTypes.bool,
};

export default Menu;
