import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { MissionTargetIcon, CleanEnergyIcon, EnergyTradingIcon, SmartGridIcon, CommunityIcon, VisionIcon } from '../CustomIcons';
import aboutHeroBackground from 'figma:asset/c590f724f2b75e9bb09fb0fcd22699a8726a1686.png';
import sustainableFutureImage from 'figma:asset/d6447a4079507751a8969eb7b17790edb3e94b8f.png';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const missionPoints = [
    {
      icon: CleanEnergyIcon,
      title: "Expand clean generation across technologies",
      description: "Developing utility-scale solar, wind, and hydro projects that deliver clean power at scale"
    },
    {
      icon: EnergyTradingIcon,
      title: "Provide flexible, transparent energy solutions",
      description: "Digital energy trading platforms that serve businesses and homes with innovative approaches"
    },
    {
      icon: SmartGridIcon,
      title: "Modernize grids with smart infrastructure and storage",
      description: "Building the intelligent energy systems that will power our sustainable future"
    },
    {
      icon: CommunityIcon,
      title: "Empower people and organizations through access to reliable power",
      description: "Community and enterprise electrification that drives progress and prosperity"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: `url(${aboutHeroBackground})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80"></div>
          
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
            className="space-y-8 text-center"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.9] tracking-tight"
              >
                <span className="block">Redefining</span>
                <span className="block text-secondary font-medium">Energy</span>
                <span className="block">Systems</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed px-4">
                We are an integrated clean energy company redefining how the world generates, 
                trades, and consumes power. Our focus is on scale, reliability, and innovation—delivering 
                solutions that drive sustainable growth everywhere.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building the Future of Energy
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Our mission drives every project, partnership, and innovation we pursue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {point.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Creating the Foundation for a Sustainable Future
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  At SCL Energy Alliance, we do not just deliver energy—we create the foundation 
                  for a sustainable future. Through our integrated approach to clean energy 
                  generation, smart trading platforms, and modern infrastructure, we are building 
                  the energy systems that will power tomorrow's world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to scale, reliability, and innovation ensures that every 
                  solution we deliver drives sustainable growth for our partners and 
                  communities while protecting our planet for future generations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={sustainableFutureImage}
                  alt="Energy worker at infrastructure site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Ready to Power the Future Together?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Join us in creating sustainable energy solutions that drive progress 
                and build a better tomorrow for everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('team')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 h-auto"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}