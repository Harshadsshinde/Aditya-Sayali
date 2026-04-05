import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform , AnimatePresence } from "framer-motion";
import bgImage from "../assets/bg.jpg";
import FlipClock from "../components/FlipClock";
import MapComponent from "./MapComponent";
import { LeafletContext } from "@react-leaflet/core";
import GallerySlider from "../components/GallerySlider";
import SakuraPetals from "../components/SakuraPetals";
import "../index.css";
import "@fontsource/great-vibes";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import VideoBackground from "../components/VideoBackground";
import HowWeMet from "../components/HowWeMet";
import haldiImg from "../assets/haldhi1.png";
import wedding from "../assets/wedding1.png";
import mehandi from "../assets/mehandi1.png";
import sangeet from "../assets/sangeet.png";
import WeddingBook from "./WeddingBook";
import Ring from "../assets/ring1.png";

function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const heroRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  // More dramatic parallax
// Background moves slower (parallax)
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

// Text moves more dramatically
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

// Slow fade-out
const opacity = useTransform(scrollYProgress, [0, 1.5], [1, 0]);


  function calculateTimeLeft() {
    const weddingDate = new Date("2026-05-07");
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation click
const handleNavClick = (sectionId) => {
  // Close the mobile menu first
  setIsMenuOpen(false);

  // Wait a short delay for the animation to finish before scrolling
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // navbar height offset
      const y =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 350); // matches AnimatePresence transition duration
};

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "EVENTS", id: "events" },
    { name: "GALLERY", id: "gallery" },
    { name: "HOW WE MET", id: "how we met" },
    { name: "HIGHLIGHTS", id: "highlights" }
  ];
   const events = [
    {
      title: "Mehndi",
      date: "May 05, 2026",
      time: "6:00 PM",
      location: "Malshiras",
      address: "Malshiras",
      mapQuery: "https://maps.app.goo.gl/rV333CmNNZ369JTA8?g_st=aw",
      description: "Traditional Mehndi ceremony with intricate henna designs, music, and celebrations with family and close friends.",
      icon: "Mehndi",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-700"
    },
        {
  title: "Engagement",
  date: "May 05, 2026",
  time: "7:15 PM",
  location: "Suvarna Lawns Marriage Hall",
  address: "Suvarna Lawns Marriage Hall",
  mapQuery: "Suvarna Lawns Marriage Hall",
  description: "A beautiful ceremony marking the official union of two families, where rings are exchanged and blessings are shared for the journey ahead.",
  icon: "Engagement",
  color: "from-blue-500 to-indigo-500",
  textColor: "text-blue-700"
},
     {
      title: "Haldi",
      date: "May 06, 2026",
      time: "8:00 PM",
      location: "Suvarna lawns Marriage Hall",
      address: "Suvarna lawns Marriage Hall",
      mapQuery: "Suvarna lawns Marriage Hall",
      description: "Traditional Haldi ceremony where turmeric paste is applied for purification and blessings before the wedding.",
      icon: "Haldi",
      color: "from-yellow-400 to-amber-400",
      textColor: "text-yellow-700"
    },

    {
      title: "Sangeet",
      date: "May 06, 2026",
      time: "10:00 PM",
      location: "Suvarna lawns Marriage Hall",
      address: "Suvarna lawns Marriage Hall",
      mapQuery: "Suvarna lawns Marriage Hall",
      description: "An evening of music, dance performances, and celebration where families come together for a night of entertainment.",
      icon: "Sangeet",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-700"
    },
   
    {
      title: "Wedding",
      date: "May 07, 2026",
      time: "1:31 PM",
      location: "Suvarna lawns Marriage Hall",
      address: "Suvarna lawns Marriage Hall",
      mapQuery: "Suvarna lawns Marriage Hall",
      description: "Traditional Maharashtrian wedding ceremony with sacred rituals, followed by reception and celebrations.",
      icon: "Wedding",
      color: "from-red-500 to-rose-500",
      textColor: "text-red-700"
    }
  ];

  // Custom SVG Icons for each event
  const EventIcons = {
    Mehndi: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
      <image href={mehandi} width="100" height="100" background="transparent" />
    </svg>
    ),
    Sangeet: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
      <image href={sangeet} width="100" height="100" background="transparent" />
    </svg>
    ),
    Haldi: (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <image href={haldiImg} width="100" height="100" background="transparent" />
    </svg>
    ),
    Wedding: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
      <image href={wedding} width="100" height="100" background="transparent" />
    </svg>
    ),
    Engagement: (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <image href={Ring} width="100" height="100" />
  </svg>
)
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };
  
  return (
    <>
         <div className="min-h-screen bg-cream font-simple overflow-x-hidden">
        {/* Navigation - Fixed Responsive Menu */}
        <motion.nav
          className="fixed top-0 w-full z-50 bg-cream/95 backdrop-blur-sm shadow-sm border-b border-gold/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 py-4">
            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-12 text-center items-center">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-navy hover:text-gold transition-all duration-300 font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>
                  {index < menuItems.length - 1 && (
                    <span className="text-gold/30 text-[10px]">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Menu Button - Hidden on desktop */}
            <div className="flex md:hidden justify-between items-center">
              <div className="text-navy font-semibold text-lg">
                A❤S
              </div>
              <button
                onClick={toggleMenu}
                className="text-navy hover:text-gold transition-all duration-300 p-2 relative z-60"
                aria-label="Toggle menu"
              >
     {/* Hamburger / Close Icon */}
<div
  className="w-6 h-6 relative flex items-center justify-center cursor-pointer"
  onClick={toggleMenu}
>
  {/* Top line */}
  <motion.span
    className="absolute w-6 h-0.5 bg-black rounded-full"
    animate={isMenuOpen ? { rotate: 45 } : { rotate: 0, y: -6 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  />
  {/* Middle line */}
  <motion.span
    className="absolute w-6 h-0.5 bg-black rounded-full"
    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
    transition={{ duration: 0.2 }}
  />
  {/* Bottom line */}
  <motion.span
    className="absolute w-6 h-0.5 bg-black rounded-full"
    animate={isMenuOpen ? { rotate: -45 } : { rotate: 0, y: 6 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  />
</div>


              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
  className="md:hidden bg-black/80 h-full backdrop-blur-lg text-white/90 border-t border-white/20 absolute top-full left-0 right-0 shadow-lg"
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
>
  <div className="container mx-auto px-4 py-4">
    <div className="flex flex-col space-y-3 text-center">
      {menuItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className="text-white/80 hover:text-white transition-all duration-300 font-semibold tracking-wider text-base uppercase py-3 border-b border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 10 }}
        >
          {item.name}
        </motion.button>
      ))}
    </div>
  </div>
</motion.div>

            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section with Parallax */}
        <section
          ref={heroRef}
          id="home"
          className="min-h-screen relative flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImage})`,
              y: backgroundY, // This creates the parallax effect
              scale: 1.1, // Slight zoom to prevent showing edges
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>

          {/* Sakura Petals */}
          <div className="absolute inset-0 overflow-hidden">
            <SakuraPetals />
          </div>

          {/* Main Content with Parallax */}
          <motion.div 
            className="text-center text-white z-20 relative"
            style={{
              y: textY, // Text moves faster than background
              opacity: opacity, // Text fades out as you scroll
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-6"
              >
                
                <div className="flex justify-center items-center mt-2">
                  <div className="h-[1px] w-12 bg-gold/50 mx-4"></div>
                  <div className="h-[1px] w-12 bg-gold/50 mx-4"></div>
                </div>
              </motion.div>

              <motion.h1
                className="text-7xl md:text-9xl font-wedding mb-4 text-center bg-gradient-to-b from-white via-gold/80 to-gold bg-clip-text text-transparent drop-shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              >
                Aditya <span className="text-gold">&</span> Sayali
              </motion.h1>
              <span className="text-xl md:text-2xl font-playfair tracking-[0.3em] uppercase text-gold">
                  Save The Date
                </span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6 text-xl md:text-2xl font-light tracking-widest text-white/90 italic"
              >
                07th May 2026
              </motion.div>
              
              <div className="relative flex items-center justify-center">
                <img
                  src="/fprint.png"
                  alt="Overlay"
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto object-contain"
                />
              </div>

              {/* Countdown Timer */}
              <motion.div
                className="my-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="flex justify-center ml-1 mr-1 space-x-4 md:space-x-8">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <motion.div
                      key={unit}
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[70px] md:min-w-[100px] border border-white/20 shadow-xl">
                        <div className="text-3xl md:text-5xl font-bold text-gold drop-shadow-sm">
                          {value.toString().padStart(2, "0")}
                        </div>
                        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 opacity-80 text-white font-semibold">
                          {unit}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.2em",
                }}
                className="text-2xl md:text-3xl mb-8 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Save Our Date
              </motion.h2>

              <motion.p
                style={{ fontFamily: "'Lora', serif" }}
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                May 07, 2026 • Suvarna Lawns, 
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <motion.a
                  href="#events"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Events
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ opacity: opacity }}
          >
            ↓
          </motion.div>
        </section>

        {/* Rest of your existing code remains the same */}
        <section
          id="events"
          className="py-24 px-6 bg-[#fffcf9] relative overflow-hidden"
        >
          {/* Decorative side pattern */}
          <div className="absolute top-0 left-0 w-32 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle,gold_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="absolute top-0 right-0 w-32 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle,gold_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">Celebrations</span>
              <h2 className="text-5xl md:text-6xl font-wedding text-maroon mb-6">
                Wedding Events
              </h2>
              <div className="flex justify-center items-center mb-8">
                <div className="h-[1px] w-12 bg-gold/30 mx-3"></div>
                <span className="text-2xl text-gold">✨</span>
                <div className="h-[1px] w-12 bg-gold/30 mx-3"></div>
              </div>
            </motion.div>

       

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -15 }}
            >
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gold/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Icon */}
                <motion.div
                  className={`mb-4 ${event.textColor} relative z-10 bg-transparent`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {EventIcons[event.icon]}
                </motion.div>

                {/* Event Title */}
                <motion.h3
                  className={`text-2xl font-cursive font-semibold mb-4 ${event.textColor} relative z-10`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {event.title}
                </motion.h3>

                {/* Date and Time */}
                <div className="space-y-3 mb-4 relative z-10">
                  <motion.div
                    className="flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-gold text-lg">📅</span>
                    <span className="font-semibold font-sans text-gray-700 text-sm">
                      {event.date}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-gold text-lg">⏰</span>
                    <span className="font-semibold font-sans text-gray-700 text-sm">
                      {event.time}
                    </span>
                  </motion.div>
                </div>

                {/* Location */}
                <motion.div
                  className="mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gold text-lg">📍</span>
                    <span className="font-semibold font-sans text-gray-600 text-xs leading-tight">
                      {event.location}
                    </span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-600 mb-4 font-sans leading-relaxed text-sm flex-grow relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {event.description}
                </motion.p>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl"></div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${event.color.replace('from-', 'border-').replace(' to-', '/20')}`}></div>
              </div>

              {/* Floating Particles */}
              <motion.div
                className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
        
       

      {/* Interactive Map Section */}
                  <div className="bg-gray-100 mt-12 rounded-lg p-4">
                    <div className="h-64 rounded-lg overflow-hidden relative group">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Suvarna Lawns Marriage Hall&zoom=14&maptype=roadmap`}
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${events[0].title}`}
                        className="transition-transform duration-300 group-hover:scale-105"
                      ></iframe>

                      {/* Map Controls Overlay */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                          <div className="text-xs text-gray-600 font-semibold font-sans"></div>
                        </div>
                      </div>
                    </div>

                    {/* Map Actions */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
                      <div className="flex space-x-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=Suvarna Lawns Marriage Hall`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-maroon text-black px-4 py-2 rounded-lg text-sm font-semibold font-sans hover:bg-maroon/90 transition-all duration-300 shadow-md"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Directions
                        </a>
                      </div>
                    </div>
                    </div>

        </section>

        {/* <WeddingBook/> */}
        <GallerySlider />
        {/* <HowWeMet/> */}
        <VideoBackground />
       
        {/* Highlights Section */}
        {/* <section
          id="highlights"
          className="py-20 px-6 bg-gradient-to-b from-cream to-maroon text-black"
        >
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              className="text-5xl md:text-6xl text-black font-cursive text-center text-gold mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Highlights
            </motion.h2>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-gold/30"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-black/20 rounded-2xl overflow-hidden">
                <div className="w-full h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-gold mb-4">🎬</div>
                    <p className="text-xl text-gold font-semibold">video </p>
                    <p className="text-white/70 mt-2">Coming soon...</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <motion.button
                  className="bg-gold text-maroon px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Play Highlights
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section> */}
     
        {/* Footer */}
        <footer className="bg-navy text-cream py-20 mt-0 relative overflow-hidden">
          {/* Decorative background for footer */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 text-4xl">✨</div>
            <div className="absolute bottom-10 right-10 text-4xl">✨</div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-5xl md:text-6xl font-wedding text-gold mb-6">
                Aditya & Sayali
              </p>
              <div className="flex justify-center items-center mb-8">
                <div className="h-px w-8 bg-gold/30 mx-3"></div>
                <span className="text-xl">🕊️</span>
                <div className="h-px w-8 bg-gold/30 mx-3"></div>
              </div>
              <p className="tracking-[0.3em] uppercase text-xs md:text-sm font-semibold opacity-80 mb-2">
                May 07, 2026
              </p>
              <p className="tracking-widest uppercase text-[10px] md:text-xs opacity-60">
                Suvarna Lawns, India
              </p>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-xl opacity-80 uppercase tracking-[0.2em]">
                  Made with ❤️ Harshad  
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Hero;
