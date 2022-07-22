import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';
import './Expenses.css';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (changedYear) => {
        console.log("inside Expense.js");
        setFilteredYear(changedYear);

    }

    const filteredList = props.items.filter(expenseList => {
        return expenseList.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>Sorry no expense found for filtered year</p>;

    // if (filteredList.length > 0) {
    //     expensesContent = filteredList.map((expense) =>
    //     (
    //         <ExpenseItem 
    //             key={expense.id} 
    //             title={expense.title} 
    //             amount={expense.amount} 
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseList items = {filteredList} />
                <ExpenseChart expenses= {filteredList} />
            </Card>
        </div>

    );
}

export default Expenses;