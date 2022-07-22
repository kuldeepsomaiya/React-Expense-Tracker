import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    
    //Created single state Insted of multiple State
    // const[userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredDate:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });

        setEnteredTitle(event.target.value);

    };

    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        setEnteredDate(event.target.value);

    };
    
    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        setEnteredAmount(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData); 
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="Date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            
            <div className="new-expense__actions">
                <button type='cancel' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;