import { Line } from "react-chartjs-2";
import {
  Figures,
  getEvBaseMonthlyCost,
  getEvCostPerMile,
  getIceBaseMonthlyCost,
  getIceCostPerMile,
} from "./figures";
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { formatAsGbp, range } from "./utils";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type MileageGraphProps = { figures: Figures };

export const MileageGraph = ({ figures }: MileageGraphProps) => (
  <div className="h-128">
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Monthly cost vs mileage",
          },
          tooltip: {
            callbacks: {
              title: (tooltip) => `${tooltip[0].label} miles`,
              label: (tooltip) =>
                `${tooltip.dataset.label} ${formatAsGbp(
                  tooltip.raw as number
                )}`,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Annual mileage" },
          },
          y: {
            title: {
              display: true,
              text: "Monthly cost",
            },
            beginAtZero: true,
            ticks: {
              callback: formatAsGbp,
            },
          },
        },
      }}
      data={getChartDataFromFigures(figures)}
    />
  </div>
);

const getChartDataFromFigures = (figures: Figures) => {
  const xAxis = range(0, 500, 100);
  const evBaseMonthlyCost = getEvBaseMonthlyCost(figures);
  const evCostPerMile = getEvCostPerMile(figures);
  const iceBaseMonthlyCost = getIceBaseMonthlyCost(figures);
  const iceCostPerMile = getIceCostPerMile(figures);

  return {
    labels: xAxis,
    datasets: [
      {
        label: "EV",
        data: xAxis.map(
          (mileage) => evBaseMonthlyCost + (mileage * evCostPerMile) / 12
        ),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
      {
        label: "ICE",
        data: xAxis.map(
          (mileage) => iceBaseMonthlyCost + (mileage * iceCostPerMile) / 12
        ),
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.5)",
      },
    ],
  };
};
