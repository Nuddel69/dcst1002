
import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const FalskeNettsider: React.FC = () => {

  const quizQuestion = 'Hva er grunen til noen lenker kan være farlige?';
  const quizOptions = [
    { id: 1, label: 'De kan sende deg til en falsk nettside og prøve å svinde deg', isCorrect: true },
    { id: 2, label: 'Det kan bli installert virus på datamaskinen din', isCorrect: true },
    { id: 3, label: 'Du mister ranken din i FortNight', isCorrect: false },
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
