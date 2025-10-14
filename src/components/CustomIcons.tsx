import React from 'react';

interface IconProps {
  className?: string;
}

export function RenewableGenerationIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun rays (solar) */}
      <circle cx="40" cy="24" r="6" fill="#4fc27e" opacity="0.3"/>
      <line x1="40" y1="14" x2="40" y2="10" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="48" y1="16" x2="51" y2="13" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="50" y1="24" x2="54" y2="24" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="16" x2="29" y2="13" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="30" y1="24" x2="26" y2="24" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Wind turbine */}
      <line x1="62" y1="70" x2="62" y2="40" stroke="#111b30" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="62" cy="40" r="2.5" fill="#111b30"/>
      {/* Turbine blades */}
      <path d="M62 40L70 28" stroke="#111b30" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 40L74 46" stroke="#4fc27e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 40L54 48" stroke="#111b30" strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Solar panels array */}
      <rect x="14" y="44" width="16" height="10" rx="1" stroke="#111b30" strokeWidth="2.5" fill="none"/>
      <line x1="14" y1="49" x2="30" y2="49" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="18" y1="44" x2="18" y2="54" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="22" y1="44" x2="22" y2="54" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="26" y1="44" x2="26" y2="54" stroke="#111b30" strokeWidth="1.5"/>
      
      <rect x="14" y="56" width="16" height="10" rx="1" stroke="#111b30" strokeWidth="2.5" fill="none"/>
      <line x1="14" y1="61" x2="30" y2="61" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="18" y1="56" x2="18" y2="66" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="22" y1="56" x2="22" y2="66" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="26" y1="56" x2="26" y2="66" stroke="#111b30" strokeWidth="1.5"/>
      
      {/* Energy flow lines */}
      <path d="M30 50C35 50 35 45 40 45" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
      <path d="M54 48C50 50 48 52 45 52" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
      
      {/* Base */}
      <line x1="10" y1="70" x2="72" y2="70" stroke="#111b30" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function EnergyTradingIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor frame */}
      <rect x="12" y="16" width="56" height="38" rx="2" stroke="#111b30" strokeWidth="2.5" fill="white"/>
      <rect x="30" y="54" width="20" height="3" rx="1.5" fill="#111b30"/>
      <path d="M24 62H56" stroke="#111b30" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="54" x2="40" y2="62" stroke="#111b30" strokeWidth="2.5"/>
      
      {/* Chart area background */}
      <rect x="16" y="28" width="48" height="20" fill="#f8f9fa" rx="1"/>
      
      {/* Grid lines */}
      <line x1="16" y1="32" x2="64" y2="32" stroke="#e5e7eb" strokeWidth="1"/>
      <line x1="16" y1="38" x2="64" y2="38" stroke="#e5e7eb" strokeWidth="1"/>
      <line x1="16" y1="44" x2="64" y2="44" stroke="#e5e7eb" strokeWidth="1"/>
      
      {/* Candlestick chart */}
      <rect x="20" y="34" width="3" height="8" fill="#4fc27e"/>
      <line x1="21.5" y1="32" x2="21.5" y2="42" stroke="#4fc27e" strokeWidth="1.5"/>
      
      <rect x="28" y="36" width="3" height="6" fill="#111b30" opacity="0.3"/>
      <line x1="29.5" y1="34" x2="29.5" y2="42" stroke="#111b30" strokeWidth="1.5" opacity="0.3"/>
      
      <rect x="36" y="32" width="3" height="10" fill="#4fc27e"/>
      <line x1="37.5" y1="30" x2="37.5" y2="42" stroke="#4fc27e" strokeWidth="1.5"/>
      
      <rect x="44" y="35" width="3" height="7" fill="#4fc27e"/>
      <line x1="45.5" y1="33" x2="45.5" y2="42" stroke="#4fc27e" strokeWidth="1.5"/>
      
      <rect x="52" y="38" width="3" height="5" fill="#111b30" opacity="0.3"/>
      <line x1="53.5" y1="36" x2="53.5" y2="43" stroke="#111b30" strokeWidth="1.5" opacity="0.3"/>
      
      <rect x="60" y="33" width="3" height="9" fill="#4fc27e"/>
      <line x1="61.5" y1="31" x2="61.5" y2="42" stroke="#4fc27e" strokeWidth="1.5"/>
      
      {/* Top indicators */}
      <circle cx="18" cy="22" r="2" fill="#4fc27e"/>
      <rect x="23" y="21" width="8" height="2" rx="1" fill="#4fc27e"/>
      <circle cx="34" cy="22" r="2" fill="#111b30" opacity="0.2"/>
      <rect x="39" y="21" width="8" height="2" rx="1" fill="#111b30" opacity="0.2"/>
      
      {/* Trend arrow */}
      <path d="M54 24L58 20L62 24" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="58" y1="20" x2="58" y2="26" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function GridStorageIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large battery container */}
      <rect x="18" y="24" width="44" height="32" rx="3" stroke="#111b30" strokeWidth="2.5" fill="white"/>
      <rect x="62" y="34" width="6" height="12" rx="2" fill="#111b30"/>
      
      {/* Battery level indicator - filled sections */}
      <rect x="22" y="28" width="8" height="24" rx="1.5" fill="#4fc27e"/>
      <rect x="32" y="28" width="8" height="24" rx="1.5" fill="#4fc27e"/>
      <rect x="42" y="28" width="8" height="24" rx="1.5" fill="#4fc27e"/>
      <rect x="52" y="28" width="6" height="24" rx="1.5" fill="#4fc27e" opacity="0.3"/>
      
      {/* Energy symbols inside */}
      <path d="M27 34L25 38H27L25 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M37 34L35 38H37L35 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M47 34L45 38H47L45 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Power connections */}
      <circle cx="18" cy="40" r="3" stroke="#4fc27e" strokeWidth="2.5" fill="white"/>
      <circle cx="62" cy="40" r="3" stroke="#4fc27e" strokeWidth="2.5" fill="white"/>
      <line x1="12" y1="40" x2="15" y2="40" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="65" y1="40" x2="68" y2="40" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Grid connection nodes */}
      <circle cx="10" cy="32" r="2" fill="#4fc27e"/>
      <circle cx="10" cy="48" r="2" fill="#4fc27e"/>
      <circle cx="70" cy="32" r="2" fill="#4fc27e"/>
      <circle cx="70" cy="48" r="2" fill="#4fc27e"/>
      
      {/* Connection lines */}
      <line x1="10" y1="34" x2="10" y2="38" stroke="#4fc27e" strokeWidth="1.5"/>
      <line x1="10" y1="42" x2="10" y2="46" stroke="#4fc27e" strokeWidth="1.5"/>
      <line x1="70" y1="34" x2="70" y2="38" stroke="#4fc27e" strokeWidth="1.5"/>
      <line x1="70" y1="42" x2="70" y2="46" stroke="#4fc27e" strokeWidth="1.5"/>
      
      {/* Percentage indicator */}
      <text x="26" y="66" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#4fc27e">75%</text>
    </svg>
  );
}

export function ElectrificationIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main building structure */}
      <rect x="22" y="16" width="36" height="52" rx="2" stroke="#111b30" strokeWidth="2.5" fill="white"/>
      
      {/* Windows - powered (green) */}
      <rect x="28" y="22" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="32" y1="22" x2="32" y2="29" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="28" y1="25.5" x2="36" y2="25.5" stroke="#111b30" strokeWidth="1.5"/>
      
      <rect x="44" y="22" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="48" y1="22" x2="48" y2="29" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="44" y1="25.5" x2="52" y2="25.5" stroke="#111b30" strokeWidth="1.5"/>
      
      {/* Windows - middle row */}
      <rect x="28" y="34" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="32" y1="34" x2="32" y2="41" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="28" y1="37.5" x2="36" y2="37.5" stroke="#111b30" strokeWidth="1.5"/>
      
      <rect x="44" y="34" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="48" y1="34" x2="48" y2="41" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="44" y1="37.5" x2="52" y2="37.5" stroke="#111b30" strokeWidth="1.5"/>
      
      {/* Windows - lower row */}
      <rect x="28" y="46" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="32" y1="46" x2="32" y2="53" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="28" y1="49.5" x2="36" y2="49.5" stroke="#111b30" strokeWidth="1.5"/>
      
      <rect x="44" y="46" width="8" height="7" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" opacity="0.2"/>
      <line x1="48" y1="46" x2="48" y2="53" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="44" y1="49.5" x2="52" y2="49.5" stroke="#111b30" strokeWidth="1.5"/>
      
      {/* Main entrance */}
      <rect x="34" y="56" width="12" height="12" rx="1" stroke="#111b30" strokeWidth="1.5" fill="#f8f9fa"/>
      <circle cx="42" cy="62" r="1" fill="#111b30"/>
      
      {/* Power source indicator on roof */}
      <circle cx="40" cy="12" r="4" fill="#4fc27e"/>
      <path d="M42 10L40 12L42 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="40" y1="12" x2="40" y2="16" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Energy flow indicators */}
      <circle cx="26" cy="24" r="1.5" fill="#4fc27e"/>
      <circle cx="32" cy="26" r="1.5" fill="#4fc27e"/>
      <circle cx="48" cy="24" r="1.5" fill="#4fc27e"/>
      <circle cx="54" cy="26" r="1.5" fill="#4fc27e"/>
      
      {/* Ground connection */}
      <line x1="20" y1="70" x2="60" y2="70" stroke="#111b30" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MissionTargetIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#111b30" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="6" stroke="#111b30" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" stroke="#111b30" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="#4fc27e"/>
      <line x1="12" y1="2" x2="12" y2="5" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="12" y1="19" x2="12" y2="22" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="2" y1="12" x2="5" y2="12" stroke="#111b30" strokeWidth="1.5"/>
      <line x1="19" y1="12" x2="22" y2="12" stroke="#111b30" strokeWidth="1.5"/>
    </svg>
  );
}

export function CleanEnergyIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Solar panel */}
      <rect x="4" y="10" width="10" height="8" rx="1" stroke="#111b30" strokeWidth="1.5" fill="none"/>
      <line x1="4" y1="14" x2="14" y2="14" stroke="#111b30" strokeWidth="1"/>
      <line x1="9" y1="10" x2="9" y2="18" stroke="#111b30" strokeWidth="1"/>
      <circle cx="7" cy="12" r="0.8" fill="#4fc27e"/>
      <circle cx="11" cy="16" r="0.8" fill="#4fc27e"/>
      
      {/* Wind turbine */}
      <line x1="20" y1="32" x2="20" y2="14" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="14" r="1.5" fill="#111b30"/>
      <path d="M20 14L24 8" stroke="#4fc27e" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 14L26 17" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 14L16 20" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Hydro/water drops */}
      <path d="M32 12C32 12 30 9 30 7C30 5.89543 30.8954 5 32 5C33.1046 5 34 5.89543 34 7C34 9 32 12 32 12Z" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" fillOpacity="0.3"/>
      <path d="M30 18C30 18 28.5 16 28.5 14.5C28.5 13.6716 29.1716 13 30 13C30.8284 13 31.5 13.6716 31.5 14.5C31.5 16 30 18 30 18Z" stroke="#111b30" strokeWidth="1.5" fill="none"/>
      <path d="M35 19C35 19 33.5 17 33.5 15.5C33.5 14.6716 34.1716 14 35 14C35.8284 14 36.5 14.6716 36.5 15.5C36.5 17 35 19 35 19Z" stroke="#111b30" strokeWidth="1.5" fill="none"/>
      
      {/* Connection lines */}
      <path d="M9 20C9 24 13 25 20 25" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M31 20C31 24 27 25 20 25" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      
      {/* Central hub */}
      <circle cx="20" cy="25" r="2.5" stroke="#111b30" strokeWidth="1.5" fill="#4fc27e" fillOpacity="0.3"/>
      <circle cx="20" cy="25" r="1" fill="#4fc27e"/>
      
      {/* Base */}
      <line x1="4" y1="34" x2="36" y2="34" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function SmartGridIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid nodes */}
      <circle cx="10" cy="10" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="20" cy="10" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="30" cy="10" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="10" cy="20" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="20" cy="20" r="4" stroke="#111b30" strokeWidth="2" fill="#4fc27e" opacity="0.3"/>
      <circle cx="30" cy="20" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="10" cy="30" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="20" cy="30" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      <circle cx="30" cy="30" r="3" stroke="#111b30" strokeWidth="2" fill="white"/>
      
      {/* Active connections (green) */}
      <line x1="13" y1="10" x2="17" y2="10" stroke="#4fc27e" strokeWidth="2"/>
      <line x1="23" y1="10" x2="27" y2="10" stroke="#4fc27e" strokeWidth="2"/>
      <line x1="20" y1="13" x2="20" y2="17" stroke="#4fc27e" strokeWidth="2"/>
      <line x1="13" y1="20" x2="17" y2="20" stroke="#4fc27e" strokeWidth="2"/>
      <line x1="23" y1="20" x2="27" y2="20" stroke="#4fc27e" strokeWidth="2"/>
      
      {/* Inactive connections (gray) */}
      <line x1="10" y1="13" x2="10" y2="17" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="30" y1="13" x2="30" y2="17" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="20" y1="23" x2="20" y2="27" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="13" y1="30" x2="17" y2="30" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="23" y1="30" x2="27" y2="30" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="10" y1="23" x2="10" y2="27" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      <line x1="30" y1="23" x2="30" y2="27" stroke="#111b30" strokeWidth="1.5" opacity="0.2"/>
      
      {/* Center node indicator */}
      <circle cx="20" cy="20" r="1.5" fill="#4fc27e"/>
    </svg>
  );
}

export function CommunityIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central power source */}
      <circle cx="20" cy="12" r="5" stroke="#4fc27e" strokeWidth="2" fill="#4fc27e" fillOpacity="0.2"/>
      <path d="M22 9L20 12L22 15" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M18 9L20 12L18 15" stroke="#4fc27e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* People silhouettes */}
      <circle cx="8" cy="24" r="2.5" stroke="#111b30" strokeWidth="1.5" fill="white"/>
      <path d="M5 32C5 30.3431 6.34315 29 8 29C9.65685 29 11 30.3431 11 32" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      
      <circle cx="20" cy="26" r="3" stroke="#111b30" strokeWidth="1.5" fill="white"/>
      <path d="M16 34C16 31.7909 17.7909 30 20 30C22.2091 30 24 31.7909 24 34" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      
      <circle cx="32" cy="24" r="2.5" stroke="#111b30" strokeWidth="1.5" fill="white"/>
      <path d="M29 32C29 30.3431 30.3431 29 32 29C33.6569 29 35 30.3431 35 32" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Building */}
      <rect x="26" y="6" width="8" height="8" stroke="#111b30" strokeWidth="1.5" fill="white"/>
      <rect x="28" y="8" width="1.5" height="1.5" fill="#4fc27e"/>
      <rect x="30.5" y="8" width="1.5" height="1.5" fill="#4fc27e"/>
      <rect x="28" y="10.5" width="1.5" height="1.5" fill="#111b30" fillOpacity="0.3"/>
      <rect x="30.5" y="10.5" width="1.5" height="1.5" fill="#111b30" fillOpacity="0.3"/>
      
      {/* Energy connection lines */}
      <path d="M20 17L20 23" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M18 14L10 20" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M22 14L30 20" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M23 11L26 8" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      
      {/* Energy nodes */}
      <circle cx="20" cy="23" r="1.2" fill="#4fc27e"/>
      <circle cx="10" cy="20" r="1.2" fill="#4fc27e"/>
      <circle cx="30" cy="20" r="1.2" fill="#4fc27e"/>
      
      {/* Base */}
      <line x1="4" y1="36" x2="36" y2="36" stroke="#111b30" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function VisionIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eye outline */}
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#111b30" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="#111b30" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="#4fc27e"/>
      
      {/* Vision rays */}
      <line x1="12" y1="2" x2="12" y2="4" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="5" x2="6.5" y2="6.5" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="5" x2="17.5" y2="6.5" stroke="#4fc27e" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
