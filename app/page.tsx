import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Home Page</h1>
      <Link href="/bio">Link to bio</Link>
      <Link href="/users">Link to users</Link>
    </main>
  );
}
