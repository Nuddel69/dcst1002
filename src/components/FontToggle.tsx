import React, { useState, useEffect } from 'react';
import './FontToggle.css'; // Import the associated CSS for the toggle

const FontToggle: React.FC = () => {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    if (isDyslexic) {
      document.body.classList.add('dyslexic-mode');
    } else {
      document.body.classList.remove('dyslexic-mode');
    }
  }, [isDyslexic]);

  return (
    <div className="font-toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDyslexic}
          onChange={() => setIsDyslexic(!isDyslexic)}
        />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">OpenDyslexic</span> {/* Label for the toggle */}
    </div>
  );
};

export default FontToggle;
