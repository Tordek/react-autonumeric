import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AutonumericField } from "../.";

const App = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <AutonumericField value={value} setValue={setValue} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
