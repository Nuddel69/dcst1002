import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const SterkePassord: React.FC = () => {
  const content = (
    <>
      <p> 
        Langt og komplekst: Et sterkt passord burde ha en passende lengde og inkludere en god blanding av tall, nummer og symboler. Dette for å gjøre det vanskeligere og gjette og mindre forutsigbart. 
      </p>
      <p> 
        Kan du for eksempel se forskjellen på “mitthus” og “Mitt2016!HU5.” Den sistnevnte er vanskeligere å gjette. En kan selvfølgelig gjøre det enda mer vanskelig, men ettersom en skal kunne huske passordet er det også viktig å finne en balanse
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hva er et sterkt passord?" content={content} />
    </div>
  );
};

export default SterkePassord;
