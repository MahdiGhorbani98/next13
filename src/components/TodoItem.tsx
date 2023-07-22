"use client";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, compelete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id.toString()}
        defaultChecked={complete}
        className="cursor-pointer peer"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id.toString()}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
