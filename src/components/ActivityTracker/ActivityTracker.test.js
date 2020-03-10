import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { LogProvider } from "../../contexts/LogContext";
import ActivityTracker from "./ActivityTracker";

describe("ActivityTracker component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <LogProvider>
        <ActivityTracker />
      </LogProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <LogProvider>
          <ActivityTracker />
        </LogProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
