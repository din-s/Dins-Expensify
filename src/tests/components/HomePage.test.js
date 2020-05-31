import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HomePage from "../../components/HomePage";
import "../setupTests";

test("should render homepage correctly", () => {
  expect(toJson(shallow(<HomePage />))).toMatchSnapshot();
});
