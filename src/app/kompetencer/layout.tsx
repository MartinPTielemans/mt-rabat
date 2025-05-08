"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";

export default function KompetencerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow">{children}</div>
      <Footer />
    </section>
  );
}
