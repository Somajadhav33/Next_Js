
export default async function Home() {
  const res = await fetch("https://api.github.com/users/Somajadhav33")
  const data = await res.json()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p className="max-w-4xl">
        {JSON.stringify(data)}
      </p>
      {/* <button onClick={(() => alert("Button Clicked"))}>
       Click Me 
      </button> */}
    </div>
  );
}
