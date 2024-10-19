import React from 'react';

import TextContent from '../components/TextContent.tsx';
import Quiz from '../components/Quiz.tsx';

const Phishing: React.FC = () => {

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  const content = (
    <>
      <p> 
       Det er ikke alle som vil deg vel, og folk på internett er slett ikke et unntak. Noen vil bruke deg for penger, andre vil gi deg virus, og noen synes bare det er gøy å spre kaos. Det er viktig å vite at disse menneskene finnes. Aldri stol på folk på nett, med mindre man vet hvem de er.
      </p>
      <p>
      Det er mange grunner til at noen kan ønske å lure deg på nett. Som nevnt kan det ofte være for å gi deg virus eller spre kaos, men ikke glem at all informasjon i seg selv er veldig verdifull. Dessverre er det slik at for noen er det veldig spennende å vite at det sitter en skoleelev på andre siden av skjermen. Andre ser kanskje en mulighet til å få tak i foreldrene dine, da de jo hender at de har litt penger man kan stjele.
      </p>
      <p></p>
      <p>
      Du har kanskje et brukernavn på sosiale medier som TikTok eller et spill der du møter andre mennesker? Hva tror du stopper noen fra å velge navnet ditt? Eller navnet til noen du kjenner, som en venn som bor et stykke unna, eller et familiemedlem du ikke ser så ofte? Du hadde sikkert skjønt det ganske fort, men det er kanskje ikke alltid så lett å være skeptisk til noen som utgir seg for å være bestevennen din og virker kjempeivrig på å møtes. Det er alltid lurt å bekrefte et brukernavn med personen som står bak, før man begynner å prate og dele informasjon med dem, selv hvis du kjenner igjen navnet.
      </p>
      <p>
      Det er mye rart folk kan gjøre med veldig lite informasjon. Hvis du møter noen på nett, er det alltid lurt å være forsiktig med hva du forteller dem. Tenk deg, trenger de du spiller med egentlig å vite hvor gammel du er? Eller hvor du bor? Hvis du er usikker på hva som er greit å dele med andre, kan det være lurt å snakke med noen voksne.
      </p>
      <p></p>
      <p>
      Noen ganger kan folk på nett virke veldig hyggelige. De kan sende deg meldinger med komplimenter eller tilby deg hjelp i et spill, men det betyr ikke nødvendigvis at de vil deg godt. Noen kan bruke snille ord for å få deg til å stole på dem, slik at de kan spørre om personlig informasjon senere. Vær alltid forsiktig, selv om noen virker vennlige.
      </p>
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
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Phishing" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Phishing;
