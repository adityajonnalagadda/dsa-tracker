import { useEffect, useState } from "react";
import API from "./api";
import AddProblem from "./components/AddProblem";
import ProblemList from "./components/ProblemList";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import EditProblem from "./components/EditProblem";


function App() {
  const [problems, setProblems] = useState([]);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  //const [completion, setCompletion] = useState("");
  const [editing, setEditing] = useState(null);
  
  const deleteProblem = async (id) => {
    await API.delete(`/problems/${id}`);
    load();
  };

  

  const load = async () => {
    const res = await API.get("/problems");
    setProblems(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = problems.filter(p =>
    p.topic.toLowerCase().includes(topic.toLowerCase()) &&
    p.difficulty.toLowerCase().includes(difficulty.toLowerCase()) 
    //p.completion.toLowerCase().includes(completion.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">DSA Tracker</h1>

      <AddProblem refresh={load} />
      <Filters setTopic={setTopic} setDifficulty={setDifficulty} />
      <div className="grid grid-cols-1 gap-6">
        <Dashboard problems={problems} />
      </div>


      <ProblemList
        problems={filtered}
        onEdit={setEditing}
        onDelete={deleteProblem}
      />

      {editing && (
        <EditProblem
          problem={editing}
          refresh={load}
          close={() => setEditing(null)}
        />
      )}


    </div>
  );
}

export default App;
