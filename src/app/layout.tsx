import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Job client",
  description: "get job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className="bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
