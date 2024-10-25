import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const FeilLenker: React.FC = () => {

  const quizQuestion = 'Hva gjør man dersom men er uheldig å trykker seg inn på en farlig lenke?';
  const quizOptions = [
    { id: 1, label: 'Holder seg innpå nettsiden til mor og far kommer hjem', isCorrect: false},
    { id: 2, label: 'Fjerner nettsiden fra nattleseren så raskest mulig og søker hjelp hos vokse og IT-avdeligen på skolen', isCorrect: true },
    { id: 3, label: 'Lagrer nettsiden i nettleseren', isCorrect: false },
    { id: 4, label: 'Når nettsiden er fjernet er det ikke ikke lengre et problem', isCorrect: false },
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
        <TextContent title="Lenker" subtitle="Hva gjør du hvis du klikker på feil lenke?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default FeilLenker;
