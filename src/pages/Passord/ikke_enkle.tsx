import React from 'react';

import TextContent from '../../components/TextContent.tsx';

const PassordEnkle: React.FC = () => {
  const content = (
    <>
      <p> 
        Det er selvfølgelig fristende når en lager et passord og går for en lettere løsning, både fordi det kan være lettere å huske og enklere å skrive.Det har også sine ulemper ettersom det vil være lettere for andre og kunne gjette passordet. Du kan for eksempel tenke deg en sykkelås med bare et siffer på låsen(Dette finnes heldigvis ikke), det vil i et slikt tilfelle ta noen maks 10 forsøk å gjette koden på låsen. De fleste sykkelåser har derfor mellom  4 siffre, noe som vil si at  de har 10 000 mulige kombinasjoner med tall, det vil si at de fleste vil bruke opptil flere tusen forsøk på å gjette koden hvis de ikke er  heldige.
      </p>
      <p> 
        Det samme prinsippet vil gjelde for et passord. Jo lengre passordet er, jo vanskeligere er det å gjette.
      </p>
      <p> 
        De er også andre feller man kan falle for når man lager et passord for eksempel vil det være lettere og bruke enkle ord som er lett å huske, for eksempel kan dette være ditt eget navn, skolen din, byen du bor i eller noe du observerer mye av til daglig som en hund, bil eller hus. 
      </p>
    </>
  );

  return (
    <div>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Passord" subtitle="Unngå enkle passord" content={content} />
    </div>
  );
};

export default PassordEnkle;
