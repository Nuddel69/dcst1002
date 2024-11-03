import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import VideoContent from '../../components/VideoContent.tsx';

const Phishing: React.FC = () => {
  const content = (
    <>
      <p> 
      Phishing er en sosial manipulering hvor en kriminell prøver å lure deg til å oppgi sensitiv informasjon om deg selv eller noen du skjenner. Måten de lurer andre på er som oftest ved å maskerer seg for å fremstå som en pålitelig kilde. Det er altså kriminelle som påstår å være alt fra din mor til legen din. 
      Disse meldingene kan komme på sosiale medier, tekstmelding, i spill og i ulike chatter, og vil som oftest inneholde en mystisk lenke. Det er ikke alltid like lett å oppdage om det er phishing eller ikke. En viktig regel å sette for seg selv er å alltid lese nøye før du klikker og aldri oppgi noe informasjon om deg selv over meldinger eller internett. Er du i tvil skal du kontakte foreldrene dine. 
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Svindelteknikker" subtitle="Phishing" content={content} />
        <VideoContent
          title=""
          videoUrl="https://www.youtube.com/embed/5F09EdYB8Oo"
          src_text="eika.no på youtube.com"
        />
    </div>
  );
};

export default Phishing;
