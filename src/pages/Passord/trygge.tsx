import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const PassordTrygge: React.FC = () => {
  const quizQuestion = 'Hvorfor bruker man ikke samme passord på flere plattformer?';
  const quizOptions = [
    { id: 1, label: 'Hvis man glemmer passordet tar det lang tid å gjenopprette passordet på  flere plattformer', isCorrect: false },
    { id: 2, label: 'Enn burde bruke samme passord på flere plattformer', isCorrect: false },
    { id: 3, label: 'Hvis noen får tilgang til passordet ditt kan de få tilgang til flere plattformer', isCorrect: true },
  ];

  const content = (
    <>
      <p> 
        Et av de viktigste prinsippene for å unngå at et passord kommer på avveie er  å holde passordet hemmelig, det er en grei regel og ikke dele passordet ditt med andre, dette gjelder også venner.
      </p>
      <p> 
        Et viktig tiltak for å holde passordet trygt er å ikke gjenbruke passord, hvis noen får tilgang til en av dine passord har de mulighet til å bruke den flere steder.
      </p>
      <p> 
        Hvis du for eksempel bruker samme passord på TikTok og email, og noen finner ut ditt TikTok passord, har de også nå tilgang til emailen din. Det er derfor viktig med unike passord til ulike bruksområder.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hvordan holder jeg passordene mine trygge?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default PassordTrygge;
