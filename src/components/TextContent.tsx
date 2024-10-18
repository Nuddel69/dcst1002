import React from 'react';

type TextContentProps = {
  title: string;
  content: React.ReactNode; // Accepts JSX/HTML, not just plain text
  subtitle?: string; // Optional subtitle
};

const TextContent: React.FC<TextContentProps> = ({ title, subtitle, content }) => {
  // Inline styles for padding
  const textContentStyle = {
    paddingTop: '20px',  // Adds padding to the content
    maxWidth: '800px' // Limit the width for better readability
  };

  return (
    <div className="content" style={textContentStyle}>
      <h1 className="title is-4">{title}</h1>
      {subtitle && <h2 className="subtitle is-6">{subtitle}</h2>} {/* Optional subtitle */}
      <div>
        {content} {/* JSX/HTML content */}
      </div>
    </div>
  );
};

export default TextContent;
