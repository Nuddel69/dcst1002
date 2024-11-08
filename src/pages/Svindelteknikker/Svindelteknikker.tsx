import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Svindelteknikker: React.FC = () => {

  const content = (
    <>
      <p>
        Noen ganger kan folk på nettet prøve å lure deg til å gi ut personlig informasjon, som passord eller annet som kan brukes mot deg. De kan bruke forskjellige triks for å få deg til å stole på dem, som å late som om de er noen du kjenner. Her lærer du hvordan du kan gjenkjenne slike svindelteknikker, og hva du skal gjøre for å beskytte deg selv. Vi viser deg hvordan du kan være ekstra smart og trygg når du møter folk på nettet!
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Svindelteknikker" subtitle="Svindelteknikker" content={content} />
    </div>
  );
};

export default Svindelteknikker;
