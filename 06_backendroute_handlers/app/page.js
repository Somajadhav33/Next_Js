import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/hello");
  const users = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
       {users.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
