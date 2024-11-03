import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Lureri: React.FC = () => {

  const content = (
    <>
      <p> 
      Det er mange grunner til at noen kan ønske å lure deg på nett. Som nevnt kan det ofte være for å gi deg virus eller spre kaos, men ikke glem at all informasjon i seg selv er veldig verdifull. Dessverre er det slik at for noen er det veldig spennende å vite at det sitter en skoleelev på andre siden av skjermen. Andre ser kanskje en mulighet til å få tak i foreldrene dine, da de jo hender at de har litt penger man kan stjele.
      </p>
      <p>
      Det er mye rart folk kan gjøre med veldig lite informasjon. Hvis du møter noen på nett, er det alltid lurt å være forsiktig med hva du forteller dem. Tenk deg, trenger de du spiller med egentlig å vite hvor gammel du er? Eller hvor du bor? Hvis du er usikker på hva som er greit å dele med andre, kan det være lurt å snakke med noen voksne.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Folk med vonde hensikter" subtitle="Lureri" content={content} />
    </div>
  );
};

export default Lureri;
