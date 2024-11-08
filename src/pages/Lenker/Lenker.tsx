import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import ImageContent from '../../components/ImageContent.tsx';

const Lenker: React.FC = () => {
  const content = (
    <>
      <p>
        En lenke på internett er en klikkbar kobling mellom to forskjellige nettsider, eller en forbindelse mellom elementer i et dokument eller en database. De fleste lenker man møter på i hverdagen er gjerne på dette formatet: <a href="#">https://lenk.no/lenker/</a>.
        Det er når man klikker på lenken at nettleseren sender deg til den angitte nettsiden eller resursen.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Lenker" subtitle="Hva er en lenke?" content={content} />
      <ImageContent
        title=""
        src="https://cultura-informatica.com/wp-content/uploads/2023/03/Cloudflare-Radar-URL-Scanner-1.jpg"
        alt=""
        src_text="Cultura Informatica"
      />

    </div>
  );
};

export default Lenker;
