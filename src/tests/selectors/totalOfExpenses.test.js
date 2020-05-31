import totalOfExpense from "../../selectors/TotalOfExpenses";
import expenses from "../fixtures/expenses";

// console.log(totalOfExpense)

test("should give correct total for all expenses", () => {
  const test = totalOfExpense(expenses);
  expect(test).toBe(1270);
});

test("shouldd give zero total for no expenses", () => {
  expect(totalOfExpense()).toBe(0);
});

test("should give correct for single expense", () => {
  expect(totalOfExpense([expenses[1]])).toBe(700);
});
