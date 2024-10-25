
import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const FarligeLenker: React.FC = () => {

  const content = (
    <>
      <p> 
      Ikke alle lenker er trygge å klikke seg inn på, da de kan opprettes av hvem som helst. Kriminelle vil gjøre alt de kan for å få deg til å klikke på lenker som de selv har skapt for å lure deg. Dette kan de gjøre ved å maskere lenken. En lenke som du trur fører deg til et spill, slik som: <a href="/spillespill">https://www.spillespill.no/</a>, kan faktisk føre deg til en annen nettside enn du forventer. Slike lenker kan gjøre mye mer skade en man skulle tro.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Lenker" subtitle="Farlige lenker" content={content} />
    </div>
  );
};

export default FarligeLenker;
