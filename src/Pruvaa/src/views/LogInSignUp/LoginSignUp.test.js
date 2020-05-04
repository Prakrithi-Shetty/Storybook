import React from "react";
import { shallow } from "enzyme";
import LoginSignUp from "./LoginSignUp";

describe("LoginSignUp", function () {
  let mountedLoginSignUp;
  it("renders without crashing", () => {
    mountedLoginSignUp = shallow(<LoginSignUp />);
  });
});
