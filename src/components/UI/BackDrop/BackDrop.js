import React from 'react';
import styles from './BackDrop.css';

const backDrop = props => {
    return (
        props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
    )
};

export default backDrop;