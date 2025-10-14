import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { MapPin, Phone, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import logoImage from 'figma:asset/043ff5c08d91c2ccbf4e7d21fa3ec2c9d34d639f.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'About Us', key: 'about' },
    { name: 'Our Team', key: 'team' },
    { name: 'Contact Us', key: 'contact' },
  ];

  const services = [
    'Utility-scale Generation',
    'Digital Energy Trading',
    'Grid Modernization',
    'Community Electrification',
    'Storage Solutions',
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="SCL Energy Alliance" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              An integrated clean energy company redefining how the world generates, 
              trades, and consumes power through innovative, sustainable solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <div>42 Ahmad Yakudima Street Farm Center Kano, Kano Nigeria.</div>
                  <div className="mt-1">House 2 Road 444 Citec Villa, Abuja FCT Nigeria.</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm text-white/80">+2348146637695</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm text-white/80">info@sclealliance.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate(link.key)}
                    className="text-white/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-white/80 hover:text-secondary transition-colors duration-200 text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Newsletter Signup */}
        <div className="mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Industry Updates</h3>
            <p className="text-white/80 text-sm mb-4">
              Stay informed about renewable energy developments and market insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-4">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center space-x-6 text-sm text-white/70">
            <button className="hover:text-secondary transition-colors duration-200">
              Terms of Service
            </button>
            <button className="hover:text-secondary transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="hover:text-secondary transition-colors duration-200">
              Cookie Policy
            </button>
            <button className="hover:text-secondary transition-colors duration-200">
              Accessibility
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-secondary transition-colors duration-200">
              <Linkedin className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-secondary transition-colors duration-200">
              <Twitter className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-secondary transition-colors duration-200">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/60">
          <p>© 2024 SCL Energy Alliance Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}