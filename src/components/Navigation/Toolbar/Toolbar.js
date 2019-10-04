import React from 'react';
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToogler from '../SideDrawer/DrawerToogler/DrawerToogler';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <DrawerToogler clicked={props.toogle}/>
        
        <div className={styles.Logo}>
            <Logo />
        </div>

        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;