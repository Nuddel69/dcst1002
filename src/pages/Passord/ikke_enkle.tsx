import React from 'react';

import TextContent from '../../components/TextContent.tsx';
import Quiz from '../../components/Quiz.tsx';

const PassordEnkle: React.FC = () => {
  const quizQuestion = 'Hva er det beste å gjøre når du lager et passord?';
  const quizOptions = [
    { id: 1, label: 'Lage et passord som bare er én bokstav eller ett tall for å skrive det raskere.', isCorrect: false, explanation: 'Korte passord er lette å gjette.' },
    { id: 2, label: 'Bruke ditt eget navn eller fødselsdato som passord for å huske det lettere.', isCorrect: false, explanation: 'Personlige detaljer er ofte enkle å gjette for andre.' },
    { id: 3, label: 'Velge et langt passord som er vanskelig å gjette, med en blanding av bokstaver, tall og symboler.', isCorrect: true },
    { id: 4, label: 'Bruke ord som ‘hund’ eller ‘bil’ fordi de er enkle å huske.', isCorrect: false, explanation: 'Vanlige ord er ofte de første en “passord-tyv” vil prøve.' },
  ];
  const content = (
    <>
      <p>
        Det er selvfølgelig fristende når en lager et passord og går for en lettere løsning, både fordi det
        kan være lettere å huske og enklere å skrive.Det har også sine ulemper ettersom det vil være lettere
        for andre og kunne gjette passordet. Du kan for eksempel tenke deg en sykkelås med bare et siffer på
        låsen(Dette finnes heldigvis ikke), det vil i et slikt tilfelle ta noen maks 10 forsøk å gjette koden
        på låsen. De fleste sykkelåser har derfor 4 sifre, noe som vil si at  de har 10 000 mulige
        kombinasjoner med tall, det vil si at de fleste vil bruke opptil flere tusen forsøk på å gjette koden
        hvis de ikke er  heldige.
      </p>
      <p>
        Det samme prinsippet vil gjelde for et passord. Jo lengre passordet er, jo vanskeligere er det å gjette.
      </p>
      <p>
        De er også andre feller man kan falle for når man lager et passord for eksempel vil det være lettere og
        bruke enkle ord som er lett å huske, for eksempel kan dette være ditt eget navn, skolen din, byen du bor
        i eller noe du observerer mye av til daglig som en hund, bil eller hus.
      </p>
    </>
  );

  return (
    <div>
      <TextContent title="Passord" subtitle="Unngå enkle passord" content={content} />
      <Quiz question={quizQuestion} options={quizOptions} />
    </div>
  );
};

export default PassordEnkle;
