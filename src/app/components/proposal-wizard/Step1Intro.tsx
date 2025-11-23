'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Step1IntroProps {
  onNext: () => void;
}

export default function Step1Intro({ onNext }: Step1IntroProps) {
  const introImage = PlaceHolderImages.find(img => img.id === 'intro-gif');

  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Selam!</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {introImage && (
            <Image
              src={introImage.imageUrl}
              alt={introImage.description}
              width={300}
              height={200}
              data-ai-hint={introImage.imageHint}
              className="rounded-lg"
            />
        )}
        <p className="text-lg text-muted-foreground">
          Küçük bir sırrım var... ve seninle paylaşmak istiyorum.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onNext} size="lg" variant="secondary" className="font-bold">Nedir?</Button>
      </CardFooter>
    </Card>
  );
}
