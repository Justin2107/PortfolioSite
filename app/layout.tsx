import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Brown | About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h2 className="top-bar">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              My Navbar
              <Link href="/bio">Link to bio</Link>
              <Link href="/users">Link to users</Link>
            </div>
          </h2>
        </nav>
        {children}
      </body>
    </html>
  );
}
