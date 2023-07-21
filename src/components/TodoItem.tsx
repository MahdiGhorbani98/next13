type TodoItemProps = {
  id: number;
  title: string;
  complete: boolean;
};

export default function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id.toString()}
        className="cursor-pointer peer"
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
