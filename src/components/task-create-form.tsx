import * as actions from '@/actions';

export function TaskCreateForm() {
  return (
    <form action={actions.createNewTask}>
      <input type='text' className='border rounded' name='content' />
      <button className='px-6 py-2 border rounded-xl'>Add Task</button>
    </form>
  );
}
