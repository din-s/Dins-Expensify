import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "../setupTests";
import HelpPage from "../../components/HelpPage";

test("should display an error page ", () => {
  expect(toJson(shallow(<HelpPage />))).toMatchSnapshot();
});
