import React from 'react';

import TextContent from '../components/TextContent.tsx';

const Kilder: React.FC = () => {
  const content = (
    <>
      <p> 
        All informasjon som forekommer i dette læringsmaterialet er enten fra undervisning i emnet DCST1002 2024, eller hentet fra følgende kilder:
      </p>
      <ul>
        <li>
          Store norske leksikon (2005-2007): lenke i Store norske leksikon på snl.no. Hentet 18. oktober 2024 fra <a href="https://snl.no/lenke">https://snl.no/lenke</a>
        </li>
        <li></li>
        <li></li>
      </ul>
      Bildekilder:
      <ul>
        <li></li>
        <li></li>
      </ul>
    </>
  );

  return (
    <div>
        <TextContent title="Kilder" content={content} />
    </div>
  );
};

export default Kilder;
