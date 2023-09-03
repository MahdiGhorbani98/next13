import './globals.css';
import type { Metadata } from 'next';
import { cuprum } from './fonts';
import { vazir } from './fonts';
import { amiri } from './fonts';

export const metadata: Metadata = {
  title: 'Todo App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cuprum.variable}`}>
      <body className={` bg-slate-800 text-slate-100 container mx-auto p-4`}>
        {children}
        {/* <p>salam</p>
        <div className={`${vazir.className}`}>سلام وزیر</div>
        <p>Hi</p> */}
      </body>
    </html>
  );
}
