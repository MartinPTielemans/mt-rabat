import { Card } from "@/components/ui/card";
import { ScaleIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function OpeningHours() {
  return (
    <ScaleIn delay={0.4}>
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Åbningstider</h2>
        <StaggerContainer className="space-y-2">
          <StaggerItem>
            <div className="flex justify-between">
              <span>Mandag - Torsdag</span>
              <span>8:00 - 16:00</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex justify-between">
              <span>Fredag</span>
              <span>8:00 - 15:00</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex justify-between">
              <span>Lørdag - Søndag</span>
              <span>Lukket</span>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Card>
    </ScaleIn>
  );
}
