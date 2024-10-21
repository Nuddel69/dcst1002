
import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const HvaKanSkje: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
      Dersom du er uheldig og klikker deg inn på en falsk lenke, er det flere negative hendelser som kan oppstå. Du kan for eksempel få malware innstalert på datamaskinen din. Det er skadelig porgrammvare slik som virus. Noen virus er ufarlige og andre kan gjøre større sklade. Generelt vil de fleste virusene gjøre datamaskinen din ustabil, slette filer og stjele informasjonen din. Enkelte virus er designet for å ikke bli oppdaget og det er derfor ikke alltid like lett å oppdage virus. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Hva kan skje hvis du klikker?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default HvaKanSkje;
