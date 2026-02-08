function ProblemList({ problems, onEdit, onDelete }) {
  return (
    <div className="mt-6">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Title</th>
            <th className="border p-2">Topic</th>
            <th className="border p-2">Difficulty</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(p => (
            <tr key={p._id} className="text-center">
              <td className="border p-2">{p.title}</td>
              <td className="border p-2">{p.topic}</td>
              <td className="border p-2">{p.difficulty}</td>
              <td className="border p-2">{p.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => onEdit(p)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button
                  onClick={() => onDelete(p._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemList;
