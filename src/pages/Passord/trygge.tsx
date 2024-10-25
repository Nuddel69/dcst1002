import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const PassordTrygge: React.FC = () => {
  const content = (
    <>
      <p> 
        Et av de viktigste prinsippene for å unngå at et passord kommer på avveie er  å holde passordet hemmelig, det er en grei regel og ikke dele passordet ditt med andre, dette gjelder også venner.
      </p>
      <p> 
        Et viktig tiltak for å holde passordet trygt er å ikke gjenbruke passord, hvis noen får tilgang til en av dine passord har de mulighet til å bruke den flere steder.
      </p>
      <p> 
        Hvis du for eksempel bruker samme passord på TikTok og email, og noen finner ut ditt TikTok passord, har de også nå tilgang til emailen din. Det er derfor viktig med unike passord til ulike bruksområder.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hvordan holder jeg passordene mine trygge?" content={content} />
    </div>
  );
};

export default PassordTrygge;
