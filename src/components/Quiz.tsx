// src/components/Quiz.tsx
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
        setExplanation(chosenOption?.explanation || 'Ingen forklaring gitt.');
      }
      setIsSubmitted(true); // Mark the quiz as submitted
    }
  };

  return (
    <div className="quiz" style={{ marginTop: '20px' }}>
      <h2 className="title is-4">{question}</h2>
      <div className="options" style={{ marginBottom: '20px' }}>
        {options.map(option => {
          // Determine highlight styles based on submission results
          const isCorrect = option.isCorrect;
          let highlightStyle = {};

          if (isSubmitted) {
            // Highlight correct option in green
            if (isCorrect) {
              highlightStyle = { backgroundColor: '#c3e6cb', color: '#155724' };
            }
            // Highlight selected wrong option in red
            if (selectedOption === option.id && !isCorrect) {
              highlightStyle = { backgroundColor: '#f5c6cb', color: '#721c24' };
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
                style={{
                  marginLeft: '10px',
                  padding: '10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  cursor: 'pointer',
                  ...highlightStyle,
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
        <div className="notification" style={{ marginTop: '20px', ...((result === 'Riktig!') ? { backgroundColor: '#d4edda', color: '#155724' } : { backgroundColor: '#f8d7da', color: '#721c24' }) }}>
          <strong>{result}</strong>
          {explanation && <div>Forklaring: {explanation}</div>}
        </div>
      )}
    </div>
  );
};

export default Quiz;
