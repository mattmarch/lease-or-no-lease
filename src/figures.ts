import { useState } from "react";

export type Figures = {
  insurance: number;
  mot: number;
  annualMileage: number;
  fuelCostLitre: number;
  fuelMpg: number;
  evMilesPerKwh: number;
  kwhCost: number;
  annualMaintenance: number;
  carPurchaseCost: number;
  expectedOwnershipLength: number;
  expectedCarResaleValue: number;
  leaseMonthlyCost: number;
};

const defaultFigures: Figures = {
  insurance: 300,
  mot: 50,
  annualMileage: 10000,
  fuelCostLitre: 1.5,
  fuelMpg: 35,
  evMilesPerKwh: 3,
  kwhCost: 0.3,
  annualMaintenance: 200,
  carPurchaseCost: 12000,
  expectedOwnershipLength: 5,
  expectedCarResaleValue: 3000,
  leaseMonthlyCost: 400,
};

const localStorageKey = "lease-figures";

export const useFigures = () => {
  const previousFigures = localStorage.getItem(localStorageKey);
  const startingFigures = previousFigures
    ? { ...defaultFigures, ...JSON.parse(previousFigures) }
    : defaultFigures;

  const [figures, setFigures] = useState<Figures>(startingFigures);

  const setAndSaveFigures = (newFigures: Figures) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newFigures));
    setFigures(newFigures);
  };

  const setFigure = (figureName: keyof Figures) => (value: number) =>
    setAndSaveFigures({ ...figures, [figureName]: value });

  const resetFigures = () => setAndSaveFigures(defaultFigures);

  return {
    figures,
    setFigure,
    resetFigures,
  };
};

export const getMonthlyEvCost = (figures: Figures) => {
  return (
    getEvBaseMonthlyCost(figures) +
    (getEvCostPerMile(figures) * figures.annualMileage) / 12
  );
};

export const getMonthlyIceCost = (figures: Figures) => {
  return (
    getIceBaseMonthlyCost(figures) +
    (getIceCostPerMile(figures) * figures.annualMileage) / 12
  );
};

export const getEvCostPerMile = ({ evMilesPerKwh, kwhCost }: Figures) =>
  kwhCost / evMilesPerKwh;
export const getEvBaseMonthlyCost = ({ leaseMonthlyCost }: Figures) =>
  leaseMonthlyCost;

const litresPerGallon = 4.546;
export const getIceCostPerMile = ({ fuelCostLitre, fuelMpg }: Figures) =>
  (fuelCostLitre * litresPerGallon) / fuelMpg;
export const getIceBaseMonthlyCost = ({
  insurance,
  mot,
  annualMaintenance,
  carPurchaseCost,
  expectedOwnershipLength,
  expectedCarResaleValue,
}: Figures) => {
  const annualDepreciationCost =
    (carPurchaseCost - expectedCarResaleValue) / expectedOwnershipLength;
  const totalAnnualCost =
    annualDepreciationCost + annualMaintenance + mot + insurance;
  return totalAnnualCost / 12;
};
