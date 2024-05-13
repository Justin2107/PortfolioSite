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
              <Link href="/" key="about">--ABOUT-</Link>
              <Link href="/bio" key="cv">-CV-</Link>
              <Link href="/users" key="users">-USERS-</Link>
              <Link href="/portfolio" key="portfolio">-PORTFOLIO--</Link>
            </div>
          </h2>
        </nav>
        {children}
      </body>
    </html>
  );
}
