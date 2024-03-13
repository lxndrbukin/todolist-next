import { usePathname } from 'next/navigation';
import { deleteTask } from '@/actions';

interface TaskProps {
  id: number;
  content: string;
}

export default function Task({ id, content }: TaskProps) {
  const pathname = usePathname();

  return (
    <li className="bg-neutral-800 rounded-lg px-2 py-2.5">
      <div>{content}</div>
      <div>
        <form>
          <button>EDIT</button>
        </form>
        <form action={() => deleteTask(pathname, id)}>
          <button>DEL</button>
        </form>
      </div>
    </li>
  );
}
