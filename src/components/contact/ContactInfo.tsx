import { Phone, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ContactInfo() {
  return (
    <SlideIn direction="right" delay={0.2}>
      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Kontaktoplysninger</h2>
        <StaggerContainer className="space-y-4">
          <StaggerItem>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <p className="font-medium">Telefon</p>
                <p className="text-gray-600">+45 40 48 64 80</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">m.t@live.dk</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-gray-600">
                  Kollund Byvej 45
                  <br />
                  7400 Herning
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Card>
    </SlideIn>
  );
}
