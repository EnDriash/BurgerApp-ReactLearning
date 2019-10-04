import React from 'react';
import styles from './DrawerToggler.css';

const drawerToogler = props => {

    return(
        <div className={styles.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToogler;