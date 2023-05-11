import { FigureInput } from "./FigureInput";
import { useFigures } from "./figures";

const App = () => {
  const figures = useFigures();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-3xl">Lease or no lease</h1>
      <h2 className="text-xl">Enter figures</h2>
      <div className="flex flex-col items-stretch space-y-2">
        <h3 className="font-semibold">General</h3>
        <FigureInput
          displayName="Annual mileage"
          value={figures.annualMileage}
          setValue={figures.setAnnualMileage}
        />
        <h3 className="font-semibold">EV Lease</h3>
        <FigureInput
          displayName="Monthly lease cost"
          value={figures.leaseMonthlyCost}
          setValue={figures.setLeaseMonthlyCost}
        />
        <FigureInput
          displayName="Miles per kWh"
          value={figures.evMilesPerKwh}
          setValue={figures.setEvMilesPerKwh}
        />
        <h3 className="font-semibold">ICE car</h3>
        <FigureInput
          displayName="Annual insurance cost"
          value={figures.insurance}
          setValue={figures.setInsurance}
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
        />
      </div>
    </div>
  );
};

export default App;
