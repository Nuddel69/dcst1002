import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Passord: React.FC = () => {
  const content = (
    <>
      <p> 
        Et passord er en måte å sikre tilgang til informasjon og systemer. En kan si at et passord er at du autentiserer og identifiserer deg selv, slik at mottakeren kan gi deg tilgang til data, konto eller enheten. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Passord" subtitle="Hva er et passord?" content={content} />
    </div>
  );
};

export default Passord;
