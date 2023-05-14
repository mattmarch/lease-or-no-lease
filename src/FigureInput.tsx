import { NumericFormat } from "react-number-format";

type FigureInputProps = {
  displayName: string;
  value: number;
  setValue: (v: number) => void;
  isCurrency?: boolean;
  decimalPlaces?: number;
};

export const FigureInput = ({
  value,
  setValue,
  displayName,
  isCurrency,
  decimalPlaces,
}: FigureInputProps) => (
  <label className="flex justify-between space-x-2 items-baseline">
    {displayName}
    <NumericFormat
      className="ml-4 border rounded-md border-slate-300 p-1 w-28"
      value={value}
      onValueChange={(v) => setValue(v.floatValue || 0)}
      prefix={isCurrency ? "£" : undefined}
      decimalScale={
        decimalPlaces === undefined ? (isCurrency ? 2 : 0) : decimalPlaces
      }
      fixedDecimalScale={true}
      thousandSeparator=","
    />
  </label>
);
