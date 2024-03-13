'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export enum TasksType {
  New = '',
  Deleted = 'deleted',
  Completed = 'completed',
}

export async function getTasks(tasksType: string) {
  let tasks;
  switch (tasksType) {
    case TasksType.New:
      tasks = await db.newTask.findMany();
      break;
    case TasksType.Completed:
      tasks = await db.completedTask.findMany();
      break;
    case TasksType.Deleted:
      tasks = await db.deletedTask.findMany();
      break;
  }
  return tasks;
}

export async function createNewTask(formData: FormData) {
  const content = formData.get('content');

  if (content && typeof content === 'string') {
    await db.newTask.create({
      data: {
        content,
      },
    });
  }

  redirect('/');
}

export async function deleteTask(tasksType: string, id: number) {
  switch (tasksType) {
    case TasksType.New:
      await db.newTask.delete({ where: { id } });
    case TasksType.Completed:
      await db.completedTask.delete({ where: { id } });
    case TasksType.Deleted:
      await db.deletedTask.delete({ where: { id } });
  }
  redirect(`/${tasksType}`);
}
