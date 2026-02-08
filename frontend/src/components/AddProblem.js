import { useState } from "react";
import API from "../api";

function AddProblem({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    topic: "",
    difficulty: "",
    status: ""
  });

  const submit = async () => {
    await API.post("/problems", form);
    refresh();
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="font-bold mb-2">Add Problem</h2>
      <div className="grid grid-cols-4 gap-2">
        <input className="border p-2" placeholder="Title"
          onChange={e => setForm({...form, title: e.target.value})} />
        <input className="border p-2" placeholder="Topic"
          onChange={e => setForm({...form, topic: e.target.value})} />
        <input className="border p-2" placeholder="Difficulty"
          onChange={e => setForm({...form, difficulty: e.target.value})} />
        <input className="border p-2" placeholder="Status"
          onChange={e => setForm({...form, status: e.target.value})} />
      </div>
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
        Add
      </button>
    </div>
  );
}

export default AddProblem;
