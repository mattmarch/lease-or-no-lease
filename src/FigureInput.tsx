import { NumericFormat } from "react-number-format";

type FigureInputProps = {
  displayName: string;
  value: number;
  setValue: (v: number) => void;
};

export const FigureInput = ({
  value,
  setValue,
  displayName,
}: FigureInputProps) => (
  <label className="flex justify-between space-x-2">
    {displayName}
    <NumericFormat
      className="ml-4 border rounded-md border-slate-300 p-1"
      value={value}
      onValueChange={(v) => setValue(v.floatValue || 0)}
      prefix="£"
      decimalScale={2}
    />
  </label>
);
