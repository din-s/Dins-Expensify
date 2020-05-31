import Header from "../../components/Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);

  expect(toJson(wrapper)).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
