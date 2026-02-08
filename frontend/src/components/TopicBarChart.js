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

const TopicBarChart = ({ problems }) => {
  const topicCountMap = {};

  problems.forEach((p) => {
    topicCountMap[p.topic] = (topicCountMap[p.topic] || 0) + 1;
  });

  const labels = Object.keys(topicCountMap);
  const dataValues = Object.values(topicCountMap);

  const data = {
    labels,
    datasets: [
      {
        label: "Problems by Topic",
        data: dataValues,
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
          "#06b6d4",
          "#ec4899",
          "#22c55e",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#374151" },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TopicBarChart;
