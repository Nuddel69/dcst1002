// src/components/ImageContent.tsx
import React, { useState } from 'react';

type ImageContentProps = {
  src: string;
  alt: string;
  title?: string;
};

const ImageContent: React.FC<ImageContentProps> = ({ src, alt, title, src_text }) => {

  var source = 0;

  if (src_text) {
    source = <p className="is-italic has-text-weight-light is-size-7" >Bilde hentet fra: {src_text}</p>

  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open/close modal function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Inline styles for the image and modal
  const imageStyle = {
    borderRadius: '10px', // Slightly rounded corners
    cursor: 'pointer',    // Indicates the image is clickable
    maxWidth: '100%',     // Responsive width
    height: 'auto',       // Maintain aspect ratio
  };

  const modalStyle = {
    display: isModalOpen ? 'flex' : 'none', // Use flex to center image
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',  // Dark overlay
    justifyContent: 'center', // Centers the image horizontally
    alignItems: 'center',     // Centers the image vertically
    zIndex: 1000,             // Ensure it’s above other content
    cursor: 'pointer',        // Clicking outside closes the modal
  };

  const modalImageStyle = {
    maxHeight: '90%',     // Ensure the modal image doesn't overflow the screen
    maxWidth: '90%',
    borderRadius: '10px',
  };

  return (
    <>
      {/* Image with rounded corners */}
      <div className="content" style={{ marginBottom: '20px' }}>
        {title && <h3 className="title is-5">{title}</h3>} {/* Optional title */}
        <img src={src} alt={alt} style={imageStyle} onClick={toggleModal} />
        {source}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div style={modalStyle} onClick={toggleModal}>
          <img src={src} alt={alt} style={modalImageStyle} />
        </div>
      )}
    </>
  );
};

export default ImageContent;
