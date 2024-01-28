import Link from "next/link";

export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/">HomePage</Link>
          </li>
          <li>
            <Link href="/Auguri">Auguri</Link>
          </li>
          <li>
            <Link href="/React-Icons">React Icons</Link>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
}
