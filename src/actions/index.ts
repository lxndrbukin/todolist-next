'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function getTasks() {
  const tasks = await db.newTask.findMany();
  console.log(tasks);
}

export async function createNewTask(formData: FormData) {
  const content = formData.get('content');

  if (content && typeof content === 'string') {
    await db.newTask.create({
      data: {
        content
      }
    });
  }

  redirect('/');
}