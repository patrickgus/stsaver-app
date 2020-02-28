import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ActivityTracker from "./ActivityTracker";

describe("ActivityTracker component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ActivityTracker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<ActivityTracker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
