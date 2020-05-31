import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

const addExpenses = addExpense({
  title: "New expense",
  amount: 5000,
  note: "This is note for the expense"
});

test("should add, expense with values", () => {
  expect(addExpenses).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      title: "New expense",
      amount: 5000,
      note: "This is note for the expense",
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

test("should add default add expense", () => {
  const expense = addExpense();

  expect(expense).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      title: "",
      amount: 0,
      createdAt: 0,
      note: ""
    }
  });
});

test("should remove existing expense", () => {
  const testVariable = removeExpense({ id: "123sdf" });
  expect(testVariable).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123sdf"
  });
});

test("should edit existing expense", () => {
  const testVariable = editExpense("123dfg", {
    note: "Editted note"
  });

  expect(testVariable).toEqual({
    type: "EDIT_EXPENSE",
    id: "123dfg",
    updates: {
      note: "Editted note"
    }
  });
});
