import React from 'react';
import classes from './Order.css'
const Order = (props) => {
    const ingredients = []
    for (let key in props.ingredients) {
        ingredients.push(
            {
                name: key,
                ammount: props.ingredients[key]
            }
        )
    }

    let ingredientsOut = null;
    ingredientsOut = ingredients.map((elem) => {
        return (
        <span
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
        key={elem.name}>{`${elem.name}: ${+elem.ammount}`}</span>
        )
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients:</p>
                {ingredientsOut}
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    )
}

export default Order