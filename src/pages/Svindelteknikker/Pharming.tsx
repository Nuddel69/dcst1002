import React from "react";

import TextContent from "../../components/TextContent.tsx";

const Pharming: React.FC = () => {
  const content = (
    <>
      <p>
        Pharming er en svindelteknikk, der målet er å lure brukeren ved at
        falske nettsider utgir seg for å være ekte nettsider. Svindleren gjør
        dette gjennom å kopiere hvordan den ekte nettsiden ser ut, noe som får
        dem til å se nesten helt like ut. De har også ofte veldig like
        nettadresse(URL) med bare små endringer. Måten man kan identifisere en
        falsk nettside er gjennom å sammenlikne nettadressen med den ekte. Et
        eksempel kan være at det kanskje er bokstaver eller tall som ikke skal
        være der. En skal likevel være skeptisk når man trykker på lenker fra
        ukjente kilder.
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Svindelteknikker"
        subtitle="Pharming"
        content={content}
      />
    </div>
  );
};

export default Pharming;
