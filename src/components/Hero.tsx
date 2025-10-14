import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1724280983914-62701c3f13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB3aW5kJTIwc29sYXIlMjBwYW5vcmFtaWN8ZW58MXx8fHwxNzU3NTM2ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/70 to-slate-900/90"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-secondary/80 rounded-full animate-pulse opacity-60"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.9] tracking-tight"
            >
              <span className="block">Scl Energy Alliance</span>
            </motion.h1>
          </div>

          {/* Subheading and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed">
                Powering Africa's Future. Renewable Generation, Smarter Grids, Unwavering Reliability
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button 
                onClick={() => onNavigate('services')}
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-4 text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => onNavigate('projects')}
                variant="outline"
                className="border-secondary/50 text-secondary hover:bg-secondary/10 font-medium px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-light">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}