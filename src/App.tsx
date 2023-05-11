import { CurrencyDisplay } from "./CurrencyDisplay";
import { FigureInput } from "./FigureInput";
import { getMonthlyEvCost, getMonthlyIceCost, useFigures } from "./figures";

const App = () => {
  const figures = useFigures();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-3xl">Lease or no lease</h1>
      <h2 className="text-xl">Results</h2>
      <p>
        The EV monthly cost is{" "}
        <CurrencyDisplay value={getMonthlyEvCost(figures)} />
      </p>
      <p>
        The ICE monthly cost is{" "}
        <CurrencyDisplay value={getMonthlyIceCost(figures)} />
      </p>
      <h2 className="text-xl">Enter figures</h2>
      <div className="flex flex-col items-stretch space-y-2">
        <h3 className="font-semibold">General</h3>
        <FigureInput
          displayName="Annual mileage"
          value={figures.annualMileage}
          setValue={figures.setAnnualMileage}
        />
        <h3 className="font-semibold">EV lease car</h3>
        <FigureInput
          displayName="Monthly lease cost"
          value={figures.leaseMonthlyCost}
          setValue={figures.setLeaseMonthlyCost}
          isCurrency
        />
        <FigureInput
          displayName="Miles per kWh"
          value={figures.evMilesPerKwh}
          setValue={figures.setEvMilesPerKwh}
        />

        <FigureInput
          displayName="Cost per kWh"
          value={figures.kwhCost}
          setValue={figures.setKwhCost}
          isCurrency
        />
        <h3 className="font-semibold">ICE car</h3>
        <FigureInput
          displayName="Car purchase price"
          value={figures.carPurchaseCost}
          setValue={figures.setCarPurchaseCost}
          isCurrency
        />
        <FigureInput
          displayName="Car ownership length (years)"
          value={figures.expectedOwnershipLength}
          setValue={figures.setExpectedOwnershipLength}
        />
        <FigureInput
          displayName="Expected car resale value"
          value={figures.expectedCarResaleValue}
          setValue={figures.setExpectedCarResaleValue}
          isCurrency
        />
        <FigureInput
          displayName="Annual insurance cost"
          value={figures.insurance}
          setValue={figures.setInsurance}
          isCurrency
        />
        <FigureInput
          displayName="Miles per gallon"
          value={figures.fuelMpg}
          setValue={figures.setfuelMpg}
        />
        <FigureInput
          displayName="Fuel cost per litre"
          value={figures.fuelCostLitre}
          setValue={figures.setFuelCostLitre}
          isCurrency
        />
        <FigureInput
          displayName="Annual maintenance cost"
          value={figures.annualMaintenance}
          setValue={figures.setAnnualMaintenance}
          isCurrency
        />
        <FigureInput
          displayName="MOT and service cost"
          value={figures.mot}
          setValue={figures.setMot}
          isCurrency
        />
      </div>
    </div>
  );
};

export default App;
