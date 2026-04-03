import React, { useEffect, useRef } from 'react';
import '../VideoBackground.css';

const VideoBackground = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const adjustVideoSize = () => {
      if (iframeRef.current) {
        const container = iframeRef.current.parentElement.parentElement;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        // Calculate the required dimensions to cover the container
        const aspectRatio = 16 / 9;
        let width, height;
        
        if (containerWidth / containerHeight > aspectRatio) {
          // Container is wider than video aspect ratio
          width = containerWidth;
          height = containerWidth / aspectRatio;
        } else {
          // Container is taller than video aspect ratio
          height = containerHeight;
          width = containerHeight * aspectRatio;
        }
        
        // Add extra padding to ensure full coverage
        width = width * 1.5;
        height = height * 1.5;
        
        iframeRef.current.style.width = `${width}px`;
        iframeRef.current.style.height = `${height}px`;
        iframeRef.current.style.left = '50%';
        iframeRef.current.style.top = '50%';
        iframeRef.current.style.transform = 'translate(-50%, -50%)';
      }
    };

    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);

    return () => {
      window.removeEventListener('resize', adjustVideoSize);
    };
  }, []);

  return (
    <section id="video-bg" className="hidden-sm hidden-xs">
      <div className="video-container">
        <div className="youtube-wrapper">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/9giqL1H6yRs?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&start=80&end=259&playsinline=1&loop=1&playlist=9giqL1H6yRs"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Kolkata Background Video"
            className="youtube-video"
          ></iframe>
        </div>
      </div>
      <div id="video-content">
        <p>City of joy</p>
      </div>
    </section>
  );
};

export default VideoBackground;