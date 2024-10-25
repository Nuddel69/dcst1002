import React from 'react';

import TextContent from '../components/TextContent.tsx';
import Quiz from '../components/Quiz.tsx';

const Svindel: React.FC = () => {

  const quizQuestion = 'Hva gjør du dersom du finner en minnepinne på gata eller på et kjøpesenter?';
  const quizOptions = [
    { id: 1, label: 'Plugger den i pc’en', isCorrect: false},
    { id: 2, label: 'Lar den ligge', isCorrect: true, explanation: ''},
    { id: 3, label: 'Kaster den', isCorrect: false, explanation: 'Du skal ikke plukke opp ting fra bakken' },
  ];

  const content = (
    <>
      <h2 className="title is-6">
      Phising
      </h2>
      <p>
      Phishing er en sosial manipulering hvor en kriminell prøver å lure deg til å oppgi sensitiv informasjon om deg selv eller noen du skjenner. Måten de lurer andre på er som oftest ved å maskerer seg for å fremstå som en pålitelig kilde. Det er altså kriminelle som påstår å være alt fra din mor til legen din. 
      Disse meldingene kan komme på sosiale medier, tekstmelding, i spill og i ulike chatter, og vil som oftest inneholde en mystisk lenke. Det er ikke alltid like lett å oppdage om det er phishing eller ikke. En viktig regel å sette for seg selv er å alltid lese nøye før du klikker og aldri oppgi noe informasjon om deg selv over meldinger eller internett. Er du i tvil skal du kontakte foreldrene dine. 
      </p>
      <h2 className="title is-6">
      Social engeniering
      </h2>
      <p>
      Social engeniering går ut på at en kriminell bygger en relasjon til offeret og prøver å få offeret til å handle slik de ønsker. Dette blir ofte sett på som den farligste teknikken da den ofte spiller på følelser og menneskelige svakheter. Denne teknikken er vanskelig å skjenne igjen og det er like man kan gjøre for å beskytte seg. Det viktigste er å være skeptisk og tenke seg om før man handler. Et eksempel på Sosial engeniering er viretuelle venner, venner du har fått på nettet, som etterspørr bilder, å møtes og andre tjenester. Det kan også være hendelser i det virkelige liv, som at du finner en minnepinne på gata. Det er da mest sannsynlig noen som har lagt den er i et håp om at noen plugger den inn i datamaskinen sin. 
      </p>
      <h2 className="title is-6">
      Pharming
      </h2>
      <p>
      Pharming er en svindelteknikk, der målet er å lure brukeren ved at falske nettsider utgir seg for å være ekte nettsider. Svindleren gjør dette gjennom å kopiere hvordan den ekte nettsiden ser ut, noe som får dem til å se nesten helt like ut. De har også ofte veldig like nettadresse(URL) med bare små endringer.
      Måten man kan identifisere en falsk nettside er gjennom å sammenlikne nettadressen med den ekte. Et eksempel kan være at det kanskje er bokstaver eller tall som ikke skal være der. En skal likevel være skeptisk når man trykker på lenker fra ukjente kilder.
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Ulike Svindelteknikker" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Svindel;
