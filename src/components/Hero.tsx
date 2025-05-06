import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-hover">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
        <button 
          onClick={scrollToContent}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;