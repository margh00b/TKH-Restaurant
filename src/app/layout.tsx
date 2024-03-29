import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/navbar";
import { navbarLinks } from "@/app/components/Navbar/navbarLinks";
import { ReduxProvider } from "@/redux/provider";
import { DM_Serif_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dmSerifDisplay",
  preload: false,
  weight: "400",
});
export const metadata: Metadata = {
  title: "Tandoori Kabab Hut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={dmSerifDisplay.className}
      style={dmSerifDisplay.style}
    >
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar links={navbarLinks} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
