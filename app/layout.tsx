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
            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
              <Link href="/" style={{marginRight: '20px'}}>ABOUT</Link>
              <Link href="/bio" style={{marginRight: '20px'}}>CV</Link>
              <Link href="/users" style={{marginRight: '20px'}}>USERS</Link>
              <Link href="/portfolio" style={{marginRight: '20px'}}>PORTFOLIO</Link>
            </div>
          </h2>
        </nav>
        {children}
      </body>
    </html>
  );
}
