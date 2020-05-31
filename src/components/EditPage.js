import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditPage = props => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        props.startEditExpense(props.expense.id, expense);
        props.history.push("/");
      }}
    />

    <button
      onClick={() => {
        props.startRemoveExpense(props.expense.id);
        props.history.push("/");
      }}
      // props.history.push('/')
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRemoveExpense: expenseId => dispatch(startRemoveExpense(expenseId)),
    startEditExpense: (expenseId, updates) =>
      dispatch(startEditExpense(expenseId, updates))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
