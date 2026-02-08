import TopicBarChart from "../components/TopicBarChart";
import DifficultyChart from "../components/DifficultyChart";
import CompletionPieChart from "../components/CompletionPieChart";

function Dashboard({ problems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2 text-center">
          Completion Status
        </h2>
        <CompletionPieChart problems={problems} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2 text-center">
          Problems by Topic
        </h2>
        <TopicBarChart problems={problems} />
      </div>

      <div className="bg-white p-4 rounded shadow md:col-span-2">
        <h2 className="font-semibold mb-2 text-center">
          Problems by Difficulty
        </h2>
        <DifficultyChart problems={problems} />
      </div>
    </div>
  );
}

export default Dashboard;
