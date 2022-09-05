import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpenses=(props)=>{
    const [isAdding,setIsAdding]=useState(false)
const dataHandler=(data)=>{
    
    const enteredData={
        ...data,
        id:Math.random().toString()
    }

    props.onReceiveData(enteredData)
    setIsAdding(false)
}

const addExpense=()=>{
    setIsAdding(true)
}

const reRender=()=>{
    setIsAdding(false)
}
    return(
        <div className="new-expense">
         {!isAdding && <button onClick={addExpense}>Add Expense</button>}
        {isAdding && <ExpenseForm onSave={dataHandler} onCancel={reRender} />}
        </div>
    )
}
export default NewExpenses;