import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup Default Redux filters state ", () => {
  // as observed in the redux tab there is "@@INIT" action dispatching first
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup sortBy amount dispatch ", () => {
  const state = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT"
  });

  expect(state.sortBy).toBe("amount");
});

test("should setup sortBy date dispatch", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };

  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should setup startDate dispatch", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: moment(1)
  };

  const state = filtersReducer(undefined, action);

  expect(state.startDate).toEqual(moment(1));
});

test("should setup endDate dispatch", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: moment(1)
  };

  const state = filtersReducer(undefined, action);

  expect(state.endDate).toEqual(moment(1));
});

test("should setup set-text-filter dispatch", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "a"
  };

  const state = filtersReducer(undefined, action);

  expect(state.text).toBe("a");
});
