import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/navbar";
import { navbarLinks } from "@/app/components/Navbar/navbarLinks";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tandoori Kabab Hut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar links={navbarLinks} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
