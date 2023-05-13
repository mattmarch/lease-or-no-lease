import { NumericFormat } from "react-number-format";

type CurrencyDisplayProps = { value: number };

export const CurrencyDisplay = ({ value }: CurrencyDisplayProps) => (
  <NumericFormat
    value={value}
    prefix={"£"}
    decimalScale={2}
    fixedDecimalScale={true}
    thousandSeparator=","
    displayType="text"
  />
);
