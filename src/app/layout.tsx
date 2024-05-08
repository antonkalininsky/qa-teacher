import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './styles.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "qa teacher",
  description: "qa teacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div>
          header
        </div>
        <div>
          nav
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
