import React from "react";
import selectedExpenses from "../selectors/expenses";
import totalOfExpenses from "../selectors/TotalOfExpenses";
import numeral from "numeral";
import { connect } from "react-redux";

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord =
    expenseCount === 1 || expenseCount === 0 ? "expense" : "expenses";

  const formattedExpensesTotal = numeral(expenseTotal).format("$0,0.00");

  return (
    <div>
      <h3>
        Viewing {expenseCount} {expenseWord} , totalling{" "}
        {formattedExpensesTotal}
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: totalOfExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
