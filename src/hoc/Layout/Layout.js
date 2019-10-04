import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary.js';
import styles from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        };
    };

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    SideDrawerToogleButton = () => {
        this.setState( (state) => {
            return(
                {showSideDrawer: !state.showSideDrawer}
            );
        });
    };

    render(){
        return(
            <Aux>
                <Toolbar toogle={this.SideDrawerToogleButton} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerClosedHandler}/>

                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
    )};
};

export default Layout;