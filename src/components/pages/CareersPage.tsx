import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart, ArrowRight, Building2 } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const openRoles = [
    {
      title: "Senior Project Engineer - Renewable Energy",
      department: "Engineering",
      location: "Toronto, ON",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead technical development of utility-scale solar and wind projects from feasibility through commissioning.",
      requirements: [
        "Professional Engineer (P.Eng) designation",
        "5+ years renewable energy project experience",
        "Grid interconnection and electrical design expertise",
        "Project management experience"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Commercial",
      location: "Calgary, AB",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive new business development and client relationships for commercial and industrial energy solutions.",
      requirements: [
        "Energy industry sales experience",
        "Strong relationship building skills",
        "Understanding of PPA structures",
        "Willingness to travel"
      ]
    },
    {
      title: "Financial Analyst - Project Finance",
      department: "Finance",
      location: "Toronto, ON",
      type: "Full-time",
      experience: "2+ years",
      description: "Support project financing, financial modeling, and investment analysis for renewable energy projects.",
      requirements: [
        "Finance or Economics degree",
        "Financial modeling experience",
        "Knowledge of project finance structures",
        "Advanced Excel and analytical skills"
      ]
    },
    {
      title: "Environmental Coordinator",
      department: "Sustainability",
      location: "Vancouver, BC",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage environmental assessments, permitting, and compliance for renewable energy development projects.",
      requirements: [
        "Environmental science or related degree",
        "Environmental assessment experience",
        "Knowledge of Canadian regulations",
        "Strong communication skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and wellness programs for you and your family"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, certifications, and career advancement support"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals committed to sustainable energy solutions"
    },
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Hybrid work arrangements and flexible schedules to support work-life balance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwYnVzaW5lc3MlMjBjYXJlZXJ8ZW58MXx8fHwxNzU3NTM3NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/70 to-slate-900/90"></div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-60"></div>
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
                <span className="block">Build Your Career</span>
                <span className="block text-emerald-400 font-medium">With Purpose</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Join a passionate team of professionals advancing renewable energy solutions 
                that power a more sustainable future for Canada and beyond.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Where Impact Meets Innovation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At SCL Energy Alliance, we are building more than just renewable energy projects – 
                  we are creating a sustainable future. Our team combines technical expertise with 
                  entrepreneurial spirit to deliver solutions that matter.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From engineers and analysts to project managers and business developers, 
                  every role contributes to our mission of accelerating Canada's clean 
                  energy transition.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Meaningful Work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Growth Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Collaborative Environment</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NTc1MzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse professional team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive benefits and opportunities designed to support your professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore open positions across our growing organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        {role.department}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {role.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {role.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {role.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {role.experience}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {role.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium text-foreground">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {role.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Do not see the perfect role? We are always interested in connecting with 
                talented professionals who share our vision for sustainable energy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 h-auto"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                Submit Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}