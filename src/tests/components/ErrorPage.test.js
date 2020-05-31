import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "../setupTests";
import ErrorPage from "../../components/ErrorPage";

test("should display an error page ", () => {
  expect(toJson(shallow(<ErrorPage />))).toMatchSnapshot();
});
