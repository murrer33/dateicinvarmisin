'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LocationType } from "@/types";

interface Step5LocationProps {
  onSelect: (location: LocationType) => void;
}

const locationOptions: LocationType[] = [
  "Senin favori mekanın",
  "Benim favori mekanım",
  "Bana sürpriz yap!",
  "Beraber karar verelim",
];

export default function Step5Location({ onSelect }: Step5LocationProps) {
  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Nereye gidelim?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-3">
        {locationOptions.map((label) => (
          <Button
            key={label}
            variant="secondary"
            className="h-12 text-md font-semibold"
            onClick={() => onSelect(label)}
          >
            {label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
