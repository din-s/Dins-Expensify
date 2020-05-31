const getExpenses = expenses => expenses.map(expense => expense.amount);

const totalOfExpenses = (expenses = []) =>
  expenses.length === 0
    ? 0
    : getExpenses(expenses).reduce(
        (total, currentVal) => total + currentVal,
        0
      );
export default totalOfExpenses;
