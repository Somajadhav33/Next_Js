const Notes = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const notes = await res.json();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-xl font-semibold text-gray-800 m-4">
      <h1>Notes</h1>
      <ul className="space-y-4 ">
        {notes.data.map((note) => (
          <li className="border border-gray-300 p-4 rounded-lg" key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
  {new Date(note.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;

