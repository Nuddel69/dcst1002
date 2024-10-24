import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const PassordMistet: React.FC = () => {
  const content = (
    <>
      <p> 
        Det viktigste man kan gjøre vis får tak i passordet ditt er å endre det umiddelbart, eventuelt kan man også aktivere tofaktorautetisering for å øke sikkerheten til neste gang.
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Passord" subtitle="Hva gjør du hvis noen får tak i passordet ditt?" content={content} />
    </div>
  );
};

export default PassordMistet;
