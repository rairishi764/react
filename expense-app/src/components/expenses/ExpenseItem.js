import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseAmount from './ExpenseAmount'
import Card from '../ui/Card';
const ExpenseItem = (props) =>{

    return( 
    <Card className="expense-item">
            
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <ExpenseAmount amount={props.amount}></ExpenseAmount>
        </div>
    </Card>
    );
}

export default ExpenseItem;