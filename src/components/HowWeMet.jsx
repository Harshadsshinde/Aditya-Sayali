import React from 'react';
import { motion } from 'framer-motion';
import img6 from '../assets/img3.png';

const HowWeMet = () => {
  return (
    <section id="how we met" className="py-24 px-6 bg-[#fdfaf6] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">Our Story</span>
          <h2 className="text-5xl md:text-6xl font-wedding text-rose-800 mb-4">
            How We Met 
          </h2>
          <div className="flex justify-center items-center">
            <div className="h-[1px] w-8 bg-gold/50 mx-2"></div>
            <span className="text-rose-400">❤</span>
            <div className="h-[1px] w-8 bg-gold/50 mx-2"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img6}
                alt="Aditya and Sayali"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
              
              {/* Floating Hearts */}
              <div className="absolute top-4 right-4 text-2xl animate-bounce">💕</div>
              <div className="absolute bottom-4 left-4 text-2xl animate-pulse">💖</div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-rose-300 rounded-lg opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-rose-200 rounded-lg opacity-40"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
  className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-rose-200 relative overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-rose-100 rounded-full -translate-y-20 translate-x-20 opacity-40"></div>
  <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-rose-50 rounded-full translate-y-16 -translate-x-12 opacity-40"></div>

  {/* Opening Paragraph */}
  <p className="text-base md:text-lg text-gray-700 leading-relaxed relative z-10">
    Some stories don't begin with grand gestures; they begin quietly — with a smile, 
    a conversation, and a feeling that something special is about to unfold.
    <span className="block mt-4 font-semibold text-rose-800">
      That's how it was for us — Aditya and Sayali.
    </span>
  </p>

  {/* Divider */}
  <div className="my-6 md:my-8 border-t border-rose-100"></div>

  {/* Childhood Story */}
  <div className="relative mb-6 md:mb-8">
    <div className="absolute -top-3 -left-3  text-white p-2 md:p-3 text-sm md:text-base">
      👶
    </div>
    <h3 className="text-xl md:text-2xl font-playfair font-semibold text-rose-800 mb-3 ml-8">
       We know each other from childhood
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed ml-8">
       We met many times but we never thought 
      that it would turn into one of the best relationships. 
      <span className="inline-block mt-2 text-rose-600 font-medium">💕</span>
    </p>
  </div>

  {/* Divine Timing */}
  <div className="mb-6 md:mb-8 relative z-10">
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      It was as if God had carefully written our names side by side long ago 
      and finally decided it was time for our stories to intertwine.
    </p>
  </div>

  {/* Thankful Hearts */}
  <div className="bg-gradient-to-br from-rose-600 to-pink-500 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
    {/* Decorative Icons */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute bottom-4 right-4 text-xl md:text-2xl " >🙏</div>
    </div>

    <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-4 md:mb-6 text-center relative z-10">
      With Thankful Hearts
    </h3>

    <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed relative z-10">
      <p>
        We believe that it was not chance, but God's perfect timing that brought us together.
      </p>
      <p>
        He knew when our hearts were ready, and He guided our steps until we found one another. 
        For this precious gift of love, we are endlessly grateful.
      </p>
      <p className="font-semibold mt-4 md:mt-6 pt-4 md:pt-6 border-t border-rose-400/30">
        As we begin this new chapter — hand in hand, heart to heart — we thank God 
        for blessing us with each other and for making our love story a reflection of His grace.
      </p>
    </div>

    <div className="text-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-rose-400/30 relative z-10">
      <p className="font-cursive text-xl md:text-2xl text-rose-100">Aditya & Sayali</p>
    </div>
  </div>
</motion.div>


            {/* Timeline Dots */}
            <div className="flex justify-center space-x-4 mt-8">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-3 h-3 bg-rose-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${dot * 0.3}s` }}
                ></div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-16 space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {['💑', '❤️', '💞'].map((icon, index) => (
            <div
              key={index}
              className="text-3xl animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {icon}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Custom Styles for Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowWeMet;