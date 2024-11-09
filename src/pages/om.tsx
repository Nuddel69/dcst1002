import React from "react";

import TextContent from "../components/TextContent.tsx";

const Om: React.FC = () => {
  const content = (
    <>
      <p>
        Dette prosjektet er utviklet som en del av emnet DCST1002 ved NTNU, der
        oppgaven vår var å lage et læringsverktøy i cybersikkerhet rettet mot en
        valgt målgruppe. Vi har valgt å fokusere på elever i 5.-7. klasse, en
        gruppe som ofte er aktive på nettet, men som kanskje ikke har erfaring
        nok til å gjenkjenne ulike nettfarer.
      </p>

      <p>
        Formålet med prosjektet er å gi unge elever en grunnleggende forståelse
        av trygg nettbruk gjennom en enkel og engasjerende nettside. Her lærer
        elevene om temaer som passordsikkerhet, svindelteknikker og nettvett –
        alt forklart på en måte som passer for deres alder og digitale erfaring.
        Prosjektet inneholder korte tekster, eksempler og interaktive elementer
        som skal hjelpe elevene med å bygge gode nettvaner som kan beskytte dem
        i hverdagen.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Om oss" content={content} />
    </div>
  );
};

export default Om;
