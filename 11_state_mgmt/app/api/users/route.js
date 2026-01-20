let users = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "John Smith", email: "john@gmail.com" },
  { id: 3, name: "Bob Johnson", email: "john@gmail.com" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  users.push(newUser);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json(newUser);
}
