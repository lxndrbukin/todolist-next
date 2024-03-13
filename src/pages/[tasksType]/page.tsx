import { usePathname } from 'next/navigation';
import { TaskCreateForm } from '@/components/task-create-form';
import { TasksType, getTasks } from '@/actions';
import Task from '@/components/task';

export default async function TasksListPage() {
  const pathname = usePathname();

  const tasks = await getTasks(pathname);

  const renderedTasks = tasks!.map((task) => {
    return <Task {...task} />;
  });

  const headerTasksType = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <div className="bg-neutral-900 p-3">
      <span className="text-2xl">{headerTasksType} Tasks</span>
      <ul className="grid gap-1">{renderedTasks}</ul>
      <div>
        <TaskCreateForm />
      </div>
    </div>
  );
}
