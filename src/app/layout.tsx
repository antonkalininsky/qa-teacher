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
        <div className={styles.main}>
          <div className={styles.header}>
            QA teacher
          </div>
          <div className={styles.navigation}>
            <div>nav item 1</div>
            <div>nav item 1</div>
            <div>nav item 1</div>
            <div>nav item 1</div>
            <div>nav item 1</div>
            <div>nav item 1</div>
            <div>nav item 1</div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
