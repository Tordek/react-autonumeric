import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
} from "react";
import AutoNumeric from "autonumeric";

type AutonumericFieldProps = {
  value?: number;
  onChange?: (value: number) => void;
  onInputError?: (e: unknown) => void;
  caretPositionOnFocus?: null | AutoNumeric.Options["caretPositionOnFocus"];
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "ref" | "onChange" | "type"
> &
  Omit<AutoNumeric.Options, "readOnly" | "caretPositionOnFocus">;

const AutonumericField = forwardRef<
  HTMLInputElement | null,
  AutonumericFieldProps
>(function AutoFieldInput(
  {
    value,
    onChange,
    onInputError,
    inputMode = "decimal",

    allowDecimalPadding = true,
    caretPositionOnFocus = null,
    createLocalList = true,
    currencySymbol = "",
    currencySymbolPlacement = "p",
    decimalCharacter = ".",
    decimalCharacterAlternative = null,
    decimalPlaces = 2,
    decimalPlacesRawValue = decimalPlaces,
    decimalPlacesShownOnBlur = decimalPlaces,
    decimalPlacesShownOnFocus = decimalPlaces,
    digitalGroupSpacing = "3",
    digitGroupSeparator = ",",
    divisorWhenUnfocused = null,
    emptyInputBehavior = "focus",
    failOnUnknownOption = false,
    formatOnPageLoad = true,
    historySize = 20,
    isCancellable = true,
    leadingZero = "deny",
    maximumValue = "10000000000000",
    minimumValue = "-10000000000000",
    modifyValueOnWheel = true,
    negativeBracketsTypeOnBlur = null,
    negativePositiveSignPlacement = null,
    onInvalidPaste = "error",
    outputFormat = null,
    overrideMinMaxLimits = null,
    rawValueDivisor = null,
    readOnly,
    roundingMethod = "S",
    saveValueToSessionStorage = false,
    selectNumberOnly = false,
    selectOnFocus = false,
    serializeSpaces = "+",
    showOnlyNumbersOnFocus = false,
    showPositiveSign = false,
    showWarnings = true,
    styleRules = null,
    suffixText = "",
    symbolWhenUnfocused = null,
    unformatOnHover = true,
    unformatOnSubmit = false,
    wheelStep = "progressive",
    ...inputProps
  },
  ref
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoNumeric = useRef<AutoNumeric | null>(null);

  const onRemount = useCallback((newRef: HTMLInputElement | null) => {
    inputRef.current = newRef;

    autoNumeric.current?.remove();
    if (newRef !== null) {
      autoNumeric.current = new AutoNumeric(newRef, null);
    }
  }, []);

  useEffect(() => {
    autoNumeric.current?.update({ currencySymbol });
  }, [currencySymbol]);

  useEffect(() => {
    autoNumeric.current?.update({ allowDecimalPadding });
  }, [allowDecimalPadding]);

  useEffect(() => {
    autoNumeric.current?.update({
      caretPositionOnFocus,
    } as AutoNumeric.Options); // This is marked as non-null, but accepts null.
  }, [caretPositionOnFocus]);

  useEffect(() => {
    autoNumeric.current?.update({ createLocalList });
  }, [createLocalList]);

  useEffect(() => {
    autoNumeric.current?.update({ currencySymbolPlacement });
  }, [currencySymbolPlacement]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalCharacter, digitGroupSeparator });
  }, [decimalCharacter, digitGroupSeparator]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalCharacterAlternative });
  }, [decimalCharacterAlternative]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalPlaces });
  }, [decimalPlaces]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalPlacesRawValue });
  }, [decimalPlacesRawValue]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalPlacesShownOnBlur });
  }, [decimalPlacesShownOnBlur]);

  useEffect(() => {
    autoNumeric.current?.update({ decimalPlacesShownOnFocus });
  }, [decimalPlacesShownOnFocus]);

  useEffect(() => {
    autoNumeric.current?.update({ digitalGroupSpacing });
  }, [digitalGroupSpacing]);

  useEffect(() => {
    autoNumeric.current?.update({ divisorWhenUnfocused });
  }, [divisorWhenUnfocused]);

  useEffect(() => {
    autoNumeric.current?.update({ emptyInputBehavior });
  }, [emptyInputBehavior]);

  useEffect(() => {
    autoNumeric.current?.update({ failOnUnknownOption });
  }, [failOnUnknownOption]);

  useEffect(() => {
    autoNumeric.current?.update({ formatOnPageLoad });
  }, [formatOnPageLoad]);

  useEffect(() => {
    autoNumeric.current?.update({ historySize });
  }, [historySize]);

  useEffect(() => {
    autoNumeric.current?.update({ isCancellable });
  }, [isCancellable]);

  useEffect(() => {
    autoNumeric.current?.update({ leadingZero });
  }, [leadingZero]);

  useEffect(() => {
    autoNumeric.current?.update({ maximumValue });
  }, [maximumValue]);

  useEffect(() => {
    autoNumeric.current?.update({ minimumValue });
  }, [minimumValue]);

  useEffect(() => {
    autoNumeric.current?.update({ modifyValueOnWheel });
  }, [modifyValueOnWheel]);

  useEffect(() => {
    autoNumeric.current?.update({ negativeBracketsTypeOnBlur });
  }, [negativeBracketsTypeOnBlur]);

  useEffect(() => {
    autoNumeric.current?.update({ negativePositiveSignPlacement });
  }, [negativePositiveSignPlacement]);

  useEffect(() => {
    autoNumeric.current?.update({ onInvalidPaste });
  }, [onInvalidPaste]);

  useEffect(() => {
    autoNumeric.current?.update({ outputFormat });
  }, [outputFormat]);

  useEffect(() => {
    autoNumeric.current?.update({ overrideMinMaxLimits });
  }, [overrideMinMaxLimits]);

  useEffect(() => {
    autoNumeric.current?.update({ rawValueDivisor });
  }, [rawValueDivisor]);

  useEffect(() => {
    autoNumeric.current?.update({ roundingMethod });
  }, [roundingMethod]);

  useEffect(() => {
    autoNumeric.current?.update({ saveValueToSessionStorage });
  }, [saveValueToSessionStorage]);

  useEffect(() => {
    autoNumeric.current?.update({ selectNumberOnly });
  }, [selectNumberOnly]);

  useEffect(() => {
    autoNumeric.current?.update({ selectOnFocus });
  }, [selectOnFocus]);

  useEffect(() => {
    autoNumeric.current?.update({ serializeSpaces });
  }, [serializeSpaces]);

  useEffect(() => {
    autoNumeric.current?.update({ showOnlyNumbersOnFocus });
  }, [showOnlyNumbersOnFocus]);

  useEffect(() => {
    autoNumeric.current?.update({ showPositiveSign });
  }, [showPositiveSign]);

  useEffect(() => {
    autoNumeric.current?.update({ showWarnings });
  }, [showWarnings]);

  useEffect(() => {
    autoNumeric.current?.update({ styleRules });
  }, [styleRules]);

  useEffect(() => {
    autoNumeric.current?.update({ suffixText });
  }, [suffixText]);

  useEffect(() => {
    autoNumeric.current?.update({ symbolWhenUnfocused });
  }, [symbolWhenUnfocused]);

  useEffect(() => {
    autoNumeric.current?.update({ unformatOnHover });
  }, [unformatOnHover]);

  useEffect(() => {
    autoNumeric.current?.update({ unformatOnSubmit });
  }, [unformatOnSubmit]);

  useEffect(() => {
    autoNumeric.current?.update({ wheelStep });
  }, [wheelStep]);

  useImperativeHandle<
    HTMLInputElement | null,
    (HTMLInputElement & { autonumeric: AutoNumeric }) | null
  >(ref, () => (inputRef.current && autoNumeric.current ? { ...inputRef.current, autonumeric: autoNumeric.current } : null), []);

  useEffect(() => {
    try {
      if (value !== undefined && autoNumeric.current?.getNumber() !== value) {
        autoNumeric.current?.set(value);
      }
    } catch (e) {
      onInputError?.(e);
    }
  }, [value, onInputError]);

  return (
    <input
      onChange={(e) => {
        const value = AutoNumeric.getAutoNumericElement(e.target).getNumber();
        if (value === null) return;
        onChange?.(value);
      }}
      type="text"
      inputMode={inputMode}
      ref={onRemount}
      readOnly={readOnly}
      {...inputProps}
    />
  );
});

export { AutonumericField };
export type { AutonumericFieldProps };
