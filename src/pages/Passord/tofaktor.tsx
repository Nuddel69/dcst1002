import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const ToFaktor: React.FC = () => {
  const quizQuestion = 'Hvordan kan tofaktorautetisering gi deg mer sikkerhet?';
  const quizOptions = [
    { id: 1, label: 'Den gjør at passordet ditt endres etter hver gang du bruker det', isCorrect: false},
    { id: 2, label: 'Den forbedrer sikkerheten ved at du trenger to forskjellige måter og bekrefte identiteten din på', isCorrect: true, explanation: '' },
    { id: 3, label: 'Den gjør det mulig å logge inn uten passord', isCorrect: false, explanation: '' },
  ];

  const content = (
    <>
      <p> 
        En metode som gir enda et lag med sikkerhet når det kommer til passord er tofaktorautentisering, som ordet tilsier er tofaktorautentisering en form for autentifisering der den første vil være passordet ditt og den andre kan være noe annet som en kode til mobilen din. 
      </p>
      <p> 
        Et eksempel vil være om du skulle vært så uheldig at noen finner ut av passordet ditt og hvis du da har aktivert tofaktorautentisering med kode til mobilen din. Da vil de fortsatt ikke ha tilgang til konto eller enheten din, ettersom de trenger mobilen din for å få tilgang til koden
      </p>
    </>
  );

  return (
    <div>
        <TextContent title="Passord" subtitle="Hva er tofaktorautentisering?" content={content} />
        <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default ToFaktor;
