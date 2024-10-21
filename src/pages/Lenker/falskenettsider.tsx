
import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const FalskeNettsider: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
      En falsk nettside er designet for å lure deg til å tro at det er en ekte nettside, men som egentlig blir brukt til å lure deg. Det kan for eksmepel være en kopi av en allerede eksisterende nettside. Slike nettsider blir brukt for å kunne stjele opplysninger om deg selv og brukernavn og passord.
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Falske nettsider" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default FalskeNettsider;
