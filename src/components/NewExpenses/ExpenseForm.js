import './ExpenseForm.css'
import { useState } from 'react'
 const ExpenseForm=(props)=>{
    const[title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    const titleEventHandler=(event)=>{
        setTitle(event.target.value)
    }

    const amountEventHandler=(event)=>{
       setAmount(event.target.value)
    }

    const dateEventHandler=(event)=>{
        setDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const data={
            title:title,
            amount:+amount,
            date:new Date(date)
        }

        props.onSave(data)

    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleEventHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.1' step='0.1' value={amount} onChange={amountEventHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateEventHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
        
    )
 }

 export default ExpenseForm;