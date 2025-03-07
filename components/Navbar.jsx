import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">NontonX</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:text-accent">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/videos">
              <a className="hover:text-accent">Videos</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-accent">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
