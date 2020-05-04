import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", function () {
  let mountedApp;
  it("renders without crashing", () => {
    mountedApp = shallow(<App />);
  });
  it("renders a Theme Provider", () => {
    const theme = mountedApp.find("ThemeProvider");
    expect(theme.length).toBe(1);
  });
});
