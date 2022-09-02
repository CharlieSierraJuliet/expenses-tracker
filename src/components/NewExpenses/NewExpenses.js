import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';
const NewExpenses=(props)=>{
    
const dataHandler=(data)=>{
    
    const enteredData={
        ...data,
        id:Math.random().toString()
    }

    props.onReceiveData(enteredData)
}

    return(
        <div className="new-expense">
            <ExpenseForm onSave={dataHandler}/>
        </div>
    )
}
export default NewExpenses;