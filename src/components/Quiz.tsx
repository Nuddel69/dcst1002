import React, { useState } from 'react';

type Option = {
  id: number;
  label: string;
  isCorrect: boolean; // Indicate if the option is correct
  explanation?: string; // Optional explanation for the incorrect answer
};

type QuizProps = {
  question: string;
  options: Option[];
};

const Quiz: React.FC<QuizProps> = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<string>('');
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track if the quiz has been submitted

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const chosenOption = options.find(option => option.id === selectedOption);
      if (chosenOption && chosenOption.isCorrect) {
        setResult('Riktig!');
        setExplanation(null);
      } else {
        setResult('Feil!');
        setExplanation(chosenOption?.explanation || null);
      }
      setIsSubmitted(true); // Mark the quiz as submitted
    }
  };

  return (
    <div className="quiz" style={{ marginTop: '20px' }}>
      <h2 className="title is-6">{question}</h2>
      <div className="options" style={{ marginBottom: '20px' }}>
        {options.map(option => {
          // Determine highlight styles based on submission results
          const isCorrect = option.isCorrect;
          let highlightClasses = "";

          if (isSubmitted) {
            // Highlight correct option in green
            if (isCorrect) {
              highlightClasses = "button is-primary is-light is-outlined";
            }
            // Highlight selected wrong option in red
            if (selectedOption === option.id && !isCorrect) {
              highlightClasses = "button is-danger is-light is-outlined";
            }
          }

          return (
            <div key={option.id} className="field">
              <input
                type="radio"
                id={`option-${option.id}`}
                name="quiz-option"
                value={option.id}
                onChange={() => !isSubmitted && setSelectedOption(option.id)} // Only allow selection if not submitted
                className="radio"
                disabled={isSubmitted} // Disable radio buttons after submission
              />
              <label
                htmlFor={`option-${option.id}`}
                className={highlightClasses}
                style={{
                  marginLeft: '10px',
                  padding: '10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      <button className="button is-link" onClick={handleSubmit} disabled={isSubmitted}>
        Svar
      </button>

      {result && (
        <div className={ ((result === 'Riktig!') ? "notification is-light is-primary" : "notification is-light is-danger") } style={{ marginTop: '20px'}}>
          <strong>{result}</strong>
          {explanation && <div>Forklaring: {explanation}</div>}
        </div>
      )}
    </div>
  );
};

export default Quiz;
