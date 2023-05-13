import { NumericFormat } from "react-number-format";

type FigureInputProps = {
  displayName: string;
  value: number;
  setValue: (v: number) => void;
  isCurrency?: boolean;
};

export const FigureInput = ({
  value,
  setValue,
  displayName,
  isCurrency,
}: FigureInputProps) => (
  <label className="flex justify-between space-x-2 items-baseline">
    {displayName}
    <NumericFormat
      className="ml-4 border rounded-md border-slate-300 p-1"
      value={value}
      onValueChange={(v) => setValue(v.floatValue || 0)}
      prefix={isCurrency ? "£" : undefined}
      decimalScale={2}
      thousandSeparator=","
    />
  </label>
);
