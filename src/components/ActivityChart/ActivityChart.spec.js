import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ActivityChart from "./ActivityChart";
import logs from "../../stores/logs-store";

describe("ActivityChart component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <ActivityChart logs={logs} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the chart as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ActivityChart logs={logs} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
