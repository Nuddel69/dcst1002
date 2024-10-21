import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const UkjenteLenker: React.FC = () => {

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
      Ukjente lenker vil være de du ikke har sett før eller som ser annerledes ut enn det du er vant til. Det er gjern lenker som fører til usikre eller faske nettsider.  Slike lenker kan gjennskjennes ved mystiske tegn i URL’en eller nettadresser generelt ser merkelig ut, lite informasjon rundt lenken eller ved at senderen av lenka er ukjent. senderen av en lenke kan også utgi seg for å være noen de ikke er, og man må da ta en egen vurdering på om senderen er autentisk eller ikke. Lenker kan være maskerte, slik som på eksempelet over. Ved å ta musepereren over lenka (uten å klikke på den), vil den faktiske nettsiden vises under. Slik kan man vurdere om nettsiden og lenka passer sammen. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Ukjente lenker" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default UkjenteLenker;
