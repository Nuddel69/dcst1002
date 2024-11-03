import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Bilder: React.FC = () => {

  const content = (
    <>
      <p> 
      Når det gjelder å dele bilder på nett, bør du være ekstra forsiktig. Selv om det kan virke uskyldig å sende et bilde til noen du kjenner fra spill eller sosiale medier, vet du aldri helt hvem som ser bildet eller hva de kan bruke det til. Bilder som virker harmløse, kan bli delt videre uten at du vet det, og da har du ikke lenger kontroll over hva som skjer med dem.
      </p>
      <p>
      Hvis du noen gang føler deg utrygg på nettet, er det viktig å gjøre noe med det. Hvis noen oppfører seg rart, eller ber deg om å dele ting du er usikker på, bør du fortelle det til en voksen du stoler på. De kan hjelpe deg med å forstå hva som er riktig å gjøre, og sørge for at du ikke blir utsatt for noe ubehagelig.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Folk med vonde hensikter" subtitle="Deling av bilder" content={content} />
    </div>
  );
};

export default Bilder;
