import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';
import VideoContent from '../../components/VideoContent.tsx';

const Svindelteknikker: React.FC = () => {

  const quizQuestion = 'Hva er grunen til noen lenker kan være farlige?';
  const quizOptions = [
    { id: 1, label: 'De kan sende deg til en falsk nettside og prøve å svinde deg', isCorrect: true },
    { id: 2, label: 'Det kan bli installert virus på datamaskinen din', isCorrect: true },
    { id: 3, label: 'Du mister ranken din i FortNight', isCorrect: false },
  ];

  const content = (
    <>
      <p> 
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Svindelteknikker" subtitle="Falske nettsider" content={content} />
        <VideoContent
          title=""
          videoUrl="https://www.youtube.com/embed/gjSkVS8f7OU"
          src_text="eika.no på youtube.com"
        />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Svindelteknikker;
