import { PropsWithChildren } from "react";
import { FigureInput } from "./FigureInput";
import { MileageGraph } from "./MileageGraph";
import {
  Figures,
  SetFigure,
  getMonthlyEvCost,
  getMonthlyIceCost,
  useFigures,
} from "./figures";
import { formatAsGbp } from "./utils";

const App = () => {
  const { figures, setFigure, resetFigures } = useFigures();

  return (
    <div className="flex flex-col justify-around h-full space-y-4 p-8 bg-gradient-to-br from-indigo-900 to-sky-400">
      <h1 className="text-7xl font-bold text-slate-50">Lease or no lease?</h1>
      <p className="text-xl text-slate-200">
        How does the cost of EV leasing fare against purchasing a second hand
        internal combustion engine (ICE) car...
      </p>
      <FullWidthCard>
        <h2 className="text-xl">
          With your current figures at {figures.annualMileage.toLocaleString()}{" "}
          miles per year...
        </h2>
        <p>
          ⚡ The EV monthly cost is {formatAsGbp(getMonthlyEvCost(figures))}
        </p>
        <p>
          ⛽ The ICE monthly cost is {formatAsGbp(getMonthlyIceCost(figures))}
        </p>
      </FullWidthCard>
      <div className="flex items-baseline my-4">
        <h2 className="text-3xl text-slate-200 font-semibold pr-4">
          Enter your figures
        </h2>
        <button
          className="bg-slate-100 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-1 px-2 border border-slate-500 hover:border-transparent rounded-lg self-center"
          onClick={resetFigures}
        >
          Reset all
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        <GeneralFigures figures={figures} setFigure={setFigure} />
        <EvFigures figures={figures} setFigure={setFigure} />
        <IceFigures figures={figures} setFigure={setFigure} />
      </div>
      <h2 className="text-3xl text-slate-200 font-semibold m-y-4">
        How does that change with mileage?
      </h2>
      <FullWidthCard>
        <MileageGraph figures={figures} />
      </FullWidthCard>
    </div>
  );
};

const SmallCard = ({ children }: PropsWithChildren) => (
  <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg space-y-3">
    {children}
  </div>
);

const FullWidthCard = ({ children }: PropsWithChildren) => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg space-y-3">
    {children}
  </div>
);

type FiguresSectionProps = { figures: Figures; setFigure: SetFigure };

const GeneralFigures = ({ figures, setFigure }: FiguresSectionProps) => (
  <SmallCard>
    <h3 className="font-semibold">🚗 General</h3>
    <FigureInput
      displayName="Annual mileage"
      value={figures.annualMileage}
      setValue={setFigure("annualMileage")}
    />
  </SmallCard>
);

const EvFigures = ({ figures, setFigure }: FiguresSectionProps) => (
  <SmallCard>
    <h3 className="font-semibold">⚡ EV lease details</h3>
    <FigureInput
      displayName="Monthly lease cost"
      value={figures.leaseMonthlyCost}
      setValue={setFigure("leaseMonthlyCost")}
      isCurrency
    />
    <FigureInput
      displayName="Miles per kWh"
      value={figures.evMilesPerKwh}
      setValue={setFigure("evMilesPerKwh")}
      decimalPlaces={1}
    />

    <FigureInput
      displayName="Cost per kWh"
      value={figures.kwhCost}
      setValue={setFigure("kwhCost")}
      isCurrency
    />
  </SmallCard>
);
const IceFigures = ({ figures, setFigure }: FiguresSectionProps) => (
  <SmallCard>
    <h3 className="font-semibold">⛽ ICE car details</h3>
    <FigureInput
      displayName="Car purchase price"
      value={figures.carPurchaseCost}
      setValue={setFigure("carPurchaseCost")}
      isCurrency
    />
    <FigureInput
      displayName="Car ownership length (years)"
      value={figures.expectedOwnershipLength}
      setValue={setFigure("expectedOwnershipLength")}
    />
    <FigureInput
      displayName="Expected car resale value"
      value={figures.expectedCarResaleValue}
      setValue={setFigure("expectedCarResaleValue")}
      isCurrency
    />
    <FigureInput
      displayName="Annual insurance cost"
      value={figures.insurance}
      setValue={setFigure("insurance")}
      isCurrency
    />
    <FigureInput
      displayName="Miles per gallon"
      value={figures.fuelMpg}
      setValue={setFigure("fuelMpg")}
      decimalPlaces={1}
    />
    <FigureInput
      displayName="Fuel cost per litre"
      value={figures.fuelCostLitre}
      setValue={setFigure("fuelCostLitre")}
      isCurrency
    />
    <FigureInput
      displayName="Annual maintenance cost"
      value={figures.annualMaintenance}
      setValue={setFigure("annualMaintenance")}
      isCurrency
    />
    <FigureInput
      displayName="MOT and service cost"
      value={figures.mot}
      setValue={setFigure("mot")}
      isCurrency
    />
  </SmallCard>
);

export default App;
