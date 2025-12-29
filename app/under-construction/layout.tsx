"use client";

import { useEffect } from "react";

export default function UnderConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("under-construction");
    return () => {
      document.body.classList.remove("under-construction");
    };
  }, []);

  return <>{children}</>;
}