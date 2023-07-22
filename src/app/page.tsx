// Server Component Data Fetching
import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

// async function getTodosApi() {
//   const response = await fetch("https://api.npoint.io/d10f48c054a181439c5a");
//   if (!response.ok) {
//     throw new Error("failed to fetch");
//   }
//   return response.json();
// }

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos?.map((todo: any) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
