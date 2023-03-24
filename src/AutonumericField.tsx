import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import AutoNumeric from "autonumeric";

type AutonumericFieldProps = {
  value: number;
  onChange: (value: number) => void;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "ref"
>;

const AutonumericField = forwardRef<
  HTMLInputElement | null,
  AutonumericFieldProps
>(function AutoFieldInput({ value, onChange: setValue, ...inputProps }, ref) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoNumeric = useRef<AutoNumeric | null>(null);

  const onRemount = (newRef: HTMLInputElement | null) => {
    inputRef.current = newRef;
    if (autoNumeric.current) {
      autoNumeric.current.remove();
      if (newRef) {
        autoNumeric.current.init(newRef);
      }
    } else {
      if (newRef) {
        autoNumeric.current = new AutoNumeric(newRef, value, {
          allowDecimalPadding: false,
        });
      }
    }
  };
  useImperativeHandle<
    HTMLInputElement | null,
    HTMLInputElement | null
  >(ref, () => inputRef.current, [inputRef]);
  useEffect(() => {
    try {
      autoNumeric.current?.set(value);
    } catch (e) {
      console.error(e);
    }
  }, [value]);

  return (
    <input
      onChange={(e) => {
        const value = AutoNumeric.getAutoNumericElement(e.target).getNumber();
        if (value === null) return;
        setValue(value);
      }}
      ref={onRemount}
      {...inputProps}
    />
  );
});

export { AutonumericField };
export type { AutonumericFieldProps };
