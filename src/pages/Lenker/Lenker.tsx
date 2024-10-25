import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const Lenker: React.FC = () => {
  const content = (
    <>
      <p> 
      En lenke på internett er en klikkbar kobling mellom to forskjellige nettsider, eller en forbindelse mellom elementer i et dokument eller en database. De fleste lenker man møter på i hverdagen er gjerne på dette formatet; https://lenk.no/lenker/.
      Det er når man klikker på lenken at nettleseren sender deg til den angitte nettsiden eller resursen. 
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Lenker" subtitle="Hva er en lenke?" content={content} />
    </div>
  );
};

export default Lenker;
