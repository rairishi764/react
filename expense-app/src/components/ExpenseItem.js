import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseAmount from './ExpenseAmount'
const ExpenseItem = (props) =>{

    return( 
    <div className="expense-item">
            
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <ExpenseAmount amount={props.amount}></ExpenseAmount>
        </div>
    </div>
    );
}

export default ExpenseItem;