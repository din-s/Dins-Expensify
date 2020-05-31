import expenses from "../fixtures/expenses";
import moment from "moment";
import selectExpenses from "../../selectors/expenses";

test("should select expenses based on text filter", () => {
  const filters = {
    text: "a",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should select expenses based on startDate filter", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should select expenses based on endDate filter", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should select expenses based on sortBy Date filter", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should select expenses based on sortBy amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
