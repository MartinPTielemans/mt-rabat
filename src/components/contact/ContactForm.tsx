import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ContactForm() {
  return (
    <FadeIn>
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Send os en besked</h2>
        <form>
          <StaggerContainer className="space-y-4">
            <StaggerItem>
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
            </StaggerItem>
            <StaggerItem>
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
            </StaggerItem>
            <StaggerItem>
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
            </StaggerItem>
            <StaggerItem>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                Send besked
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </form>
      </Card>
    </FadeIn>
  );
}
