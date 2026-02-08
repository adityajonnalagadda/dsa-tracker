import { useState } from "react";
import API from "../api";

function EditProblem({ problem, refresh, close }) {
  const [form, setForm] = useState(problem);

  const save = async () => {
    await API.put(`/problems/${problem._id}`, form);
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold mb-3">Edit Problem</h2>

        <input className="border p-2 w-full mb-2"
          value={form.title}
          onChange={e => setForm({...form, title: e.target.value})} />

        <input className="border p-2 w-full mb-2"
          value={form.topic}
          onChange={e => setForm({...form, topic: e.target.value})} />

        <input className="border p-2 w-full mb-2"
          value={form.difficulty}
          onChange={e => setForm({...form, difficulty: e.target.value})} />

        <input className="border p-2 w-full mb-2"
          value={form.status}
          onChange={e => setForm({...form, status: e.target.value})} />

        <div className="flex justify-end space-x-2 mt-3">
          <button
            onClick={close}
            className="bg-gray-400 text-white px-3 py-1 rounded">
            Cancel
          </button>
          <button
            onClick={save}
            className="bg-green-600 text-white px-3 py-1 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProblem;
