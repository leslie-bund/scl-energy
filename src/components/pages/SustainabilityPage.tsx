import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Leaf, Target, Users, BarChart3, Download, Globe, ArrowRight, Building2, TrendingUp, Award } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: string) => void;
}

export function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
  const commitments = [
    {
      icon: Target,
      title: "Net-Zero Operations by 2040",
      description: "Achieving net-zero Scope 1 & 2 emissions from our operations through renewable energy adoption and efficiency improvements.",
      progress: "85%",
      status: "On Track"
    },
    {
      icon: Leaf,
      title: "Low-Carbon Procurement",
      description: "Prioritizing procurement of low-carbon materials and suppliers across our entire supply chain.",
      progress: "70%",
      status: "In Progress"
    },
    {
      icon: Users,
      title: "Community Benefits",
      description: "Delivering community benefit programs for every major project, including education, infrastructure, and economic development.",
      progress: "100%",
      status: "Ongoing"
    },
    {
      icon: Globe,
      title: "Biodiversity Stewardship",
      description: "Protecting and enhancing biodiversity through responsible site selection, design, and ongoing ecosystem management.",
      progress: "90%",
      status: "Exceeding"
    }
  ];

  const metrics = [
    { value: "1.2M", unit: "tonnes", label: "CO₂ Avoided", year: "2024" },
    { value: "45", unit: "%", label: "Reduction in Embodied Carbon", year: "vs 2020" },
    { value: "25", unit: "MW", label: "Renewable Energy for Operations", year: "2024" },
    { value: "$5M", unit: "", label: "Community Investment", year: "2024" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1607369165516-0e831913b397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50JTIwZm9yZXN0JTIwcmVuZXdhYmxlfGVufDF8fHx8MTc1NzUzNzY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
                <span className="block">Sustainability</span>
                <span className="block text-secondary font-medium">Commitment</span>
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
                Environmental stewardship and social responsibility are integral to our business model,
                driving long-term value creation for all stakeholders.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Overview */}
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
                  Environmental Leadership
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to sustainability extends beyond renewable energy development 
                  to encompass responsible business practices, community engagement, and 
                  environmental stewardship across all operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We integrate environmental and social considerations into every stage of 
                  project development, ensuring lasting positive impact for the communities 
                  and ecosystems where we operate.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Carbon Reduction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Community Benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Biodiversity Protection</span>
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
                  src="https://images.unsplash.com/photo-1598813960856-a83fa955c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc3VzdGFpbmFiaWxpdHklMjBuYXR1cmV8ZW58MXx8fHwxNzU3NTMzNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Environmental sustainability"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
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
              2024 Sustainability Metrics
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable progress toward our environmental and social commitments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="border border-border p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.unit && <span className="text-xs">{metric.unit} </span>}
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {metric.year}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitments */}
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
              Our Commitments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable goals that guide our environmental and social impact strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <commitment.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge 
                        variant={commitment.status === 'Exceeding' ? 'default' : 'secondary'}
                        className={commitment.status === 'Exceeding' ? 'bg-secondary' : ''}
                      >
                        {commitment.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {commitment.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Progress</span>
                        <span className="text-sm font-bold text-primary">{commitment.progress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: commitment.progress }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Framework */}
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
              ESG Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              Environmental, Social, and Governance principles integrated across all operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental",
                description: "Climate action, biodiversity protection, and resource efficiency",
                icon: Leaf,
                initiatives: ["Carbon neutrality", "Ecosystem preservation", "Circular economy"]
              },
              {
                title: "Social",
                description: "Community engagement, workforce development, and stakeholder partnerships", 
                icon: Users,
                initiatives: ["Local employment", "Skills training", "Community investment"]
              },
              {
                title: "Governance",
                description: "Ethical business practices, transparency, and stakeholder accountability",
                icon: Award,
                initiatives: ["Board oversight", "Risk management", "Stakeholder reporting"]
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {pillar.description}
                    </p>
                    <div className="space-y-2">
                      {pillar.initiatives.map((initiative, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{initiative}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
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
                Partner for Sustainable Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in creating positive environmental and social impact through 
                responsible renewable energy development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 h-auto"
              >
                Explore Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Sustainability Report
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}