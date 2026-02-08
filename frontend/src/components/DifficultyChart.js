import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const DifficultyChart = ({ problems }) => {
  let easy = 0,
    medium = 0,
    hard = 0;

  problems.forEach((p) => {
    if (p.difficulty === "Easy") easy++;
    else if (p.difficulty === "Medium") medium++;
    else if (p.difficulty === "Hard") hard++;
  });

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems by Difficulty",
        data: [easy, medium, hard],
        backgroundColor: ["#22c55e", "#facc15", "#ef4444"],
        borderRadius: 6,
      },
    ],
  };

  return <Bar data={data} />;
};

export default DifficultyChart;
