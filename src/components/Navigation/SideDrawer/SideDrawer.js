import React from 'react';
import styles from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = props => {

    const attachedClasses = 
        props.open ? 
        [styles.SideDrawer, styles.Open] : [styles.SideDrawer, styles.Close];

    return(
        <Aux>
            <BackDrop 
                show={props.open} 
                clicked={props.closed} />

            <div className={attachedClasses.join(" ")} >
            <div className={styles.Logo}>
                <Logo />
            </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;