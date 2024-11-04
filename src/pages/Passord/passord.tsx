import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import ImageContent from '../../components/ImageContent.tsx'

const Passord: React.FC = () => {
  const content = (
    <>
      <p> 
        Et passord er en måte å sikre tilgang til informasjon og systemer. En kan si at et passord er at du autentiserer og identifiserer deg selv, slik at mottakeren kan gi deg tilgang til data, konto eller enheten. 
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hva er et passord?" content={content} />
        <ImageContent
          title=""
          src="https://th.bing.com/th/id/OIG1.M4AP5H6uuKq2HIEISS2Q?pid=ImgGn"
          alt=""
          src_text="Bing Bildeskaper"
        />
    </div>
  );
};

export default Passord;
