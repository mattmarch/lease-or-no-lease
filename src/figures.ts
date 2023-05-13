import { useState } from "react";

const defaultInsurance = 300;
const defaultMot = 50;
const defaultAnnualMileage = 5000;
const defaultFuelCostLitre = 1.5;
const defaultFuelMpg = 40;
const defaultEvMilesPerKwh = 3;
const defaultKwhCost = 0.3;
const defaultAnnualMaintenance = 200;
const defaultCarPurchaseCost = 8000;
const defaultExpectedOwnershipLength = 5;
const defaultExpectedCarResaleValue = 1000;
const defaultLeaseMonthlyCost = 500;

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

export const useFigures = () => {
  const [insurance, setInsurance] = useState(defaultInsurance);
  const [mot, setMot] = useState(defaultMot);
  const [annualMileage, setAnnualMileage] = useState(defaultAnnualMileage);
  const [fuelCostLitre, setFuelCostLitre] = useState(defaultFuelCostLitre);
  const [fuelMpg, setfuelMpg] = useState(defaultFuelMpg);
  const [evMilesPerKwh, setEvMilesPerKwh] = useState(defaultEvMilesPerKwh);
  const [kwhCost, setKwhCost] = useState(defaultKwhCost);
  const [annualMaintenance, setAnnualMaintenance] = useState(
    defaultAnnualMaintenance
  );
  const [carPurchaseCost, setCarPurchaseCost] = useState(
    defaultCarPurchaseCost
  );
  const [expectedOwnershipLength, setExpectedOwnershipLength] = useState(
    defaultExpectedOwnershipLength
  );
  const [expectedCarResaleValue, setExpectedCarResaleValue] = useState(
    defaultExpectedCarResaleValue
  );
  const [leaseMonthlyCost, setLeaseMonthlyCost] = useState(
    defaultLeaseMonthlyCost
  );

  return {
    insurance,
    setInsurance,
    mot,
    setMot,
    annualMileage,
    setAnnualMileage,
    fuelCostLitre,
    setFuelCostLitre,
    fuelMpg,
    setfuelMpg,
    evMilesPerKwh,
    setEvMilesPerKwh,
    kwhCost,
    setKwhCost,
    annualMaintenance,
    setAnnualMaintenance,
    carPurchaseCost,
    setCarPurchaseCost,
    expectedOwnershipLength,
    setExpectedOwnershipLength,
    expectedCarResaleValue,
    setExpectedCarResaleValue,
    leaseMonthlyCost,
    setLeaseMonthlyCost,
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
