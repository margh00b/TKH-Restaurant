import { Suspense } from "react";

export default function CustSideLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </div>
    );
  }