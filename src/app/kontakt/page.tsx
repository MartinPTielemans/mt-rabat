"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Tilbage til forsiden
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Kontakt Marcel Tielemans</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Send os en besked</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Navn
                    </label>
                    <Input id="name" placeholder="Dit fulde navn" />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="din@email.dk" />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="subject"
                  >
                    Emne
                  </label>
                  <Input
                    id="subject"
                    placeholder="Hvad handler din henvendelse om?"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Besked
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Skriv din besked her..."
                    rows={6}
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                  Send besked
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Kontaktoplysninger</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-600">+45 73 22 50 50</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@marcel-tielemans.dk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      Søndergård Alle 4<br />
                      6500 Vojens
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Åbningstider</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Mandag - Torsdag</span>
                  <span>8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fredag</span>
                  <span>8:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lørdag - Søndag</span>
                  <span>Lukket</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Om os</h3>
              <p className="text-gray-400">
                Marcel Tielemans er en professionel leverandør af
                infrastrukturløsninger med fokus på bæredygtighed og høj
                kvalitet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kompetencer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Vejservice</li>
                <li>Traditionelle anlægsopgaver</li>
                <li>Store infrastrukturopgaver</li>
                <li>Asfalt</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Telefon: +45 73 22 50 50</li>
                <li>Email: info@marcel-tielemans.dk</li>
                <li>Adresse: Søndergård Alle 4, 6500 Vojens</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privatlivspolitik</li>
                <li>Cookiepolitik</li>
                <li>Årsrapporter</li>
                <li>Job og karriere</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Marcel Tielemans {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
