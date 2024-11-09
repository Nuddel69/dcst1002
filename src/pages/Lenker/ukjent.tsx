import React from "react";

import TextContent from "../../components/TextContent.tsx";
import Quiz from "../../components/Quiz.tsx";

const UkjenteLenker: React.FC = () => {
  const quizQuestion =
    "Hvilket lenke ville du vurdert som mest sannsynelig å være trygg?";
  const quizOptions = [
    { id: 1, label: "https://www.nettvett.no/", isCorrect: true },
    {
      id: 2,
      label: "http://www.gratispenger.no/",
      isCorrect: false,
      explanation:
        "Et hint du kan bruke for å se om en link er trygg, er å lete etter httpS i nettadressen. Det er også lurt å være forsiktig med ting som ser ut til å være for godt til å være sant.",
    },
    {
      id: 3,
      label: "http://ww2.fr3em8ney.ru/",
      isCorrect: false,
      explanation:
        "Vær forsiktig med nettsider som blander mye bokstaver og tall, eller som ikke følger www. Disse er ofte dårlig lagd og satt opp så fort som mulig for å lure noen.",
    },
  ];

  const content = (
    <>
      <p>
        Ukjente lenker vil være de du ikke har sett før eller som ser annerledes
        ut enn det du er vant til. Det er gjerne lenker som fører til usikre
        eller falske nettsider. Slike lenker kan gjennskjennes ved mystiske tegn
        i URL’en eller nettadresser som generelt ser merkelig ut, lite
        informasjon rundt lenken eller ved at senderen av lenka er ukjent.
        Senderen av en lenke kan også utgi seg for å være noen de ikke er, og
        man må da ta en egen vurdering på om senderen er autentisk eller ikke.
        Lenker kan være maskerte, slik som på eksempelet over. Ved å ta
        musepereren over lenka (uten å klikke på den), vil den faktiske
        nettsiden vises under. Slik kan man vurdere om nettsiden og lenka passer
        sammen.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Lenker" subtitle="Ukjente lenker" content={content} />
      <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default UkjenteLenker;
