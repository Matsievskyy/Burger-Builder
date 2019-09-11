import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary =(props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <div style={{width: '100%',  margin: 'auto', textAlign: 'center'}}>
                <Burger ingredients={props.ingredients}/>
                
            </div>
            <Button 
            btnType="Danger"
            clicked={props.checkoutCancelled}>Cancel</Button>
            <Button 
            btnType="Success"
            clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
};

export default checkoutSummary;