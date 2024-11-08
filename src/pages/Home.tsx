import React from 'react';

import TextContent from '../components/TextContent.tsx';
import ImageContent from '../components/ImageContent.tsx';

const Home: React.FC = () => {

  const content = (
    <>
      <p>
        Denne siden er laget for å hjelpe deg med å være trygg på nettet. Her vil du lære om hvordan du beskytter passordene dine, hva du bør tenke på før du klikker på lenker, og hvordan du kan kjenne igjen lureri på internett. Internett er et spennende sted, men det finnes også noen som kan prøve å lure deg. Vi har gjort det enkelt og morsomt for deg å lære gode råd, sånn at du kan surfe trygt og ha det gøy!
      </p>
      <h6 className='is-title is-6'>Hvordan bruke nettsiden</h6>
      <p>
        Nettsiden er lagd for å være enkel å navigere. Bruk lenkene i menyen på venstre side for å hoppe mellom tema, og trykk på "DCST1002" for å komme tilbake til denne hovedsiden. Hver side er strukturert med litt tekst innenfor et tema, og inkluderer ofte en liten video eller et bilde som fint oppsumerer temaet. Noen ganger er det også en liten "test-deg-selv". Dette er ikke noe skummelt - poeng blir ikke telt, og det er ikke noe galt i å svare feil. Spørsmålene er der bare for at du skal kunne se om du har forstått det!
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Hjem" content={content} />
      <ImageContent
        title=""
        src="https://s3.amazonaws.com/assets.knackhq.com/assets/6037a7873eb82d001bbec736/619799ffcd57f7001ed5bcf6/original/darkwebcompressed.jpg"
        alt="Cybersecurity comic"
        src_text="© 2021 Cybersecurity Ventures. (cybersecurityventures.com/cybersecurity-cartoon-archives/)"
      />
    </div>
  );
};

export default Home;
