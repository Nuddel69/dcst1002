// src/components/VideoContent.tsx
import React from 'react';

type VideoContentProps = {
  videoUrl: string;
  title?: string;
  src_text?: string;
};


const VideoContent: React.FC<VideoContentProps> = ({ videoUrl, title, src_text}) => {
  var source = null;

  // Inline styles for responsive video container
  const videoContainerStyle = {
    borderRadius: '10px', // Slightly rounded corners
    overflow: 'hidden',
  };

  if (src_text) {
    source = <p className="is-italic has-text-weight-light is-size-7" >Video hentet fra: {src_text}</p>
  }

  return (
    <div className="content" style={{ marginBottom: '20px' }}>
      {title && <h3 className="title is-5">{title}</h3>} {/* Optional title */}
      <figure className="image is-16by9" style={videoContainerStyle}>
        <iframe
          className="has-ratio"
          src={videoUrl}
          frameborder="0"
          allowFullScreen
          title={title || 'Embedded video'}
        > </iframe>
      </figure>
        {source}
    </div>
  );
};

export default VideoContent;
