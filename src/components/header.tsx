import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header>
      <Link href="/">
        <span>todo</span>
      </Link>
    </header>
  );
}
