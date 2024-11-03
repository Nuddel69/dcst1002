import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const SterkePassord: React.FC = () => {
  const quizQuestion = 'Hvilke av disse er et bra passord?';
  const quizOptions = [
    { id: 1, label: 'sko321', isCorrect: false },
    { id: 2, label: '93x!3U4!mN*23-9', isCorrect: true, explanation: '' },
    { id: 3, label: 'Am3r!kan5k-flagG', isCorrect: false, explanation: '' },
  ];

  const content = (
    <>
      <p> 
        Langt og komplekst: Et sterkt passord burde ha en passende lengde og inkludere en god blanding av tall, nummer og symboler. Dette for å gjøre det vanskeligere og gjette og mindre forutsigbart. 
      </p>
      <p> 
        Kan du for eksempel se forskjellen på “mitthus” og “Mitt2016!HU5.” Den sistnevnte er vanskeligere å gjette. En kan selvfølgelig gjøre det enda mer vanskelig, men ettersom en skal kunne huske passordet er det også viktig å finne en balanse
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hva er et sterkt passord?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default SterkePassord;
