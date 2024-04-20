import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Header from "@/app/components/lyaoutComponents/Header/Header";
import Footer from "@/app/components/lyaoutComponents/Footer/Footer";
import Navigation from "@/app/components/lyaoutComponents/Navigation/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tvoe",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
      <Navigation/>
      </body>
    </html>
  );
}
