import React, { useState } from "react";
import { AutonumericField } from "react-autonumeric";
import "./index.css";

const App = () => {
  const [value, setValue] = useState(1987.0308);
  return (
    <div>
      <div className="bg-slate-900 grid grid-cols-2 gap-8 p-4">
        <div className="bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-800 rounded-lg p-8 text-slate-200 font-body flex flex-col gap-4 shadow-lg">
          <h2 className="font-header text-4xl mb-2 font-extrabold text-violet-50">
            My awesome <span className="rainbow">Autonumeric</span> input.
          </h2>

          <div className="border-2 bg-slate-900/20 border-purple-900 shadow-lg rounded-lg p-4">
            <div>
              <label htmlFor="goodInput">
                <span className="rainbow">Autonumeric</span> Input
              </label>
            </div>
            <div>
              <AutonumericField
                className="p-2 rounded-lg border-2 border-purple-900 shadow-sm w-full text-right text-slate-900"
                id="goodInput"
                value={value}
                onChange={setValue}
                currencySymbol="€"
                decimalPlacesShownOnFocus={5}
              />
            </div>
          </div>
          <p>
            Display the currency symbol, or hide it; show a few decimals, but
            allow great precision. Only numbers, and as many decimals as you
            actually need. It&apos;s all up to you.
          </p>
          <p>Keep scrolling to see how you can use it.</p>
        </div>

        <div className="rounded-lg p-4 bg-white text-slate-900 flex flex-col gap-4 shadow-lg">
          <h2 className="text-lg">Your lame regular input.</h2>
          <div className="border-black border-2 p-2 shadow-lg">
            <label htmlFor="badInput">Regular input: </label>
            <input
              className="border-2 border-slate-400 p-1 rounded-sm"
              id="badInput"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
          <p>You just put text in it, and try not to make mistakes.</p>
        </div>
      </div>
      <div className="shadow-inner bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-800 p-12 text-slate-200 font-body ">
        <h1 className="font-header text-4xl text-violet-50 mb-2 font-extrabold">
          @tordek/react-autonumeric
        </h1>
        <p>
          Do you use React? Do you need numeric fields that aren&apos;t a pain
          to use?
        </p>
        <p>Then you&apos;ve found the right package.</p>

        <p>All you need is two extra libraries:</p>

        <pre className="border-2 border-violet-800 shadow-inner shadow-yellow-900 bg-black/70 p-4 rounded-lg my-4">{`npm install @tordek/react-autonumeric autonumeric`}</pre>

        <p>And then you can just start using it on your project:</p>

        <pre className="border-2 border-violet-800 shadow-inner shadow-yellow-900 bg-black/70 p-4 rounded-lg my-4">
          {`import { AutonumericField, AutonumericFieldProps } from "../AutonumericField";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <label>
      Look mom, I'm using Autonumeric in React!
      <AutonumericField value={value} onChange={setValue} />
    </label>
  );
}
          `}
        </pre>

        <p>
          @tordek/react-autonumeric is a simple wrapper over the excelent{" "}
          <a
            className="underline font-bold text-violet-400 drop-shadow-lg hover:text-violet-600 visited:text-slate-400"
            href="https://docs.autonumeric.org/"
          >
            Autonumeric.js
          </a>{" "}
          library in order to make it easier to work with React.
        </p>
      </div>
      <div className="shadow-inner p-12 bg-slate-900 text-slate-50">
        <h2 className="font-header text-2xl text-violet-50">Repository</h2>
        <p>
          You can help @tordek/react-autonumeric with issues, PRs, or just
          starring the project on{" "}
          <a
            className="underline font-bold text-violet-400 drop-shadow-lg hover:text-violet-600 visited:text-slate-400"
            href="https://github.com/Tordek/react-autonumeric"
          >
            github
          </a>
          .
        </p>
        <h2 className="font-header text-2xl text-violet-50 mt-4">License</h2>
        <p>@tordek/react-autonumeric is released under the MIT license.</p>
        <h2 className="font-header text-2xl text-violet-50 mt-4">Author</h2>
        <p>
          @tordek/react-autonumeric is <span className="rainbow">lovingly</span>{" "}
          crafted by{" "}
          <a className="underline font-bold text-violet-400 drop-shadow-lg hover:text-violet-600 visited:text-slate-400" href="https://tordek.me">
            Tordek
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default App;
