import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import teamHeroBackground from 'figma:asset/f7405d13b8ef9f2595494ba3e33dd0d814725183.png';
import ceoImage from 'figma:asset/2a2706cc13678cbcce8ca49c7afe7297d42cf232.png';
import generalManagerImage from 'figma:asset/3c2a86dfd6bb45eeeb4e5b35c55a42b71742c20c.png';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

export function TeamPage({ onNavigate }: TeamPageProps) {
  const teamMembers = [
    {
      role: "Chief Executive Officer",
      name: "Dr Ezinne Ekpokoba PhD",
      title: "Leading vision and strategy",
      description: "Driving SCL Energy Alliance's mission to transform the global energy landscape through innovative leadership and strategic partnerships.",
      image: ceoImage
    },
    {
      role: "General Manager",
      name: "Sule Mustapha E",
      title: "Operations Management",
      description: "Leading operational excellence and strategic execution across all SCL Energy Alliance business units.",
      image: generalManagerImage
    },
    {
      role: "Director of Engineering",
      name: "Chimaobi U Ndukwe",
      title: "Driving renewable and storage innovation",
      description: "Leading our technical teams in developing cutting-edge renewable energy solutions and next-generation storage technologies."
    },
    {
      role: "Chief Technical Officer",
      name: "",
      title: "Driving renewable and storage innovation", 
      description: "Leading our technical teams in developing cutting-edge renewable energy solutions and next-generation storage technologies."
    },
    {
      role: "Head of Operations",
      name: "",
      title: "Delivering efficiency and scale",
      description: "Ensuring operational excellence across all our projects while scaling our impact to serve communities worldwide."
    },
    {
      role: "Director of Projects",
      name: "",
      title: "Expanding access and impact",
      description: "Leading project development initiatives that bring clean energy access to new communities and maximize positive impact."
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
              backgroundImage: `url(${teamHeroBackground})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/80"></div>
          
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[0.9] tracking-tight px-4"
              >
                <span className="block">Innovators</span>
                <span className="block text-secondary font-medium">United by</span>
                <span className="block">Vision</span>
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
                Our strength is in our people: innovators, engineers, and strategists 
                united by one vision—clean, reliable energy for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
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
              Leadership Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Meet the visionaries driving our mission to transform the global energy landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              return (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                    {/* Image Section */}
                    {member.image ? (
                      <div className="relative h-64 sm:h-72 md:h-80 w-full bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name || member.role}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: '50% 20%' }}
                        />
                      </div>
                    ) : (
                      <div className="relative h-80 w-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                    )}
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="space-y-4 sm:space-y-6">
                        {/* Content */}
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                              {member.role}
                            </h3>
                            {member.name && (
                              <p className="text-base sm:text-lg text-primary font-semibold mb-2">
                                {member.name}
                              </p>
                            )}
                            <p className="text-xs sm:text-sm text-secondary font-medium uppercase tracking-wide">
                              {member.title}
                            </p>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
                Ready to Join Our Mission?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Connect with our team and discover how we can work together 
                to build the sustainable energy future the world needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                Learn About Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}