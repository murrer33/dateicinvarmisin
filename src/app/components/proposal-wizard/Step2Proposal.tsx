'use client';

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import confetti from "canvas-confetti";

interface Step2ProposalProps {
  onYes: () => void;
}

export default function Step2Proposal({ onYes }: Step2ProposalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "50%", left: "60%" });
  const [isFleeing, setIsFleeing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoHover = () => {
    if (!containerRef.current) return;
    setIsFleeing(true);
    const container = containerRef.current;
    const buttonWidth = 80;
    const buttonHeight = 44;
    const newTop = Math.random() * (container.clientHeight - buttonHeight);
    const newLeft = Math.random() * (container.clientWidth - buttonWidth);
    setNoButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
  };
  
  useEffect(() => {
    if (showConfetti) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F4B4C3', '#E57373', '#FFFFFF']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#F4B4C3', '#E57373', '#FFFFFF']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
      
      setTimeout(onYes, 2000);
    }
  }, [showConfetti, onYes]);

  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold font-headline">Benimle çıkar mısın?</CardTitle>
        <CardDescription className="text-md">Sana yemek ısmarlarım söz 🍔</CardDescription>
      </CardHeader>
      <CardContent ref={containerRef} className="relative h-32 flex items-center justify-center">
        <div className="flex gap-4">
            <Button onClick={handleYesClick} size="lg" variant="secondary" className="font-bold z-10">
            Evet
            </Button>
            <Button
                variant="destructive"
                size="lg"
                onMouseEnter={handleNoHover}
                onClick={handleNoHover} // For mobile tap
                className="font-bold transition-all duration-300 ease-in-out"
                style={isFleeing ? { position: 'absolute', ...noButtonPosition } : {}}
            >
            Hayır
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
