import React, {Component} from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../BackDrop/BackDrop.js'

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading ;
    }
    
    render () {
        return (
        <Aux>
            <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div 
            className={styles.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                    {this.props.children}
            </div>
        </Aux>
        )
    }
} 

export default Modal;