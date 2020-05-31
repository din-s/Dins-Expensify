import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseSummary from "./ExpenseSummary";
const HomePage = () => (
  <div>
    <ExpenseListFilter />

    <ExpenseSummary />

    <ExpenseList />
  </div>
);

export default HomePage;
