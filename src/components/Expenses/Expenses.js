import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) =>{
    
 const [fIlteredYear, setFIlteredYear] = useState("2022");
 

  const getSelectedYear = year =>{
    setFIlteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === fIlteredYear;
  })
  
  

    return(
      <div>
        <Card className="expenses">
        <ExpensesFilter getSelectedYear={getSelectedYear}
        fIlteredYear={fIlteredYear}
        />
        <ExpensesChart expense={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/> 
      </Card>
      </div>
    )
}

export default Expenses;  