import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx'

const Brukernavn: React.FC = () => {

  const quizQuestion = 'Hva bør du gjøre hvis noen på nett har et brukernavn som ligner på en venns, men du er usikker på om det faktisk er dem?';
  const quizOptions = [
    { id: 1, label: 'Spørre vennen din på en annen måte (som via melding eller telefon) om de har det brukernavnet.', isCorrect: true },
    { id: 2, label: 'Gi dem litt personlig informasjon for å se om de husker deg.', isCorrect: false, explanation: 'Del aldri personlig informasjon for å teste om noen er ekte.' },
    { id: 3, label: 'Anta at de er ekte siden brukernavnet ligner på din venns.', isCorrect: false, explanation: 'Noen kan bruke et lignende navn for å lure deg.' },
    { id: 4, label: 'Bare blokkere dem med en gang, uansett hvem de er.', isCorrect: false, explanation: 'Det er lurt å først sjekke hvem de er før du blokkerer.' },
  ];

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
      <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Brukernavn;
