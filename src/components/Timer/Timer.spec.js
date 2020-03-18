import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Timer from "./Timer";

describe("Timer component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Timer defaultBreakLength={5} defaultSessionLength={20} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the timer as expected", () => {
    const tree = renderer
      .create(<Timer defaultBreakLength={5} defaultSessionLength={20} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
