import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
    <>
        <main className='content'>
            {children}
        </main>
    </>
  )
}
