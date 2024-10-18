// src/components/VideoContent.tsx
import React from 'react';

type VideoContentProps = {
  videoUrl: string;
  title?: string;
};

const VideoContent: React.FC<VideoContentProps> = ({ videoUrl, title }) => {
  // Inline styles for responsive video container
  const videoContainerStyle = {
    position: 'relative' as 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
    backgroundColor: '#000', // Ensures a black background for empty space
  };

  const iframeStyle = {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none', // Remove default border
  };

  return (
    <div className="content" style={{ marginBottom: '20px' }}>
      {title && <h3 className="title is-5">{title}</h3>} {/* Optional title */}
      <div style={videoContainerStyle}>
        <iframe
          style={iframeStyle}
          src={videoUrl}
          allowFullScreen
          title={title || 'Embedded video'}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContent;
