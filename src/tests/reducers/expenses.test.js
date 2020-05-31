import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should setup default expenses filter", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should remove valid expense from the list ", () => {
  const id = "2";
  const action = {
    type: "REMOVE_EXPENSE",
    id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense on passing invalid expense id ", () => {
  const id = "31";
  const action = {
    type: "REMOVE_EXPENSE",
    id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    title: "Clothing",
    amount: 1200,
    note: "Shopping for friend",
    createdAt: moment()
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense ", () => {
  const editText = "This is editted expense";
  const id = "2";

  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates: {
      note: editText
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[1].note).toBe("This is editted expense");
});

test("should not edit expense on passing invalid id ", () => {
  const editText = "This is editted expense";
  const id = "12";

  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates: {
      note: editText
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
