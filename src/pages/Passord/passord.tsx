import React from "react";

import TextContent from "../../components/TextContent.tsx";
import ImageContent from "../../components/ImageContent.tsx";

const Passord: React.FC = () => {
  const content = (
    <>
      <p>
        Et passord er en måte å sikre tilgang til informasjon og systemer. En
        kan si at et passord er at du autentiserer og identifiserer deg selv,
        slik at mottakeren kan gi deg tilgang til data, konto eller enheten.
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Passord"
        subtitle="Hva er et passord?"
        content={content}
      />
      <ImageContent
        title=""
        src="https://www.inology.co.uk/wp-content/uploads/2024/03/inologyit-strongpasswordcreation-thoughtbubble.png"
        alt=""
        src_text="Inology I.T."
      />
    </div>
  );
};

export default Passord;
