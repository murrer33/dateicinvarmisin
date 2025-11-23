'use client';

import { useState, useEffect } from 'react';
import type { ProposalData } from '@/types';
import Step1Intro from '@/app/components/proposal-wizard/Step1Intro';
import Step2Proposal from '@/app/components/proposal-wizard/Step2Proposal';
import Step3Celebration from '@/app/components/proposal-wizard/Step3Celebration';
import Step5Location from '@/app/components/proposal-wizard/Step5Location';
import Step6Contact from '@/app/components/proposal-wizard/Step6Contact';
import Step7Summary from '@/app/components/proposal-wizard/Step7Summary';
import { useFirebase } from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { collection, doc } from 'firebase/firestore';
import { addDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { v4 as uuidv4 } from 'uuid';

export default function ProposalPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ProposalData>({ dateType: 'Kahve' });

  const { auth, firestore, user, isUserLoading } = useFirebase();

  useEffect(() => {
    if (auth && !user && !isUserLoading) {
      initiateAnonymousSignIn(auth);
    }
  }, [auth, user, isUserLoading]);

  const handleNext = () => setStep(prev => prev + 1);

  const handleSelectLocation = (location: NonNullable<ProposalData['location']>) => {
    setData(prev => ({ ...prev, location }));
    handleNext();
  };

  const handleContactSubmit = (contact: NonNullable<ProposalData['contact']>) => {
    const finalData = { ...data, contact };
    setData(finalData);

    if (user && firestore) {
      const proposalId = uuidv4();
      const userProposalsRef = collection(firestore, 'users', user.uid, 'date_proposals');
      const proposalRef = doc(userProposalsRef, proposalId);
      
      const dataToSave = {
        ...finalData,
        id: proposalId,
        proposalDate: new Date().toISOString(),
      };

      setDocumentNonBlocking(proposalRef, dataToSave, { merge: false });
    }

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
        return <Step5Location onSelect={handleSelectLocation} />;
      case 5:
        return <Step6Contact onSubmit={handleContactSubmit} />;
      case 6:
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
