import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const saveFilterYear = (data) => {
    setYear(data);
  };

  const filteredElements=props.data.filter(expense=>expense.date.getFullYear().toString()===year)
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onApply={saveFilterYear} selected={year} />
        <ExpensesChart expenses={filteredElements}/>
        <div id="exp">
          <ExpenseList item={filteredElements} />
        </div>
      </Card>
    </div>
  );
}

export default Expenses;
