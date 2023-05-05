import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/navigation/navigation";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body className={styles.body}>
        <Navigation />
        <section className={styles.layout_main}>{children}</section>
      </body>
    </html>
  );
}
