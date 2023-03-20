import React from "react";
import ReactDOMClient from "react-dom/client";
import { AutonumericField } from "../src";

describe("AutonumericField", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = ReactDOMClient.createRoot(div);
    root.render(<AutonumericField value={0} setValue={() => null} />);
    root.unmount();
  });
});
