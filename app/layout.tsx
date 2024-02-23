import Header from "@/components/Header";
import type { Metadata } from "next";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cozy®",
  description: "Meryl Lounge Chair - Cozy®",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
