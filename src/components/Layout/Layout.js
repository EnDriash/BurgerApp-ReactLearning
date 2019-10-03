import React from 'react';
import Aux from '../../hoc/auxillary.js';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
    return(
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;