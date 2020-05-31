import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ExpenseForm from "../../components/ExpenseForm";
import "../setupTests";
import expenses from "../fixtures/expenses";

test("should render Expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render Expense", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
