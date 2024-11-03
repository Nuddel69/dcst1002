import React from 'react';

import TextContent from '../components/TextContent.tsx';
import VideoContent from '../components/VideoContent.tsx';
import Quiz from '../components/Quiz.tsx';

const Hensikter: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p>
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Hensikter" content={content} />
        <VideoContent
          title=""
          videoUrl="https://www.youtube.com/embed/kfzMJoNHaK4"
          src_text="NRIK Humor på youtube.com"
        />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Hensikter;
