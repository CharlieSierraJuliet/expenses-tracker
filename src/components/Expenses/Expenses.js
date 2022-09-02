import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const saveFilterYear = (data) => {
    setYear(data);
  };

  const filteredElements=props.data.filter(expense=>expense.date.getFullYear().toString()===year)
  let renderString=<p>अबे कंजूस </p>
  if(filteredElements.length>0)
  {
    renderString= filteredElements.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onApply={saveFilterYear} selected={year} />
        <div id="exp">
          {renderString}
        </div>
      </Card>
    </div>
  );
}

export default Expenses;
