import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import LogListItem from "./LogListItem";
import logs from "../../stores/logs-store";

describe.only("LogListItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <LogListItem log={logs[0]} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the item as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <LogListItem log={logs[0]} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
