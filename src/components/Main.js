import React from 'react';

import Menu from "./menu/Menu";
import {Welcome} from "./Welcome";
import {About} from "./About";
import {connect} from "react-redux";
import {actions} from "../reducers"

class Main extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <Menu burgerClicked={this.props.openMenu}
                      drawerOpen={this.props.menuOpen} />
                <section id="welcome">
                    <Welcome/>
                </section>
                <section id="about">
                    <About/>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuOpen: state.menuOpen
    };
};
const mapDispatchToProps = dispatch => {
    return {
        openMenu: () => dispatch(actions.openMenu()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main)