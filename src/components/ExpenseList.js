import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";
import { Link } from "react-router-dom";

export const ExpenseList = props => (
  <div>
    {!props.expenses.length && (
      <p>
        No Expense to display{" "}
        <Link to="/create">
          <h4>Add now </h4>
        </Link>{" "}
        to see here
      </p>
    )}
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
