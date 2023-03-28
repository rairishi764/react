import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseAmount from './ExpenseAmount';
import Card from '../ui/Card';
import React, { useState } from 'react'; //react hook

const ExpenseItem = (props) =>{
    const [title, setTitle]=React.useState(props.title); //setting prop.title to state to let know react that it needs to lookout for its change

    const clickHandler =() =>{
        setTitle('Updated!'); //call the state setting fn, able to assign val to const- taken care by react

        console.log(title);
    
    }

    return( 
    <Card className="expense-item">
            
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <ExpenseAmount amount={props.amount}></ExpenseAmount>
            <button onClick={clickHandler}> Change Title </button>
        </div>
    </Card>
    );
}


export default ExpenseItem;