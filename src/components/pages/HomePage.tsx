import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight } from 'lucide-react';
import { RenewableGenerationIcon, EnergyTradingIcon, GridStorageIcon, ElectrificationIcon } from '../CustomIcons';
import heroBackground from 'figma:asset/a8c08cb9922c07e904586e492aefd4edc2ee63c4.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: RenewableGenerationIcon,
      title: "Utility-Scale Renewable Generation",
      description: "Large-scale solar, wind, and hydro projects that deliver reliable clean power infrastructure at enterprise scale"
    },
    {
      icon: EnergyTradingIcon,
      title: "Digital Energy Trading Platform",
      description: "Advanced trading solutions and market analytics for businesses seeking flexible, transparent energy procurement"
    },
    {
      icon: GridStorageIcon,
      title: "Grid Modernization & Storage",
      description: "Smart infrastructure deployment and battery storage systems that enhance grid stability and efficiency"
    },
    {
      icon: ElectrificationIcon,
      title: "Enterprise Electrification Solutions",
      description: "Comprehensive clean energy integration for commercial, industrial, and institutional organizations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile-First Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: `url(${heroBackground})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/80"></div>
          
          {/* Subtle Animated Elements for larger screens */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-80"></div>
            <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary/60 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Hero Content - Mobile-First */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Main Heading - Mobile-First Typography */}
              <div className="space-y-4 sm:space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white font-bold"
                >
                  Scl <span className="text-secondary">Energy Alliance</span>
                </motion.h1>
              </div>

              {/* Subheading and Description - Mobile Optimized */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-4 sm:space-y-6 max-w-4xl"
              >
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed font-light">
                    Powering Africa's Future. Renewable Generation, Smarter Grids, Unwavering Reliability
                  </p>
                </div>

                {/* CTA Buttons - Mobile-First Layout */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
                >
                  <Button 
                    onClick={() => onNavigate('about')}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    size="lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
            >
              <div className="flex flex-col items-center space-y-2 text-white/60">
                <span className="text-sm">Scroll to explore</span>
                <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mobile-First Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6">
              Integrated Clean Energy
              <span className="block text-primary">Infrastructure</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              End-to-end solutions delivering reliable, sustainable power at enterprise scale
            </p>
          </motion.div>

          {/* Responsive Grid - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Service Card - Mobile Optimized */}
                <div className="relative p-6 sm:p-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                  {/* Number Badge - Responsive */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">{index + 1}</span>
                  </div>

                  {/* Icon - Responsive */}
                  <div className="mb-4 sm:mb-6">
                    <service.icon className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>

                  {/* Content - Mobile Typography */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action - Mobile Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <button 
              onClick={() => onNavigate('about')}
              className="inline-flex items-center px-5 py-3 sm:px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm sm:text-base"
            >
              <span className="mr-2">Explore Our Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement - Mobile Optimized */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl text-foreground">
              Together, we power progress.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              At SCL Energy Alliance, we are not just delivering energy—we are creating 
              the foundation for a sustainable future. Join us in building tomorrow's 
              energy systems today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 max-w-md sm:max-w-none mx-auto">
              <Button 
                size="lg"
                onClick={() => onNavigate('about')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('team')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 sm:px-8 sm:py-4 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}