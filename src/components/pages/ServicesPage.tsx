import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, Zap, FileText, Settings, Network, UserCheck, Building2, CheckCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Zap,
      title: "Renewable Project Development",
      description: "We develop utility-scale and distributed generation projects from site selection and permitting through to construction and commissioning.",
      details: [
        "Feasibility studies and site assessment",
        "Grid interconnection analysis",
        "Stakeholder engagement and consultation",
        "Permitting and regulatory approvals",
        "Construction management and commissioning",
        "Operations & maintenance handover"
      ]
    },
    {
      icon: FileText,
      title: "Corporate Power Purchase Agreements (PPA) & Offtake",
      description: "We structure firm, bankable PPAs and behind-the-meter offtake arrangements that provide price certainty and credible sustainability claims.",
      details: [
        "Long-term power purchase agreements",
        "Behind-the-meter energy solutions",
        "Price certainty and risk management",
        "Bankable contract structures",
        "Sustainability reporting and verification",
        "Regulatory compliance support"
      ]
    },
    {
      icon: Settings,
      title: "Energy-as-a-Service (EaaS) & On-site Generation",
      description: "Turnkey on-site generation and energy management packages that reduce capital outlay while improving uptime and energy resilience.",
      details: [
        "No upfront capital investment required",
        "Turnkey design, build, and operate solutions",
        "Energy management and optimization",
        "Predictable monthly payments",
        "Performance guarantees",
        "24/7 monitoring and maintenance"
      ]
    },
    {
      icon: Network,
      title: "Grid Connections & Microgrid Solutions",
      description: "Custom grid-connected and microgrid systems designed for energy security, resilience, and operational independence.",
      details: [
        "Grid interconnection studies and approval",
        "Islanding and backup power capabilities",
        "Load balancing and demand management",
        "Energy storage integration",
        "Smart grid technology deployment",
        "Emergency response planning"
      ]
    },
    {
      icon: UserCheck,
      title: "Advisory & Due Diligence Services",
      description: "Strategic advisory services for energy investors, developers, and corporate buyers throughout the project lifecycle.",
      details: [
        "Market analysis and opportunity assessment",
        "Technical and commercial due diligence",
        "Regulatory strategy and compliance guidance",
        "Financial modeling and risk analysis",
        "Transaction support and structuring",
        "Performance monitoring and optimization"
      ]
    }
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
              backgroundImage: `url('https://images.unsplash.com/photo-1629798235774-8f840bb2b1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzZXJ2aWNlcyUyMHRlY2hub2xvZ3klMjBzb2xhcnxlbnwxfHx8fDE3NTc1MzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
                <span className="block">Renewable Energy</span>
                <span className="block text-secondary font-medium">Services</span>
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
                From project development to energy management, we deliver comprehensive 
                renewable energy solutions that drive your sustainability goals forward.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              End-to-End Energy Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive renewable energy services across the entire project lifecycle, 
              from initial concept through long-term operations and maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                        Key Services Include:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to renewable energy development that ensures project success from conception to operation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Site evaluation, feasibility studies, and preliminary design"
              },
              {
                step: "02", 
                title: "Development & Permitting",
                description: "Regulatory approvals, stakeholder engagement, and final design"
              },
              {
                step: "03",
                title: "Construction & Commissioning", 
                description: "Project execution, quality control, and system commissioning"
              },
              {
                step: "04",
                title: "Operations & Optimization",
                description: "Performance monitoring, maintenance, and ongoing optimization"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Why Choose SCL Energy Alliance
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our comprehensive approach combines technical expertise with commercial 
                  acumen to deliver renewable energy solutions that exceed expectations 
                  and provide lasting value.
                </p>

                <div className="space-y-4">
                  {[
                    "Proven track record with 145+ MW developed",
                    "End-to-end project management capabilities", 
                    "Flexible financing and partnership structures",
                    "Deep regulatory and market expertise",
                    "Strong stakeholder engagement practices",
                    "Commitment to environmental and social responsibility"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
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
                  src="https://images.unsplash.com/photo-1632933676896-0be1c14e7c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVscyUyMHdpbmQlMjB0dXJiaW5lc3xlbnwxfHx8fDE3NTc1MzU3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Renewable energy infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
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
                Ready to Explore Renewable Energy Solutions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can help you achieve 
                your sustainability goals and energy independence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 h-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('projects')}
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}