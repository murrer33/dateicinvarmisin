'use client';

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Step3CelebrationProps {
  onNext: () => void;
}

export default function Step3Celebration({ onNext }: Step3CelebrationProps) {
  const celebrationImage = PlaceHolderImages.find(img => img.id === 'celebration-gif');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-5xl font-bold text-primary font-headline animate-pulse">YAAAAY!!</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {celebrationImage && (
            <Image
                src={celebrationImage.imageUrl}
                alt={celebrationImage.description}
                width={300}
                height={200}
                data-ai-hint={celebrationImage.imageHint}
                className="rounded-lg"
            />
        )}
        <p className="text-lg text-muted-foreground">
          Beni dünyanın en mutlu insanı yaptın! Bu bir randevu!
        </p>
      </CardContent>
    </Card>
  );
}
