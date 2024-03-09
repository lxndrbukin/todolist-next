import { TaskCreateForm } from './task-create-form';
import { db } from '@/db';

export default async function TasksList() {
  const tasks = await db.newTask.findMany();

  const renderedTasks = tasks.map((task) => {
    return (
      <li className='bg-neutral-800 rounded-lg px-2 py-2.5'>{task.content}</li>
    );
  });

  return (
    <div className='bg-neutral-900 p-3'>
      <span className='text-2xl'>Tasks</span>
      <ul className='grid gap-1'>{renderedTasks}</ul>
      <div>
        <TaskCreateForm />
      </div>
    </div>
  );
}
