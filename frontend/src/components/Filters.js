function Filters({ setTopic, setDifficulty, setCompletion }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        placeholder="Filter by topic"
        className="border p-2"
        onChange={e => setTopic(e.target.value)}
      />
      <input
        placeholder="Filter by difficulty"
        className="border p-2"
        onChange={e => setDifficulty(e.target.value)}
      />
      <input
        placeholder="Filter by Completion"
        className="border p-2"
        onChange={e => setCompletion(e.target.value)}
      />
    </div>
  );
}

export default Filters;
