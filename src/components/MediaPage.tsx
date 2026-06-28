import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Camera,
  Video,
  Palette,
  Zap,
  Play,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  MonitorPlay,
  Layers
} from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
);
const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
import { sendDualEmails, fieldRow, summaryTable, detailsBlock, escapeHtml } from "../utils/email";
import { NativeSelect } from "./ui/native-select";

// Futuristic particle animation background
const FuturisticBackground = ({ variant = "default", className = "" }: { variant?: string; className?: string }) => {
  const particleCount = variant === "hero" ? 80 : 40;
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(30, 58, 138, 0.1), rgba(22, 78, 99, 0.2))",
            "linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(22, 78, 99, 0.1), rgba(147, 51, 234, 0.2))",
            "linear-gradient(135deg, rgba(22, 78, 99, 0.2), rgba(147, 51, 234, 0.1), rgba(30, 58, 138, 0.2))",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating neon particles */}
      {Array.from({ length: particleCount }).map((_, i) => {
        const colors = ['#9333ea', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];
        const sizes = [2, 3, 4, 5, 6];
        const color = colors[i % colors.length];
        const size = sizes[i % sizes.length];
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 80, 0],
              y: [0, -120, -80, -150, 0],
              opacity: [0.2, 1, 0.3, 0.8, 0.2],
              scale: [1, 1.5, 0.8, 2, 1],
            }}
            transition={{
              duration: 15 + (i % 10),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Glowing lines */}
      {variant === "hero" && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute opacity-20"
          style={{
            width: '2px',
            height: `${100 + i * 50}px`,
            background: `linear-gradient(to bottom, transparent, #9333ea, transparent)`,
            left: `${10 + i * 12}%`,
            top: `${i * 15}%`,
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Morphing shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`morph-${i}`}
          className="absolute opacity-10"
          style={{
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
            background: `linear-gradient(135deg, #9333ea, #3b82f6, #06b6d4)`,
            filter: 'blur(40px)',
          }}
          animate={{
            borderRadius: ['50%', '30% 70% 70% 30%', '60% 40% 40% 60%', '50%'],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 180, 360],
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Media navbar component
const MediaNavbar = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [activeSection, setActiveSection] = useState("hero");
  
  const navItems = [
    { name: "About Us", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 30px rgba(6, 182, 212, 0.7)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TechxServe Media
            </h1>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-white/80 hover:text-white font-medium transition-all duration-300 relative group"
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* Back to Main Button */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full relative overflow-hidden group hover:scale-105 transition-all duration-300"
            whileHover={{
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                background: [
                  'linear-gradient(45deg, #0891b2, #9333ea)',
                  'linear-gradient(45deg, #9333ea, #0891b2)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center">
              Back to Main
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Pulsating glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero section component
const MediaHeroSection = () => (
  <section id="hero" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
    <FuturisticBackground variant="hero" />
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-8"
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          animate={{
            textShadow: [
              '0 0 0 rgba(168, 85, 247, 0)',
              '0 0 40px rgba(168, 85, 247, 0.8)',
              '0 0 0 rgba(168, 85, 247, 0)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          TechxServe
          <br />
          <motion.span
            className="block text-white/90"
            animate={{
              textShadow: [
                '0 0 0 rgba(6, 182, 212, 0)',
                '0 0 30px rgba(6, 182, 212, 0.6)',
                '0 0 0 rgba(6, 182, 212, 0)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            Media
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The creative side of TechxServe – where stories, visuals, and ideas come alive through cutting-edge digital artistry and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center">
              Explore Portfolio
              <Play className="w-5 h-5 ml-2" />
            </span>
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-6 h-6 bg-cyan-500 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </div>
  </section>
);

// About Us section
const MediaAboutSection = () => (
  <section id="about" className="py-24 bg-black relative overflow-hidden">
    <FuturisticBackground />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 0 rgba(168, 85, 247, 0)',
                '0 0 20px rgba(168, 85, 247, 0.6)',
                '0 0 0 rgba(168, 85, 247, 0)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Who We Are
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TechxServe Media is the creative heartbeat of our organization – a specialized division 
            where imagination meets cutting-edge technology. We don't just create content; we craft 
            digital experiences that resonate, inspire, and drive meaningful connections.
          </motion.p>

          <motion.p
            className="text-lg text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            From cinematic storytelling to immersive brand experiences, our team of visionaries, 
            designers, and technical artists push the boundaries of what's possible in digital media. 
            We transform complex ideas into captivating visual narratives.
          </motion.p>

          {/* Services icons */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Video, label: "Video Production", color: "from-purple-500 to-pink-500" },
              { icon: Camera, label: "Photography", color: "from-blue-500 to-cyan-500" },
              { icon: Palette, label: "Creative Design", color: "from-green-500 to-teal-500" },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(168, 85, 247, 0)',
                      `0 0 20px rgba(168, 85, 247, 0.6)`,
                      '0 0 0 rgba(168, 85, 247, 0)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative w-full h-96 rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652200180551-933639e38e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZGlhJTIwcHJvZHVjdGlvbiUyMHZpZGVvJTIwY2FtZXJhJTIwZGFyayUyMHN0dWRpb3xlbnwxfHx8fDE3NTY1OTEyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Creative media production studio"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Glowing overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-purple-900/30 group-hover:from-purple-900/40 transition-all duration-500" />
            
            {/* Floating tech elements */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 backdrop-blur-md rounded-xl flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Camera className="w-6 h-6 text-purple-400" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500/20 backdrop-blur-md rounded-xl flex items-center justify-center"
              animate={{
                y: [0, 8, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <MonitorPlay className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </div>

          {/* Glowing border effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor'
            }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Portfolio section
const MediaPortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Video", "Design", "Branding"];
  
  const portfolioItems = [
    {
      id: 1,
      title: "Cyberpunk Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1704018731115-cdec06f3f067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwcG9ydGZvbGlvJTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3NTY1OTEyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete visual identity for a futuristic tech startup"
    },
    {
      id: 2,
      title: "Motion Graphics Reel",
      category: "Video",
      image: "https://images.unsplash.com/photo-1755997268370-56418ad174c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nJTIwdGltZWxpbmUlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NjU5MTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Dynamic motion graphics showcasing advanced animation techniques"
    },
    {
      id: 3,
      title: "Digital Interface Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1604611714877-a8108b03132f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwdGhlbWV8ZW58MXx8fHwxNzU2NTkxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sleek UI/UX design for next-generation applications"
    },
    {
      id: 4,
      title: "Corporate Video Production",
      category: "Video",
      image: "https://images.unsplash.com/photo-1558982423-f8e8a5c75426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbiUyMGFuaW1hdGlvbiUyMGRhcmslMjBjb21wdXRlcnxlbnwxfHx8fDE3NTY1OTEyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional video content for enterprise clients"
    },
    {
      id: 5,
      title: "Abstract Art Direction",
      category: "Design",
      image: "https://images.unsplash.com/photo-1607184023678-63ea486d62cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFic3RyYWN0JTIwbmVvbiUyMHBhcnRpY2xlcyUyMGRhcmt8ZW58MXx8fHwxNzU2NTkxMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Experimental digital art and creative direction"
    },
    {
      id: 6,
      title: "Brand Activation Campaign",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1652200180551-933639e38e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZGlhJTIwcHJvZHVjdGlvbiUyMHZpZGVvJTIwY2FtZXJhJTIwZGFyayUyMHN0dWRpb3xlbnwxfHx8fDE3NTY1OTEyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive brand experience and activation strategy"
    },
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      <FuturisticBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            animate={{
              textShadow: [
                '0 0 0 rgba(6, 182, 212, 0)',
                '0 0 30px rgba(6, 182, 212, 0.8)',
                '0 0 0 rgba(6, 182, 212, 0)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Our Portfolio
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our latest creative projects and digital innovations that push the boundaries of visual storytelling.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2 bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={activeFilter === filter ? {
                  boxShadow: [
                    '0 0 0 rgba(168, 85, 247, 0)',
                    '0 0 20px rgba(168, 85, 247, 0.6)',
                    '0 0 0 rgba(168, 85, 247, 0)',
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-white/10 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play button for videos */}
                  {item.category === "Video" && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact section
const MediaContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: React.ReactNode } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const adminBody = `
        <h2 style="color:#820507;font-size:20px;margin:0 0 8px;">New Media Inquiry</h2>
        <p style="color:#6b7280;margin:0 0 20px;">Submitted via the TechxServe Media page</p>
        ${summaryTable(`
          ${fieldRow("Name", formData.name)}
          ${fieldRow("Email", formData.email)}
          ${fieldRow("Project Type", formData.project)}
        `)}
        ${formData.message ? detailsBlock("Project Details", formData.message) : ""}
        <p style="color:#6b7280;font-size:13px;margin:24px 0 0;">Reply directly to this email to respond to ${escapeHtml(formData.name)}.</p>
      `;

      const firstName = (formData.name || "there").split(" ")[0];
      const customerBody = `
        <h2 style="color:#111827;font-size:22px;margin:0 0 6px;font-weight:700;">Thanks, ${escapeHtml(firstName)}!</h2>
        <p style="color:#6b7280;font-size:15px;margin:0 0 18px;">We've received your media inquiry.</p>
        <p style="color:#374151;margin:0 0 20px;">Our creative team will review your project and get back to you within <strong style="color:#820507;">24 hours</strong>. Here's a summary of what you sent:</p>
        ${summaryTable(`
          ${fieldRow("Project Type", formData.project)}
        `)}
        ${formData.message ? detailsBlock("Your Project Details", formData.message) : ""}
        <p style="color:#374151;margin:28px 0 0;">If anything is urgent, reach us at <a href="mailto:info@techxserve.com" style="color:#820507;text-decoration:none;font-weight:500;">info@techxserve.com</a>.</p>
        <p style="color:#374151;margin:18px 0 0;">Talk soon,<br><strong>The TechxServe Media Team</strong></p>
      `;

      await sendDualEmails({
        adminSubject: `New Media Inquiry from ${formData.name}`,
        adminBodyHtml: adminBody,
        customerEmail: formData.email,
        customerSubject: "We received your inquiry — TechxServe Media",
        customerBodyHtml: customerBody,
      });
      setSubmitStatus({ type: "success", message: "Message sent! Check your inbox — our creative team will be in touch within 24 hours." });
      setFormData({ name: '', email: '', project: '', message: '' });
    } catch (err) {
      console.error("Media email failed:", err);
      setSubmitStatus({
        type: "error",
        message: <>Something went wrong. Please try again or email us at <a href="mailto:info@techxserve.com" className="underline">info@techxserve.com</a></>,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <FuturisticBackground />
      
      {/* Animated waves background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 0 rgba(168, 85, 247, 0)',
                  '0 0 25px rgba(168, 85, 247, 0.8)',
                  '0 0 0 rgba(168, 85, 247, 0)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Let's Create
              <br />
              Something Amazing
            </motion.h2>
            
            <motion.p
              className="text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your vision to life? Our creative team is here to transform 
              your ideas into stunning visual experiences that captivate and inspire.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Mail, label: "info@techxserve.com", type: "email", href: "mailto:info@techxserve.com" },
                { icon: Phone, label: "+1 (307) 293-9151", type: "phone", href: "tel:+13072939151" },
                { icon: MapPin, label: "30 N Gould St Ste N, Sheridan, WY 82801", type: "location", href: null },
              ].map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.href || undefined}
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-white/10 group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <contact.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {contact.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(168, 85, 247, 0.1), transparent, rgba(6, 182, 212, 0.1))',
                    'linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent, rgba(168, 85, 247, 0.1))',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="media-name" className="block text-white/80 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="media-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="media-email" className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="media-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="media-project" className="block text-white/80 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <NativeSelect
                    id="media-project"
                    name="project"
                    variant="dark"
                    placeholder="Select a project type"
                    value={formData.project}
                    onChange={(v) => setFormData((prev) => ({ ...prev, project: v }))}
                    options={[
                      { value: "Video Production", label: "Video Production" },
                      { value: "Motion Graphics & Animation", label: "Motion Graphics & Animation" },
                      { value: "Photography", label: "Photography" },
                      { value: "Brand Identity & Logo Design", label: "Brand Identity & Logo Design" },
                      { value: "UI/UX Design", label: "UI/UX Design" },
                      { value: "Social Media Content", label: "Social Media Content" },
                      { value: "Corporate Video / Explainer", label: "Corporate Video / Explainer" },
                      { value: "Product Photography & Video", label: "Product Photography & Video" },
                      { value: "Event Coverage", label: "Event Coverage" },
                      { value: "Creative Direction & Strategy", label: "Creative Direction & Strategy" },
                      { value: "3D / Visual Effects", label: "3D / Visual Effects" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                </div>

                <div>
                  <label htmlFor="media-message" className="block text-white/80 text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="media-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl resize-none"
                    placeholder="Tell us about your vision, goals, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={!submitting ? {
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)'
                  } : undefined}
                  whileTap={!submitting ? { scale: 0.98 } : undefined}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <span className="relative z-10 flex items-center justify-center">
                    {submitting ? "Sending..." : "Start Your Project"}
                    {!submitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />}
                  </span>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </motion.button>

                {submitStatus && (
                  <p className={`text-center font-medium ${submitStatus.type === "success" ? "text-green-400" : "text-red-400"}`}>
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer component
const MediaFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
      <FuturisticBackground className="opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 30px rgba(6, 182, 212, 0.7)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TechxServe Media
            </h3>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 TechxServe Media. The other side of creativity.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

// Main MediaPage component
export default function MediaPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-black">
      <MediaNavbar setCurrentPage={setCurrentPage} />
      <MediaHeroSection />
      <MediaAboutSection />
      <MediaPortfolioSection />
      <MediaContactSection />
      <MediaFooter />
    </div>
  );
}