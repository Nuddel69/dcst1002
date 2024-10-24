import React from 'react';

import TextContent from '../components/TextContent.tsx';
import ImageContent from '../components/ImageContent.tsx';

const Spillespill: React.FC = () => {

  const content = (
    <>
      <p>
      Det var kanskje ikke så lurt å trykke på den lenken? Du trodde kanskje du skulle til spillespill, men slike lenker kan være nok til å gi deg store tekniske problemer. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Ånei, her gikk det visst galt..." content={content} />
        <ImageContent
          title=""
          src="/Sad-Face.png"
          alt="Sad-Face"
        />
    </div>
  );
};

export default Spillespill;
