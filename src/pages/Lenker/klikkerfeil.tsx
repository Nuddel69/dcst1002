import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const FeilLenker: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
      Hvis du har klikket på en ondsinnet lenke er det viktig å handle raskt. Lukk nettleseren så raskt som mulig. Ta kontakt med en voksen slik at de kan hjelpe deg me då oppdage og fjerne eventuell skadelig programmvare, ved bruk av antivirusprogramvare. Deretter er det viktig å sendre passordene sine og videre holde øye med uvanlig aktivitet i meldinger, dokumenter og kontoer du har på datamaskinen din. Hvis du har muligheten til det, er det også lurt å kontakte IT-avdeligngen på skolen og få videre hjelp. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Hva gjør du hvis du klikker på feil lenke?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default FeilLenker;
