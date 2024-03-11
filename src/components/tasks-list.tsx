import { TaskCreateForm } from './task-create-form';
import { db } from '@/db';
import { TasksType, getTasks } from '@/actions';
import Task from './task';

export default async function TasksList() {
  const tasks = await getTasks(TasksType.New);

  const renderedTasks = tasks.map((task) => {
    return <Task {...task} />;
  });

  return (
    <div className="bg-neutral-900 p-3">
      <span className="text-2xl">Tasks</span>
      <ul className="grid gap-1">{renderedTasks}</ul>
      <div>
        <TaskCreateForm />
      </div>
    </div>
  );
}
