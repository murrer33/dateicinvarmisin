'use client';

import { useState } from 'react';
import type { ProposalData } from '@/types';
import Step1Intro from '@/app/components/proposal-wizard/Step1Intro';
import Step2Proposal from '@/app/components/proposal-wizard/Step2Proposal';
import Step3Celebration from '@/app/components/proposal-wizard/Step3Celebration';
import Step4DateType from '@/app/components/proposal-wizard/Step4DateType';
import Step5Location from '@/app/components/proposal-wizard/Step5Location';
import Step6Contact from '@/app/components/proposal-wizard/Step6Contact';
import Step7Summary from '@/app/components/proposal-wizard/Step7Summary';

export default function ProposalPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ProposalData>({});

  const handleNext = () => setStep(prev => prev + 1);

  const handleSelectDateType = (dateType: NonNullable<ProposalData['dateType']>) => {
    setData(prev => ({ ...prev, dateType }));
    handleNext();
  };

  const handleSelectLocation = (location: NonNullable<ProposalData['location']>) => {
    setData(prev => ({ ...prev, location }));
    handleNext();
  };

  const handleContactSubmit = (contact: NonNullable<ProposalData['contact']>) => {
    setData(prev => ({ ...prev, contact }));
    handleNext();
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Intro onNext={handleNext} />;
      case 2:
        return <Step2Proposal onYes={handleNext} />;
      case 3:
        return <Step3Celebration onNext={handleNext} />;
      case 4:
        return <Step4DateType onSelect={handleSelectDateType} />;
      case 5:
        return <Step5Location onSelect={handleSelectLocation} />;
      case 6:
        return <Step6Contact onSubmit={handleContactSubmit} />;
      case 7:
        return <Step7Summary data={data} />;
      default:
        return <Step1Intro onNext={handleNext} />;
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center font-body text-foreground transition-colors duration-500">
      <div key={step} className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-500">
        {renderStep()}
      </div>
    </main>
  );
}
