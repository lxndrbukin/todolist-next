import Link from 'next/link';

export default function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/new">New Tasks</Link>
        </li>
        <li>
          <Link href="/completed">Completed Tasks</Link>
        </li>
        <li>
          <Link href="/deleted">Deleted Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}
