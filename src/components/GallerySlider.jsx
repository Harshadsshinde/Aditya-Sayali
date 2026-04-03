import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
// import img6 from '../assets/img6.jpg';
// import img7 from '../assets/img7.jpg';
// import img8 from '../assets/img8.jpg';

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const galleryImages = [
  { id: 1, src: img1, alt: 'Our First Meeting', caption: 'First Sparks', date: '2020' },
  { id: 2, src: img2, alt: 'Engagement Day', caption: 'She Said Yes', date: '2021' },
  { id: 3, src: img3, alt: 'Special Moments', caption: 'Adventures Together', date: '2022' },
  { id: 4, src: img4, alt: 'Together Forever', caption: 'Perfect Moments', date: '2023' },
  { id: 5, src: img5, alt: 'Family Celebration', caption: 'With Loved Ones', date: '2023' },
  // { id: 6, src: img2, alt: 'Trip Memories', caption: 'Joyful Times', date: '2024' },
  // { id: 7, src: img5, alt: 'Pre-Wedding Shoot', caption: 'Romantic Vibes', date: '2024' },
  // { id: 8, src: img7, alt: 'Big Day', caption: 'Forever Begins', date: '2025' },
];


  // Check mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible images (current, previous, next)
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    
    return [
      { ...galleryImages[prevIndex], position: 'left' },
      { ...galleryImages[currentIndex], position: 'center' },
      { ...galleryImages[nextIndex], position: 'right' }
    ];
  };

  const visibleImages = getVisibleImages();

  return (
    <section id="gallery" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-6xl font-cursive text-center text-maroon mb-8 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Gallary
        </motion.h2>

        {/* Main Slider Container */}
        <div 
          className="relative h-80 md:h-[500px] rounded-2xl md:rounded-3xl overflow-visible"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards Stack */}
          <div className="relative h-full flex items-center justify-center">
            {visibleImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${image.position}`}
                className={`absolute cursor-pointer transition-all duration-700 ${
                  image.position === 'center' 
                    ? 'z-30 scale-100 shadow-2xl' 
                    : image.position === 'left'
                    ? `z-20 ${isMobile ? '-translate-x-16 scale-90 opacity-80' : '-translate-x-48 md:-translate-x-64 scale-90 opacity-80'}`
                    : `z-20 ${isMobile ? 'translate-x-16 scale-90 opacity-80' : 'translate-x-48 md:translate-x-64 scale-90 opacity-80'}`
                }`}
                initial={{ 
                  x: image.position === 'left' ? (isMobile ? -80 : -200) : image.position === 'right' ? (isMobile ? 80 : 200) : 0,
                  opacity: image.position === 'center' ? 1 : 0.7,
                  scale: image.position === 'center' ? 1 : 0.9
                }}
                animate={{ 
                  x: image.position === 'left' ? (isMobile ? -16 : -200) : image.position === 'right' ? (isMobile ? 16 : 200) : 0,
                  opacity: image.position === 'center' ? 1 : 0.7,
                  scale: image.position === 'center' ? 1 : 0.9
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => {
                  if (image.position === 'left') prevSlide();
                  if (image.position === 'right') nextSlide();
                }}
                whileHover={{ 
                  scale: image.position === 'center' ? 1.02 : 0.95,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image Card */}
                <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden bg-white ${
                  image.position === 'center' 
                    ? (isMobile ? 'w-64 h-64' : 'w-80 h-80 md:w-96 md:h-96') 
                    : (isMobile ? 'w-48 h-48' : 'w-60 h-60 md:w-72 md:h-72')
                }`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end ${
                    image.position === 'center' ? 'opacity-100' : 'opacity-70'
                  }`}>
                    <div className="p-4 md:p-6 text-white w-full text-center">
                      <motion.h3 
                        className={`font-cursive ${
                          image.position === 'center' 
                            ? (isMobile ? 'text-xl' : 'text-2xl md:text-3xl') 
                            : (isMobile ? 'text-sm' : 'text-lg md:text-xl')
                        } text-gold mb-1`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                      </motion.h3>
                      {image.position === 'center' && (
                        <motion.p 
                          className="text-white/90 text-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentIndex + 1} / {galleryImages.length}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows on Side Cards */}
                {image.position !== 'center' && !isMobile && (
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                    image.position === 'left' ? 'right-4' : 'left-4'
                  }`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <svg 
                        className={`w-4 h-4 text-maroon ${image.position === 'left' ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-40 ${
              isMobile ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          >
            <svg className={`text-maroon ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-40 ${
              isMobile ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          >
            <svg className={`text-maroon ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Dots */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40 ${
            isMobile ? 'bg-transparent backdrop-blur-sm rounded-full px-3 py-2' : ''
          }`}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold scale-125' 
                    : 'bg-gray-400 hover:bg-gold/70'
                } ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <motion.div 
          className={`flex justify-center space-x-2 md:space-x-4 mt-8 md:mt-12 ${
            isMobile ? 'overflow-x-auto pb-4 max-w-full' : ''
          }`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg md:rounded-xl transition-all duration-500 flex-shrink-0 ${
                index === currentIndex
                  ? 'ring-2 md:ring-4 ring-gold transform scale-110 z-10 shadow-lg'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`object-cover ${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gold/20"
                  layoutId="activeThumbnail"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Instructions */}
        {isMobile && (
          <motion.div 
            className="text-center mt-4 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySlider;