import React from "react";

import TextContent from "../../components/TextContent.tsx";

const PassordHuske: React.FC = () => {
  const content = (
    <>
      <p>
        Du kan bruke koder eller setninger som er lette å huske, men vanskelig å
        gjette. Det kan for eksempel være setninger der man plasserer tilfeldige
        tegn, bokstaver og tall inn i setningen
      </p>
    </>
  );

  return (
    <div>
      <TextContent
        title="Passord"
        subtitle="Hvordan kan du huske passordene dine?"
        content={content}
      />
    </div>
  );
};

export default PassordHuske;
