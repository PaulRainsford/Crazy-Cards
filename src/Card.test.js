import React from "react";
import ReactDOM from "react-dom";
import { Cards } from "./Cards";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

it("filters cards based on employment type", function() {
  const validatePropertyFn = jest.fn();
  const student = {
    annualIncome: "lowerIncome",
    employmentType: "student"
  };
  const wrapper = mount(<Cards person={student} />);
  expect(wrapper.find(".items")).toBeDefined();
  expect(wrapper.find(".items")).toHaveLength(2);
});