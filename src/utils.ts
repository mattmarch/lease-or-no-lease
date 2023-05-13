export const range = (start: number, stepSize: number, steps: number) =>
  [...Array(steps + 1)].map((_, i) => start + i * stepSize);

export const formatAsGbp = (value: number | string) =>
  value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
