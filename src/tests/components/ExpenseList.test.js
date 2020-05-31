import React from "react";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ExpenseList } from "../../components/ExpenseList";
import "../setupTests";

test("should render expenses with expense", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should show empty expense message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
