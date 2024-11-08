import React from 'react';

import TextContent from '../components/TextContent.tsx';

const Kilder: React.FC = () => {
  const content = (
    <>
      <p>
        All informasjon som forekommer i dette læringsmaterialet er enten fra undervisning i emnet DCST1002 2024, eller hentet fra følgende kilder:
      </p>
      <div className="block">
        Informasjonskilder:
        <ul>
          <li> </li>
          <br />
          <li></li>
          <br />
          <li></li>
        </ul>
      </div>

      <div className="block">
        Bildekilder:
        <ul>
          <li></li>
          <br />
          <li></li>
        </ul>
      </div>

      <div className="block">
        Videokilder:
        <ul>
          <li>
            Eika. (2019, 15.okt). 3 tips for å avsløre svindel [Video]. YouTube. <a href="https://youtu.be/Vk_GlV7ZED0?si=L5TEkfPhfLHrrJtD">https://youtu.be/Vk_GlV7ZED0?si=L5TEkfPhfLHrrJtD</a>
          </li>
          <br />
          <li>
            Eika. (2019, 15. okt). La det ringe [Video]. YouTube. <a href="https://youtu.be/5F09EdYB8Oo">https://youtu.be/5F09EdYB8Oo</a>
          </li>
          <br />
          <li>
            Eika. (2019, 15.okt). Gratulerer, du har blitt svindlet [Video]. YouTube. <a href="https://youtu.be/gjSkVS8f7OU">https://youtu.be/gjSkVS8f7OU</a>
          </li>
          <br />
          <li>
            NRK Humor. (2018. 10. okt). Se opp for folk som tuller på internett! [Video]. YouTube. <a href="https://www.youtube.com/watch?v=kfzMJoNHaK4">https://www.youtube.com/watch?v=kfzMJoNHaK4</a>
          </li>
          <br />
          <li>
            KiNS foreningen kommunal informasjonssikkerhet. (2021, 1. feb). Passordsikkerhet [Video]. YouTube. <a href="https://www.youtube.com/watch?v=IuaCexA3CB0">https://www.youtube.com/watch?v=IuaCexA3CB0</a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <TextContent title="Kilder" content={content} />
    </div>
  );
};

export default Kilder;
