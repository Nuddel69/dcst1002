import React from "react";

import TextContent from "../../components/TextContent.tsx";
import ImageContent from "../../components/ImageContent.tsx";

const PassordViktig: React.FC = () => {
  const content = (
    <>
      <p>
        Et passord er viktig når det kommer til trygg ferdsel på nett, dette er
        fordi det sikrer at bare de med tiltenkt formål, har tilgang til data,
        konto eller enheten. De fleste passord vil være individuelle, men det
        forekommer også passord som ikke er individuelle uten at det
        nødvendigvis er kritisk. For eksempel vil de fleste hjem ha et hjemme
        nettverk, der alle som bor i huset har tilgang til nettet gjennom et
        felles passord, på samme måte vil de fleste i huset ha samme nøkkel til
        å låse opp døren til huset. Ser du sammenhengen?
      </p>
      <p>
        I et tilfelle med individuelle passord er det selvfølgelig litt
        annerledes i og med at det er forbeholdt deg og ingen andre. For
        eksempel kan det være at du har en konto på et sosialt medie/nettspill.
        Brukerkontoen du oppretter med passord sikrer at når du sender en
        forespørsel om tilgang til kontoen din ved å oppgi brukernavn og
        passord, vil mottakeren(medie,spillet) sjekke om dette samsvarer, altså
        du identifiserer deg selv. Disse passordene deles ikke ettersom du ikke
        ønsker at noen andre skal identifisere seg som deg og ha tilgang til
        dine data. Det er tilfeller der du kan dele passordet med en voksen du
        stoler på, for eksempel foreldrene dine, hvis du eventuelt er redd for å
        glemme passordet. Et slikt passord er mulig å sammenligne med hvordan
        når du reiser til utlandet har med deg passet ditt slik at du kan
        identifisere deg og de som kontrollerer innpasseringer til landegrenser
        vet at det akkurat er du som kommer til et eventuelt land.
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Passord"
        subtitle="Hvorfor er passord viktige?"
        content={content}
      />
      <ImageContent
        title=""
        src="https://s3.amazonaws.com/assets.knackhq.com/assets/6037a7873eb82d001bbec736/61164eb0d834f3002156be80/original/passwords2.jpg"
        alt=""
        src_text="© 2021 Cybersecurity Ventures. (cybersecurityventures.com/cybersecurity-cartoon-archives/)"
      />
    </div>
  );
};

export default PassordViktig;
