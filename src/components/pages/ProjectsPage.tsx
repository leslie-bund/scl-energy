import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { MapPin, Calendar, Zap, Leaf, ArrowRight, Building2, BarChart3, TrendingUp, Award } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const projects = [
    {
      title: "Industrial Solar + Storage Integration",
      location: "Western Canada", 
      type: "Solar + Storage",
      capacity: "25 MW",
      year: "2024",
      status: "Operational",
      description: "Design, construction, PPA structuring, and grid connection for a major industrial facility.",
      outcomes: [
        "12,000+ tonnes CO₂ displaced annually",
        "$2M+ customer savings per year",
        "99.5% system availability",
        "Local community benefits program"
      ],
      image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzU3NTM0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      title: "Campus Microgrid Solution",
      location: "Ontario",
      type: "Microgrid", 
      capacity: "15 MW",
      year: "2023",
      status: "Operational",
      description: "Comprehensive microgrid system for university campus with backup power and demand management.",
      outcomes: [
        "40% reduction in energy costs",
        "Enhanced grid resilience",
        "Student research partnerships",
        "Carbon neutral certification"
      ],
      image: "https://images.unsplash.com/photo-1727692112857-5113e32a6159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBncmlkJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzU3NTM0OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Remote Community Wind Farm",
      location: "Northern Canada",
      type: "Wind + Storage",
      capacity: "8 MW",
      year: "2023",
      status: "Operational",
      description: "Grid-scale wind generation with battery storage for remote community energy independence.",
      outcomes: [
        "75% diesel fuel reduction",
        "Local employment creation",
        "Community ownership structure",
        "Energy cost stabilization"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwZmFybSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTc1MzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Data Center Solar PPA",
      location: "Central Canada",
      type: "Solar PPA",
      capacity: "50 MW",
      year: "2022",
      status: "Operational",
      description: "Long-term renewable energy supply agreement for cloud computing infrastructure.",
      outcomes: [
        "25-year price certainty",
        "100% renewable energy match",
        "Carbon footprint elimination",
        "Scalable capacity expansion"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjB1dGlsaXR5JTIwc2NhbGV8ZW58MXx8fHwxNzU3NTM1MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Agricultural Agri-Voltaics Project",
      location: "Prairie Provinces",
      type: "Agri-Solar",
      capacity: "12 MW",
      year: "2024",
      status: "Under Construction",
      description: "Dual-use agricultural land optimization with elevated solar panels for crop and energy production.",
      outcomes: [
        "Maintained agricultural productivity",
        "Additional revenue stream for farmers",
        "Water conservation benefits",
        "Biodiversity enhancement"
      ],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBzb2xhciUyMGZhcm18ZW58MXx8fHwxNzU3NTM1MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Corporate Green Energy Hub",
      location: "Atlantic Canada",
      type: "Multi-Technology",
      capacity: "30 MW",
      year: "2025",
      status: "In Development",
      description: "Integrated renewable energy campus with solar, wind, and hydrogen production capabilities.",
      outcomes: [
        "Zero-carbon operations target",
        "Green hydrogen production",
        "Regional economic development",
        "Technology demonstration hub"
      ],
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBodWIlMjBjYW1wdXN8ZW58MXx8fHwxNzU3NTM1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const sectors = [
    { name: "Industrial & Manufacturing", count: "15+", icon: Building2 },
    { name: "Institutional & Government", count: "12+", icon: Award },
    { name: "Commercial Real Estate", count: "20+", icon: BarChart3 },
    { name: "Community & Municipal", count: "8+", icon: TrendingUp }
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
              backgroundImage: `url('https://images.unsplash.com/photo-1694532304757-4ee3f004b8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdpbmQlMjBlbmVyZ3klMjBwcm9qZWN0cyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTc1MzgxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
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
                <span className="block">Our Project</span>
                <span className="block text-secondary font-medium">Portfolio</span>
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
                Explore our track record of successful renewable energy projects 
                across Canada, delivering measurable impact for our partners.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
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
              Portfolio Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering renewable energy solutions across diverse sectors and regions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "145+", label: "MW Developed", description: "Across all technologies" },
              { number: "50+", label: "Projects Completed", description: "Successfully commissioned" },
              { number: "$250M+", label: "Capital Deployed", description: "In renewable infrastructure" },
              { number: "1.2M", label: "Tonnes CO₂ Avoided", description: "Annual emission reductions" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 border border-border">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <sector.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-xl font-bold text-secondary mb-1">{sector.count}</div>
                  <div className="text-sm text-muted-foreground">{sector.name}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {projects.filter(p => p.featured).map((project, index) => (
        <section key={project.title} className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-secondary/10 text-secondary">Featured Project</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {project.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Capacity</div>
                    <div className="font-medium text-foreground">{project.capacity}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Technology</div>
                    <div className="font-medium text-foreground">{project.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Status</div>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Outcomes</h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <Leaf className="h-4 w-4 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Project Portfolio */}
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
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of our recent renewable energy developments across Canada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === 'Operational' ? 'default' : 'secondary'}
                        className={project.status === 'Operational' ? 'bg-secondary' : ''}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Location</div>
                        <div className="font-medium">{project.location}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Capacity</div>
                        <div className="font-medium">{project.capacity}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Outcomes:</h4>
                      <ul className="space-y-1">
                        {project.outcomes.slice(0, 2).map((outcome, idx) => (
                          <li key={idx} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            {outcome}
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
                Ready to Start Your Energy Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our growing portfolio of successful renewable energy projects. 
                Let's discuss how we can help you achieve your clean energy goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 h-auto"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('services')}
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 h-auto"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}