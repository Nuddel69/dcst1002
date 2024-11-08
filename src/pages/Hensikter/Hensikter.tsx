import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import VideoContent from '../../components/VideoContent.tsx';

const Hensikter: React.FC = () => {

  const content = (
    <>
      <p>
        Det er ikke alle som vil deg vel, og folk på internett er slett ikke et unntak. Noen vil bruke deg for penger, andre vil gi deg virus, og noen synes bare det er gøy å spre kaos. Det er viktig å vite at disse menneskene finnes. Aldri stol på folk på nett, med mindre man vet hvem de er.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Folk med vonde hensikter" subtitle="Ikke alle vil deg vel" content={content} />
      <VideoContent
        title=""
        videoUrl="https://www.youtube.com/embed/kfzMJoNHaK4"
        src_text="eika.no på youtube.com"
      />
    </div>
  );
};

export default Hensikter;
