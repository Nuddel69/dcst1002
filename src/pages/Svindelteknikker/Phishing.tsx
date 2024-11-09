import React from "react";

import TextContent from "../../components/TextContent.tsx";
import VideoContent from "../../components/VideoContent.tsx";
import Quiz from "../../components/Quiz.tsx";

const Phishing: React.FC = () => {
  const quizQuestion =
    "Hva er det beste å gjøre hvis du får en melding med en lenke fra noen som sier de er en voksen du kjenner, men du er usikker på om det er ekte?";
  const quizOptions = [
    {
      id: 1,
      label:
        "Spør foreldrene dine eller en voksen du stoler på før du klikker på lenken.",
      isCorrect: true,
    },
    {
      id: 2,
      label: "Klikke på lenken for å se om det ser ekte ut.",
      isCorrect: false,
      explanation:
        "Klikk aldri på lenker hvis du er usikker på hvem de kommer fra.",
    },
    {
      id: 3,
      label: "Gi dem litt informasjon for å teste om de kjenner deg.",
      isCorrect: false,
      explanation:
        "Det kan være farlig å dele personlig informasjon med noen du ikke er sikker på.",
    },
    {
      id: 4,
      label: "Ignorere meldingen og håpe de slutter å kontakte deg.",
      isCorrect: false,
      explanation:
        "Selv om det kan hjelpe, er det best å få råd fra en voksen.",
    },
  ];

  const content = (
    <>
      <p>
        Phishing er en sosial manipulering hvor en kriminell prøver å lure deg
        til å oppgi sensitiv informasjon om deg selv eller noen du skjenner.
        Måten de lurer andre på er som oftest ved å maskere seg for å fremstå
        som en pålitelig kilde. Det er altså kriminelle som påstår å være alt
        fra din mor til legen din. Disse meldingene kan komme på sosiale medier,
        tekstmelding, i spill og i ulike chatter, og vil som oftest inneholde en
        mystisk lenke. Det er ikke alltid like lett å oppdage om det er phishing
        eller ikke. En viktig regel å sette for seg selv er å alltid lese nøye
        før du klikker og aldri oppgi noe informasjon om deg selv over meldinger
        eller internett. Er du i tvil skal du kontakte foreldrene dine.
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Svindelteknikker"
        subtitle="Phishing"
        content={content}
      />
      <VideoContent
        title=""
        videoUrl="https://www.youtube.com/embed/5F09EdYB8Oo"
        src_text="eika.no på youtube.com"
      />
      <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default Phishing;
