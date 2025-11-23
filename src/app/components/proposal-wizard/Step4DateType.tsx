'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Film, Landmark, MountainSnow, Gamepad2, type LucideIcon } from "lucide-react";
import type { DateType } from "@/types";

interface Step4DateTypeProps {
  onSelect: (dateType: DateType) => void;
}

const dateOptions: { label: DateType; icon: LucideIcon }[] = [
  { label: "Kahve", icon: Coffee },
  { label: "Akşam Yemeği", icon: Utensils },
  { label: "Sinema", icon: Film },
  { label: "Müze/Sergi", icon: Landmark },
  { label: "Doğa Yürüyüşü", icon: MountainSnow },
  { label: "Oyun Gecesi", icon: Gamepad2 },
];

export default function Step4DateType({ onSelect }: Step4DateTypeProps) {
  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Nasıl bir randevu olsun istersin?</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {dateOptions.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            className="flex flex-col h-24 gap-2 text-md font-semibold border-2 hover:border-primary hover:bg-accent"
            onClick={() => onSelect(label)}
          >
            <Icon className="w-8 h-8 text-primary" />
            <span>{label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
