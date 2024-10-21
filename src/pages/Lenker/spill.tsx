import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const SpillLenker: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
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

