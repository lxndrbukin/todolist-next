import TasksList from '@/components/tasks-list';
import { db } from '@/db';

export default async function Home() {
  const tasks = await db.newTask.findMany();

  console.log(tasks);

  return (
    <main>
      <TasksList />
    </main>
  );
}
