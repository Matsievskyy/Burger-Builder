import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const ingredientsObj = props.ingredients;
    let ingredientsArr = [];
    for (const key in ingredientsObj) {
        for (let i = 0; i < ingredientsObj[key]; i++) {
            ingredientsArr.push(<BurgerIngredient key={key + i} type={key} />)
        }
    }


    const addIngredientMessage = () => {
        if(ingredientsArr.length === 0) {
            ingredientsArr = <p>Please start adding ingredients</p>
        }
    }

    addIngredientMessage()

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger