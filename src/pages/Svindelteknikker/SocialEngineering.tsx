import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const SocialEngineering: React.FC = () => {

  const quizQuestion = 'Hva gjør du dersom du finner en minnepinne på gata eller på et kjøpesenter?';
  const quizOptions = [
    { id: 1, label: 'Plugger den i pc’en', isCorrect: false },
    { id: 2, label: 'Lar den ligge', isCorrect: true, explanation: '' },
    { id: 3, label: 'Kaster den', isCorrect: false, explanation: 'Du skal ikke plukke opp ting fra bakken' },
  ];

  const content = (
    <>
      <p>
        Social engeniering går ut på at en kriminell bygger en relasjon til offeret og prøver å få offeret
        til å handle slik de ønsker. Dette blir ofte sett på som den farligste teknikken da den ofte
        spiller på følelser og menneskelige svakheter. Denne teknikken er vanskelig å skjenne igjen og
        det er like man kan gjøre for å beskytte seg. Det viktigste er å være skeptisk og tenke seg om
        før man handler. Et eksempel på Sosial engeniering er viretuelle venner, venner du har fått på
        nettet, som etterspørr bilder, å møtes og andre tjenester. Det kan også være hendelser i det
        virkelige liv, som at du finner en minnepinne på gata. Det er da mest sannsynlig noen som har
        lagt den der i et håp om at noen plugger den inn i datamaskinen sin.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Svindelteknikker" subtitle="Social Engineering" content={content} />
      <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default SocialEngineering;
