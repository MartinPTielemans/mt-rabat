"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { OpeningHours } from "@/components/contact/OpeningHours";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, SlideIn } from "@/components/ui/motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SlideIn direction="left">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Tilbage til forsiden
            </Link>
          </Button>
        </SlideIn>

        <FadeIn className="mb-8">
          <h1 className="text-4xl font-bold">Kontakt Marcel Tielemans</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div>
            <ContactInfo />
            <OpeningHours />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
