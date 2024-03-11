interface TaskProps {
  id: number;
  content: string;
}

export default function Task({ id, content }: TaskProps) {
  return (
    <li className="bg-neutral-800 rounded-lg px-2 py-2.5">
      <div>{content}</div>
      <div>
        <button>EDIT</button>
        <button>DEL</button>
      </div>
    </li>
  );
}
