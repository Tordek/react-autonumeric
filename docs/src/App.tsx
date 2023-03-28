import React, { useReducer, useState } from "react";
import { AutonumericField } from "@tordek/react-autonumeric";
import "./index.css";
import AutoNumeric from "autonumeric";

const reduceSettings = (
  state: Record<keyof AutoNumeric.Options, unknown>,
  [prop, newValue]: [keyof AutoNumeric.Options, unknown]
) => {
  return Object.entries(state).reduce((v, [key, value]) => {
    if (key === prop) {
      if (newValue === undefined) {
        return v;
      }
      return { ...v, [key]: newValue };
    }
    return { ...v, [key]: value };
  }, {} as Record<string, any>);
};
const initialSettings = {
  currencySymbol: "",
  currencySymbolPlacement: "p",
  caretPositionOnFocus: 'decimalLeft',
  decimalPlaces: 2,
  decimalCharacter: ".",
  digitGroupSeparator: " ",
};

const App = () => {
  const [value, setValue] = useState(1987.0308);
  const [settings, changeSettings] = useReducer(
    reduceSettings,
    initialSettings
  );
  return (
    <div>
      <div className="bg-slate-900 md:grid md:grid-cols-2 gap-8 p-4">
        <div className="bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-800 rounded-lg p-8 text-slate-200 font-body flex flex-col gap-4 shadow-lg mb-4 md:mb-0">
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
      <div className="shadow-inner bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-800 p-4 md:p-12 text-slate-200 font-body ">
        <h1 className="font-header text-4xl text-violet-50 mb-2 font-extrabold">
          @tordek/react-autonumeric
        </h1>
        <p>
          Do you use React? Do you need numeric fields that aren&apos;t a pain
          to use?
        </p>
        <p>Then you&apos;ve found the right package.</p>

        <p>All you need is two extra libraries:</p>

        <pre className="border-2 border-violet-800 shadow-inner shadow-yellow-900 bg-black/70 p-4 rounded-lg my-4 overflow-auto">{`npm install @tordek/react-autonumeric autonumeric`}</pre>

        <p>And then you can just start using it on your project:</p>

        <pre className="border-2 border-violet-800 shadow-inner shadow-yellow-900 bg-black/70 p-4 rounded-lg my-4 overflow-auto">
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
      <div className="p-12 shadow-inner bg-slate-200 font-body">
        <h2 className="font-header text-2xl ">Settings playground</h2>
        <div className="w-1/3 m-auto">
          <div>
            <label htmlFor="goodInput">
              <span>Autonumeric</span> Input
            </label>
          </div>
          <div>
            <AutonumericField
              className="p-2 rounded-lg border-2 border-purple-900 shadow-sm w-full text-right text-slate-900"
              id="goodInput"
              value={value}
              onChange={setValue}
              currencySymbol={settings.currencySymbol}
              currencySymbolPlacement={settings.currencySymbolPlacement}
              caretPositionOnFocus={settings.caretPositionOnFocus}
              decimalPlaces={settings.decimalPlaces}
              decimalCharacter={settings.decimalCharacter}
              digitGroupSeparator={settings.digitGroupSeparator}
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-end items-center">
              <label htmlFor="currencySymbol">currencySymbol:</label>
            </div>
            <div>
              <input
                className="py-1 px-2 rounded-md"
                id="currencySymbol"
                value={settings.currencySymbol}
                onChange={(e) =>
                  changeSettings(["currencySymbol", e.target.value])
                }
              />
            </div>
            <div className="flex justify-end items-center">
              <label htmlFor="currencySymbolPlacement">
                currencySymbolPlacement:
              </label>
            </div>
            <div className="flex gap-3 px-2 py-1">
              <label>
                Prefix{" "}
                <input
                  type="radio"
                  value="p"
                  checked={settings.currencySymbolPlacement === "p"}
                  onChange={(e) =>
                    changeSettings(["currencySymbolPlacement", e.target.value])
                  }
                />
              </label>
              <label>
                Suffix{" "}
                <input
                  type="radio"
                  value="s"
                  checked={settings.currencySymbolPlacement === "s"}
                  onChange={(e) =>
                    changeSettings(["currencySymbolPlacement", e.target.value])
                  }
                />
              </label>
            </div>
            <div className="flex justify-end items-center">
              <label htmlFor="caretPositionOnFocus">
                caretPositionOnFocus:
              </label>
            </div>
            <div className="flex gap-3 px-2 py-1">
              <label>
                Start{" "}
                <input
                  type="radio"
                  value="start"
                  checked={settings.caretPositionOnFocus === "start"}
                  onChange={(e) =>
                    changeSettings(["caretPositionOnFocus", e.target.value])
                  }
                />
              </label>
              <label>
                Before Decimal{" "}
                <input
                  type="radio"
                  value="decimalLeft"
                  checked={settings.caretPositionOnFocus === "decimalLeft"}
                  onChange={(e) =>
                    changeSettings(["caretPositionOnFocus", e.target.value])
                  }
                />
              </label>
              <label>
                After Decimal{" "}
                <input
                  type="radio"
                  value="decimalRight"
                  checked={settings.caretPositionOnFocus === "decimalRight"}
                  onChange={(e) =>
                    changeSettings(["caretPositionOnFocus", e.target.value])
                  }
                />
              </label>
              <label>
                End{" "}
                <input
                  type="radio"
                  value="end"
                  checked={settings.caretPositionOnFocus === "end"}
                  onChange={(e) =>
                    changeSettings(["caretPositionOnFocus", e.target.value])
                  }
                />
              </label>
            </div>
            <div className="justify-end items-center flex">
              <label htmlFor="decimalPlaces">decimalPlaces:</label>
            </div>
            <div>
              <input
                className="py-1 px-2 rounded-md"
                id="decimalPlaces"
                value={settings.decimalPlaces}
                onChange={(e) =>
                  changeSettings(["decimalPlaces", Number(e.target.value) || 0])
                }
              />
            </div>
            <div className="flex justify-end items-center">
              <label htmlFor="digitGroupSeparator">Digit grouping</label>
            </div>
            <div className="flex gap-3 px-2 py-1">
              <label>
                1.000,00{" "}
                <input
                  type="radio"
                  value="end"
                  checked={
                    settings.decimalCharacter === "," &&
                    settings.digitGroupSeparator === "."
                  }
                  onChange={(e) => {
                    changeSettings(["decimalCharacter", ","]);
                    changeSettings(["digitGroupSeparator", "."]);
                  }}
                />
              </label>
              <label>
                1,000.00{" "}
                <input
                  type="radio"
                  value="end"
                  checked={
                    settings.decimalCharacter === "." &&
                    settings.digitGroupSeparator === ","
                  }
                  onChange={(e) => {
                    changeSettings(["decimalCharacter", "."]);
                    changeSettings(["digitGroupSeparator", ","]);
                  }}
                />
              </label>
              <label>
                1 000.00{" "}
                <input
                  type="radio"
                  value="end"
                  checked={
                    settings.decimalCharacter === "." &&
                    settings.digitGroupSeparator === " "
                  }
                  onChange={(e) => {
                    changeSettings(["decimalCharacter", "."]);
                    changeSettings(["digitGroupSeparator", " "]);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="mt-8">
            <p>
              Check out the complete list of options at{" "}
              <a
                className="underline font-bold text-violet-400 drop-shadow-lg hover:text-violet-600 visited:text-slate-400"
                href="https://docs.autonumeric.org/Documentation/configuration%20options/"
              >
                Autonumeric.js's configuration docs
              </a>
              .
            </p>
          </div>
        </div>
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
          <a
            className="underline font-bold text-violet-400 drop-shadow-lg hover:text-violet-600 visited:text-slate-400"
            href="https://tordek.me"
          >
            Tordek
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default App;
