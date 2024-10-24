import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const SpillLenker: React.FC = () => {

  const quizQuestion = 'Hva gjør du om du får tilsendt en rar melding fra en fremmed som inneholder en mystisk lenke? ';
  const quizOptions = [
    { id: 1, label: 'Sletter den', isCorrect: true },
    { id: 2, label: 'Trykker på lenka for å passe på at det ikke er noe farlig', isCorrect: false, explanation: '' },
    { id: 3, label: 'Varsler til mor eller far', isCorrect: true, explanation: '' },
    { id: 4, label: 'Sender lenka videre til alle vennene dine', isCorrect: false, explanation: '' },
  ];

  const content = (
    <>
      <p> 
      Lenker som vil lure deg kan også dukke opp i spill eller i chatt fra andre. Det kan komme fra en venn som har skadelig programmvare på sin datamaskin. Eieren av denne datamaskinen er ofte selv ikke klar over at denne lenka blir send. Lenker kan også dukke opp i spill, uansett om det er et spill du aldri har såpilt før eller om det er et spill som “alle” spiller. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Lenker i spill og chatter" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default SpillLenker;

