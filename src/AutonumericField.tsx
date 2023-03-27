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
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "ref" | "onChange" | "type"
> &
  Omit<AutoNumeric.Options, "readOnly">;

const AutonumericField = forwardRef<
  HTMLInputElement | null,
  AutonumericFieldProps
>(function AutoFieldInput(
  {
    value,
    onChange,
    onInputError,
    inputMode = "decimal",

    allowDecimalPadding,
    caretPositionOnFocus,
    createLocalList,
    currencySymbol,
    currencySymbolPlacement,
    decimalCharacter,
    decimalCharacterAlternative,
    decimalPlaces,
    decimalPlacesRawValue,
    decimalPlacesShownOnBlur,
    decimalPlacesShownOnFocus,
    defaultValueOverride,
    digitalGroupSpacing,
    digitGroupSeparator,
    divisorWhenUnfocused,
    emptyInputBehavior,
    failOnUnknownOption,
    formatOnPageLoad,
    historySize,
    isCancellable,
    leadingZero,
    maximumValue,
    minimumValue,
    modifyValueOnWheel,
    negativeBracketsTypeOnBlur,
    negativePositiveSignPlacement,
    noEventListeners,
    onInvalidPaste,
    outputFormat,
    overrideMinMaxLimits,
    rawValueDivisor,
    readOnly,
    roundingMethod,
    saveValueToSessionStorage,
    selectNumberOnly,
    selectOnFocus,
    serializeSpaces,
    showOnlyNumbersOnFocus,
    showPositiveSign,
    showWarnings,
    styleRules,
    suffixText,
    symbolWhenUnfocused,
    unformatOnHover,
    unformatOnSubmit,
    wheelStep,
    ...inputProps
  },
  ref
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoNumeric = useRef<AutoNumeric | null>(null);

  const onRemount = useCallback(
    (newRef: HTMLInputElement | null) => {
      inputRef.current = newRef;

      autoNumeric.current?.remove();
      if (newRef !== null) {
        autoNumeric.current = new AutoNumeric(newRef, null, {
          allowDecimalPadding,
          caretPositionOnFocus,
          createLocalList,
          currencySymbol,
          currencySymbolPlacement,
          decimalCharacter,
          decimalCharacterAlternative,
          decimalPlaces,
          decimalPlacesRawValue,
          decimalPlacesShownOnBlur,
          decimalPlacesShownOnFocus,
          defaultValueOverride,
          digitalGroupSpacing,
          digitGroupSeparator,
          divisorWhenUnfocused,
          emptyInputBehavior,
          failOnUnknownOption,
          formatOnPageLoad,
          historySize,
          isCancellable,
          leadingZero,
          maximumValue,
          minimumValue,
          modifyValueOnWheel,
          negativeBracketsTypeOnBlur,
          negativePositiveSignPlacement,
          noEventListeners,
          onInvalidPaste,
          outputFormat,
          overrideMinMaxLimits,
          rawValueDivisor,
          readOnly,
          roundingMethod,
          saveValueToSessionStorage,
          selectNumberOnly,
          selectOnFocus,
          serializeSpaces,
          showOnlyNumbersOnFocus,
          showPositiveSign,
          showWarnings,
          styleRules,
          suffixText,
          symbolWhenUnfocused,
          unformatOnHover,
          unformatOnSubmit,
          wheelStep,
        });
      }
    },
    [
      allowDecimalPadding,
      caretPositionOnFocus,
      createLocalList,
      currencySymbol,
      currencySymbolPlacement,
      decimalCharacter,
      decimalCharacterAlternative,
      decimalPlaces,
      decimalPlacesRawValue,
      decimalPlacesShownOnBlur,
      decimalPlacesShownOnFocus,
      defaultValueOverride,
      digitalGroupSpacing,
      digitGroupSeparator,
      divisorWhenUnfocused,
      emptyInputBehavior,
      failOnUnknownOption,
      formatOnPageLoad,
      historySize,
      isCancellable,
      leadingZero,
      maximumValue,
      minimumValue,
      modifyValueOnWheel,
      negativeBracketsTypeOnBlur,
      negativePositiveSignPlacement,
      noEventListeners,
      onInvalidPaste,
      outputFormat,
      overrideMinMaxLimits,
      rawValueDivisor,
      readOnly,
      roundingMethod,
      saveValueToSessionStorage,
      selectNumberOnly,
      selectOnFocus,
      serializeSpaces,
      showOnlyNumbersOnFocus,
      showPositiveSign,
      showWarnings,
      styleRules,
      suffixText,
      symbolWhenUnfocused,
      unformatOnHover,
      unformatOnSubmit,
      wheelStep,
    ]
  );

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
