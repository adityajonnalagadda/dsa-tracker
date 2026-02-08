import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CompletionPieChart = ({ problems }) => {
  const completed = problems.filter((p) => p.completed).length;
  const pending = problems.length - completed;
  
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#22c55e", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  return <Pie data={data} />;
};

export default CompletionPieChart;
