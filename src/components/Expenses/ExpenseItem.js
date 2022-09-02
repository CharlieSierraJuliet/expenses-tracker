import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={updateTitle}>Click Me</button>
        <button onClick={reverse}>Click Me to reverse</button> */}
    </Card>
  );
}

export default ExpenseItem;
