import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const ToFaktor: React.FC = () => {
  const content = (
    <>
      <p> 
        En metode som gir enda et lag med sikkerhet når det kommer til passord er tofaktorautentisering, som ordet tilsier er tofaktorautentisering en form for autentifisering der den første vil være passordet ditt og den andre kan være noe annet som en kode til mobilen din. 
      </p>
      <p> 
        Et eksempel vil være om du skulle vært så uheldig at noen finner ut av passordet ditt og hvis du da har aktivert tofaktorautentisering med kode til mobilen din. Da vil de fortsatt ikke ha tilgang til konto eller enheten din, ettersom de trenger mobilen din for å få tilgang til koden
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Passord" subtitle="Hva er tofaktorautentisering?" content={content} />
    </div>
  );
};

export default ToFaktor;
