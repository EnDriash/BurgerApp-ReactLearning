import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

class BurgerIndigrient extends Component {

    render () {
        let indigrient = null;

            switch (this.props.type) {
                case ('bread-bottom'):
                    indigrient = <div className={styles.BreadBottom}></div>
                    break;
                case('bread-top'):
                    indigrient = (
                        <div className={styles.BreadTop}>
                            <div className={styles.Seeds1}></div>
                            <div className={styles.Seeds2}></div>
                        </div>
                    )
                    break;
                case('meat'):
                    indigrient = <div className={styles.Meat}></div>
                    break;
                case('cheese'):
                    indigrient = <div className={styles.Cheese}></div>
                    break;
                case('bacon'):
                    indigrient = <div className={styles.Bacon}></div>
                    break;
                case('salad'):
                    indigrient = <div className={styles.Salad}></div>
                    break;
                default:
                    indigrient = null;
            }
        return indigrient;
    }
};

BurgerIndigrient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIndigrient;