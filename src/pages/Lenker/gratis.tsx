
import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const GratisLenker: React.FC = () => {

  const content = (
    <>
      <p> 
      Har du noen gang snublet over et tilbud på internett som er knallbra og du tenker for deg selv; “dette må være for godt til å være sant!”? Da er det mest sannsynlig nettopp det. Det er ekstremt sjeldent at man møter på situasjoner hvor noen vil gi deg noe uten å få noe tilbake. Lenker som lover noe gratis eller ufatterlug gode tilbud, er som regel oprettet med en ond hensikt og gir ikke det de lover. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Lenker" subtitle="Lenker som lover noe gratis" content={content} />
    </div>
  );
};

export default GratisLenker;
