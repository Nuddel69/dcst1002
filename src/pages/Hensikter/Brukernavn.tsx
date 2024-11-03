import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Brukernavn: React.FC = () => {

  const content = (
    <>
      <p> 
      Du har kanskje et brukernavn på sosiale medier som TikTok eller et spill der du møter andre mennesker? Hva tror du stopper noen fra å velge navnet ditt? Eller navnet til noen du kjenner, som en venn som bor et stykke unna, eller et familiemedlem du ikke ser så ofte? Du hadde sikkert skjønt det ganske fort, men det er kanskje ikke alltid så lett å være skeptisk til noen som utgir seg for å være bestevennen din og virker kjempeivrig på å møtes. Det er alltid lurt å bekrefte et brukernavn med personen som står bak, før man begynner å prate og dele informasjon med dem, selv hvis du kjenner igjen navnet.
      </p>
      <p>
      Noen ganger kan folk på nett virke veldig hyggelige. De kan sende deg meldinger med komplimenter eller tilby deg hjelp i et spill, men det betyr ikke nødvendigvis at de vil deg godt. Noen kan bruke snille ord for å få deg til å stole på dem, slik at de kan spørre om personlig informasjon senere. Vær alltid forsiktig, selv om noen virker vennlige.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Folk med vonde hensikter" subtitle="Brukernavn" content={content} />
    </div>
  );
};

export default Brukernavn;
