
import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const GratisLenker: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
      Har du noen gang snublet over et tilbud på internett som er knallbra og du tenker for deg selv; “dette må være for godt til å være sant!”? Da er det mest sannsynlig nettopp det. Det er ekstremt sjeldent at man møter på situasjoner hvor noen vil gi deg noe uten å få noe tilbake. Lenker som lover noe gratis eller ufatterlug gode tilbud, er som regel oprettet med en ond hensikt og gir ikke det de lover. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Lenker som lover noe gratis" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default GratisLenker;
