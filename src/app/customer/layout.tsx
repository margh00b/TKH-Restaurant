import Navbar from "@/components/Navbar/navbar";
import { Suspense } from "react";
import { navbarLinks } from "@/components/Navbar/navbarLinks";

export default function CustSideLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <Navbar links={navbarLinks} />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </div>
    );
  }