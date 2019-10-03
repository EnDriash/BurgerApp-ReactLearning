import React from 'react';

import styles from './Burger.css';
import BurgerIndigrient from './BurgeringIndigrients/BurgeringIngridients.js';

const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map( (_, index) => {
                return <BurgerIndigrient key={igKey + index} type={igKey} />
            } )
        })
        .reduce((a, b) => {
            return a.concat(b)
        }, []);
    
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please choose your ingredients!</p>
    } 

    return(
        <div className={styles.Burger}>
            <BurgerIndigrient type="bread-top" />
            {transformedIngredients}
            <BurgerIndigrient type="bread-bottom" />
        </div>
    );
};

export default burger;