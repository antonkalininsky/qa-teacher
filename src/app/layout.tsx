import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css";
import Link from "@mui/material/Link";
import tasksList from "@/tasks/tasks";

const inter = Inter({ subsets: ["latin"] });

const navigation = tasksList.map((item) => (
  <Link href={`/${item.id}`} key={item.id}>
    {item.title}
  </Link>
));

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
        {/* <div className={styles.main}>
          <div className={styles.header}>
            QA teacher
          </div>
          <div className={styles.navigation}>
            {navigation}
          </div> */}
        <div className={styles.content}>{children}</div>
        {/* </div> */}
      </body>
    </html>
  );
}
