import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpenseList=(props)=>{
   
  if(props.item.length===0)
  {
   return <p>अबे कंजूस </p>
  }

  return (
    <ul className='expenses-list'>
        {props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )

}

export default ExpenseList;