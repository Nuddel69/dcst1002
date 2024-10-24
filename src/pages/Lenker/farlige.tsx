
import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const FarligeLenker: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
      Ikke alle lenker er trygge å klikke seg inn på, da de kan opprettes av hvem som helst. Kriminelle vil gjøre alt de kan for å få deg til å klikke på lenker som de selv har skapt for å lure deg. Dette kan de gjøre ved å maskere lenken. En lenke som du trur fører deg til et spill, slik som: <a href="/spillespill">https://www.spillespill.no/</a>, kan faktisk føre deg til en annen nettside enn du forventer. Slike lenker kan gjøre mye mer skade en man skulle tro.
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Farlige lenker" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default FarligeLenker;
