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
          <h3 className="top-bar">
            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
              <button className="click">
                <Link href="/" style={{marginRight: '20px'}}>ABOUT</Link>
              </button>
              <button className="click">
                <Link href="/bio" style={{marginRight: '20px'}}>CV</Link>
              </button>
              <button className="click">
                <Link href="/users" style={{marginRight: '20px'}}>USERS</Link>
              </button>
              <button className="click">
                <Link href="/portfolio" style={{marginRight: '20px'}}>PORTFOLIO</Link>
              </button>
            </div>
          </h3>
        </nav>
        {children}
      </body>
    </html>
  );
}
