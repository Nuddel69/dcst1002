import React from 'react';

type TextContentProps = {
  title: string;
  content: React.ReactNode; // Accepts JSX/HTML, not just plain text
  subtitle?: string; // Optional subtitle
};

const TextContent: React.FC<TextContentProps> = ({ title, subtitle, content }) => {
  // Inline styles for padding and typography
  const textContentStyle = {
    paddingTop: '20px',  // Adds padding to the content
    maxWidth: '800px',  // Limit the width for better readability
  };

  const paragraphStyle = {
    fontSize: '1.125rem', // Slightly larger text for readability
    lineHeight: '1.8', // Better line spacing
    letterSpacing: '0.5px', // Adds some spacing between characters
    marginBottom: '20px', // Adds space between paragraphs
  };

  return (
    <div className="content" style={textContentStyle}>
      <h1 className="title is-4">{title}</h1>
      {subtitle && <h2 className="subtitle is-6">{subtitle}</h2>} {/* Optional subtitle */}
      <div>
        {/* This will render any JSX passed in as 'content' */}
        {React.Children.map(content, child => {
          if (typeof child === 'string') {
            // Wrap plain strings in <p> tags
            return <p style={paragraphStyle}>{child}</p>;
          }
          return child; // Return other elements as-is
        })}
      </div>
    </div>
  );
};

export default TextContent;

