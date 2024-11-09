import React from "react";

import TextContent from "../../components/TextContent.tsx";
import ImageContent from "../../components/ImageContent.tsx";

const PassordMistet: React.FC = () => {
  const content = (
    <>
      <p>
        Det viktigste man kan gjøre vis får tak i passordet ditt er å endre det
        umiddelbart, eventuelt kan man også aktivere tofaktorautetisering for å
        øke sikkerheten til neste gang.
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Passord"
        subtitle="Hva gjør du hvis noen får tak i passordet ditt?"
        content={content}
      />
      <ImageContent
        title=""
        src="https://windows.atsit.in/no/wp-content/uploads/sites/20/2022/11/hva-gjor-et-godt-og-sterkt-passord-5.jpg"
        alt=""
        src_text="All Things Windows"
      />
    </div>
  );
};

export default PassordMistet;
