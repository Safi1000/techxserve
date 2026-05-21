import React, { useState, useRef, useCallback } from "react";

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
};
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { NativeSelect } from "./ui/native-select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Users,
  Heart,
  Lightbulb,
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  Upload,
  FileText,
  MessageSquare,
  Check,
  X,
  Coffee,
  Home,
  Zap,
  Shield,
  Target,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  User,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import EnhancedBackgroundAnimation from "./EnhancedBackgroundAnimation";
import { sendDualEmails, fieldRow, rawFieldRow, summaryTable, detailsBlock, escapeHtml } from "../utils/email";
import { uploadResume } from "../utils/cloudinary";

// Mock job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    experience: "Senior",
    description: "Join our engineering team to build cutting-edge SaaS solutions using modern technologies.",
    requirements: [
      "5+ years of experience with React, Node.js, and cloud platforms",
      "Strong background in system architecture and scalable solutions",
      "Experience with DevOps practices and CI/CD pipelines",
      "Excellent problem-solving and communication skills"
    ],
    posted: "2024-12-10"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "Mid-level",
    description: "Create exceptional user experiences for our enterprise and SaaS products.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles"
    ],
    posted: "2024-12-08"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "Mid-level",
    description: "Build and maintain scalable infrastructure for our growing platform.",
    requirements: [
      "3+ years of experience with AWS/Azure cloud platforms",
      "Expertise in Docker, Kubernetes, and Infrastructure as Code",
      "Experience with monitoring and logging solutions",
      "Strong automation and scripting skills"
    ],
    posted: "2024-12-05"
  }
];

// Hero Section
const CareersHeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Enhanced Background */}
    <EnhancedBackgroundAnimation intensity="subtle" theme="mixed" />

    {/* Dynamic Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />

    <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)]/15 to-purple-500/15 text-[var(--brand-primary)] rounded-full mb-8 backdrop-blur-sm border border-[var(--brand-primary)]/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-5 h-5 mr-3 animate-pulse" />
              <span className="font-semibold">Join Our Team</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              <span className="block mb-2">Join the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] via-red-500 to-red-600 animate-text-glow relative">
                TechxServe Enterprise Family
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-red-500 to-red-600 opacity-20 blur-3xl animate-pulse" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build the future of technology with a team that values innovation, creativity, and personal growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
          >
            <Button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--brand-primary)] via-red-600 to-[var(--brand-primary)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-visible">
              <span className="relative z-10 flex items-center">
                <Briefcase className="mr-2 w-5 h-5 animate-pulse" />
                View Open Positions
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-red-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />
            </Button>

            <Button variant="outline" className="group relative px-8 py-4 border-2 border-[var(--brand-primary)]/50 text-[var(--brand-primary)] rounded-xl font-semibold hover:bg-[var(--brand-primary)]/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center">
                <Heart className="mr-2 w-5 h-5" />
                Learn About Culture
              </span>
              <div className="absolute inset-0 rounded-xl border-2 border-[var(--brand-primary)] opacity-0 group-hover:opacity-60 animate-pulse transition-opacity duration-500" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-1">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-1">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-1">95%</div>
              <div className="text-sm text-gray-600">Remote Work</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group"
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMG9mZmljZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2ODUwMjAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="TechxServe team collaboration"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating elements */}
            <motion.div
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md rounded-xl p-3 shadow-lg"
              animate={{
                y: [0, -8, 0],
                x: [0, 4, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Company Culture Section
const CompanyCultureSection = () => (
  <section className="py-20 relative overflow-hidden">
    <EnhancedBackgroundAnimation intensity="medium" theme="mixed" />

    {/* Enhanced background with multiple animated gradients */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/5 via-purple-500/5 to-blue-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(130, 5, 7, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(130, 5, 7, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)",
            "linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(130, 5, 7, 0.05) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-20 h-20 rounded-full bg-gradient-to-br ${i % 3 === 0 ? 'from-[var(--brand-primary)]/10 to-red-500/10' :
              i % 3 === 1 ? 'from-blue-500/10 to-purple-500/10' :
                'from-emerald-500/10 to-teal-500/10'
            }`}
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600 animate-text-glow">Culture</span>
        </h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-red-500 mx-auto rounded-full mb-8"
          animate={{
            scaleX: [1, 1.5, 1],
            background: [
              "linear-gradient(90deg, #820507 0%, #dc2626 100%)",
              "linear-gradient(90deg, #dc2626 0%, #9333ea 100%)",
              "linear-gradient(90deg, #9333ea 0%, #820507 100%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="text-xl text-gray-600 leading-relaxed">
          At TechxServe Enterprise, we foster an environment where innovation thrives, creativity is celebrated, and every team member has the opportunity to make a meaningful impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We encourage creative thinking and cutting-edge solutions",
            color: "from-yellow-400 to-orange-500"
          },
          {
            icon: Users,
            title: "Collaborative Spirit",
            description: "Teamwork and knowledge sharing drive our success",
            color: "from-blue-500 to-purple-600"
          },
          {
            icon: TrendingUp,
            title: "Growth Mindset",
            description: "Continuous learning and personal development for everyone",
            color: "from-emerald-500 to-teal-600"
          },
          {
            icon: Globe,
            title: "Remote-First",
            description: "Flexible work arrangements that promote work-life balance",
            color: "from-[var(--brand-primary)] to-red-600"
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Animated glow border */}
            <motion.div
              className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 text-center h-full group-hover:bg-white/95 group-hover:border-transparent">
              {/* Moving gradient background on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                animate={{
                  background: [
                    `linear-gradient(45deg, transparent 0%, rgba(130, 5, 7, 0.1) 50%, transparent 100%)`,
                    `linear-gradient(225deg, transparent 0%, rgba(130, 5, 7, 0.1) 50%, transparent 100%)`,
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-lg group-hover:shadow-2xl relative overflow-hidden`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.8 }
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ backgroundSize: '200% 100%' }}
                />
                <item.icon className="w-full h-full text-white relative z-10" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-primary)] transition-all duration-300"
                whileHover={{
                  textShadow: "0 0 8px rgba(130, 5, 7, 0.5)",
                  scale: 1.05
                }}
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[var(--brand-primary)] rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Moving glow line after section */}
      <motion.div
        className="mt-20 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] via-white to-[var(--brand-primary)]"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
    </div>
  </section>
);

// Why Work With Us Section
const WhyWorkWithUsSection = () => (
  <section className="py-20 relative overflow-hidden">
    <EnhancedBackgroundAnimation intensity="medium" theme="mixed" />

    {/* Enhanced animated background layers */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[var(--brand-primary)]/20 to-purple-500/20 blur-sm"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      {/* Animated gradient waves */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-[var(--brand-primary)]/5 to-blue-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(130, 5, 7, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(130, 5, 7, 0.05) 100%)",
            "linear-gradient(45deg, rgba(130, 5, 7, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600 animate-text-glow">TechxServe Enterprise</span>
        </h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-red-500 mx-auto rounded-full"
          animate={{
            scaleX: [1, 1.8, 1],
            boxShadow: [
              "0 0 0 rgba(130, 5, 7, 0)",
              "0 0 20px rgba(130, 5, 7, 0.6)",
              "0 0 0 rgba(130, 5, 7, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Subtle border glow */}
          <motion.div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--brand-primary)] to-red-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"
          />

          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:shadow-xl group-hover:bg-white/95 transition-all duration-500 group-hover:-translate-y-2">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-red-600 p-3 group-hover:shadow-xl transition-all duration-300">
              <Target className="w-full h-full text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
              Our Values
            </h3>

            <div className="space-y-4">
              {[
                "Innovation & Excellence",
                "Integrity & Transparency",
                "Customer-Centric Approach",
                "Continuous Learning",
                "Work-Life Balance"
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group-hover:text-gray-800 transition-colors duration-300"
                  whileHover={{
                    x: 5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Growth Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Subtle border glow */}
          <motion.div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"
          />

          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:shadow-xl group-hover:bg-white/95 transition-all duration-500 group-hover:-translate-y-2">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3 group-hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-full h-full text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Growth Opportunities
            </h3>

            <div className="space-y-4">
              {[
                "Professional Development Budget",
                "Conference & Workshop Access",
                "Mentorship Programs",
                "Cross-Department Projects",
                "Leadership Training"
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group-hover:text-gray-800 transition-colors duration-300"
                  whileHover={{
                    x: 5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{opportunity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Subtle border glow */}
          <motion.div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"
          />

          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:shadow-xl group-hover:bg-white/95 transition-all duration-500 group-hover:-translate-y-2">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 group-hover:shadow-xl transition-all duration-300">
              <Award className="w-full h-full text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Benefits & Perks
            </h3>

            <div className="space-y-4">
              {[
                "Competitive Salary & Equity",
                "Health & Dental Insurance",
                "Flexible PTO Policy",
                "Home Office Stipend",
                "Team Building Events"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group-hover:text-gray-800 transition-colors duration-300"
                  whileHover={{
                    x: 5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Moving glow line after section */}
      <motion.div
        className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent relative overflow-hidden"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-[var(--brand-primary)] to-emerald-500"
          animate={{
            x: ['-200%', '200%'],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  </section>
);

// Open Positions Section
const OpenPositionsSection = ({ onApplyClick }: { onApplyClick: (job: Job | null) => void }) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      <EnhancedBackgroundAnimation intensity="subtle" theme="mixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600">Positions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing team and help build the future of technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 hover:text-[var(--brand-primary)] transition-colors duration-300">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-[var(--brand-primary)] text-white rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-6"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200/50"
                  >
                    <div className="p-8 pt-6">
                      <h4 className="font-bold text-gray-900 mb-4">Requirements:</h4>
                      <ul className="space-y-3 mb-6">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => onApplyClick(job)}
                        className="group relative bg-gradient-to-r from-[var(--brand-primary)] to-red-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Apply for This Position
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* General Application */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--brand-primary)]/10 via-red-500/5 to-purple-500/10 rounded-3xl p-8 border border-[var(--brand-primary)]/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't see the perfect role?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to TechxServe Enterprise.
              </p>
              <Button
                onClick={() => onApplyClick(null)}
                className="group relative bg-gradient-to-r from-[var(--brand-primary)] to-red-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Submit General Application
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Application Form Component
type FormData = { name: string; email: string; phone: string; position: string; experience: string; resume: File | null; coverMessage: string };
const ApplicationForm = ({ isModal = false, selectedJob, onClose = () => {}, onSubmit }: { isModal?: boolean; selectedJob: Job | null; onClose?: () => void; onSubmit?: (data: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: selectedJob?.title || "",
    experience: "",
    resume: null,
    coverMessage: ""
  });

  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.dataTransfer.files[0] }));
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      await onSubmit?.(formData);
      setSubmitStatus({ type: "success", message: "✓ Application submitted! We'll review it and be in touch soon." });
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: selectedJob?.title || "",
        experience: "",
        resume: null,
        coverMessage: "",
      });
    } catch (err) {
      console.error("Career email failed:", err);
      setSubmitStatus({
        type: "error",
        message: (err as Error)?.message || "Something went wrong. Please try again or email us at info@techxserve.com",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center">
            <User className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="border-2 border-gray-200/50 rounded-xl focus:border-[var(--brand-primary)] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="border-2 border-gray-200/50 rounded-xl focus:border-[var(--brand-primary)] transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="border-2 border-gray-200/50 rounded-xl focus:border-[var(--brand-primary)] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position" className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
            Position Interest
          </Label>
          <NativeSelect
            id="position"
            name="position"
            placeholder="Select a position"
            value={formData.position}
            onChange={(v) => setFormData(prev => ({ ...prev, position: v }))}
            options={[
              { value: "General Application (Open Role)", label: "General Application (Open Role)" },
              { value: "Frontend Developer (React / Vue)", label: "Frontend Developer (React / Vue)" },
              { value: "Backend Developer (Node / Python)", label: "Backend Developer (Node / Python)" },
              { value: "Mobile Developer (iOS / Android)", label: "Mobile Developer (iOS / Android)" },
              { value: "DevOps / Cloud Engineer", label: "DevOps / Cloud Engineer" },


              { value: "Product & Management", label: "Product & Management" },

              { value: "Business & Marketing", label: "Business & Marketing" },
              { value: "Content Writer / Copywriter", label: "Content Writer / Copywriter" },
              { value: "Sales Executive / BDR", label: "Sales Executive / BDR" },
              { value: "HR / People Operations", label: "HR / People Operations" },
              { value: "Finance / Accounting", label: "Finance / Accounting" },

            ]}
          />
        </div>
      </div>

      {/* Experience Level */}
      <div className="space-y-4" role="group" aria-labelledby="experience-label">
        <Label id="experience-label" className="flex items-center">
          <GraduationCap className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
          Experience Level
        </Label>
        <RadioGroup
          value={formData.experience}
          onValueChange={(value: string) => setFormData(prev => ({ ...prev, experience: value }))}
          className="flex flex-wrap gap-6"
          aria-labelledby="experience-label"
        >
          {["Junior", "Mid-level", "Senior", "Lead"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={level} />
              <Label htmlFor={level} className="cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <Label htmlFor="resume" className="flex items-center">
          <FileText className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
          Resume / CV
        </Label>
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload resume — drop file here or click to browse"
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 cursor-pointer ${dragActive
              ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/5'
              : 'border-gray-300 hover:border-[var(--brand-primary)] hover:bg-gray-50'
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInputRef.current?.click(); } }}
        >
          <input
            ref={fileInputRef}
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="text-center">
            <motion.div
              animate={{ scale: dragActive ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className={`w-12 h-12 mx-auto mb-4 ${dragActive ? 'text-[var(--brand-primary)]' : 'text-gray-400'
                }`} />
            </motion.div>

            {formData.resume ? (
              <div>
                <p className="text-[var(--brand-primary)] font-semibold mb-2">
                  ✓ {formData.resume.name}
                </p>
                <p className="text-sm text-gray-500">
                  Click to change or drag a new file
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  Drop your resume here or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supports PDF, DOC, DOCX files up to 10MB
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cover Message */}
      <div className="space-y-2">
        <Label htmlFor="cover-message" className="flex items-center">
          <MessageSquare className="w-4 h-4 mr-2 text-[var(--brand-primary)]" />
          Cover Message
        </Label>
        <Textarea
          id="cover-message"
          name="coverMessage"
          rows={6}
          placeholder="Tell us about yourself and why you'd be a great fit for TechxServe Enterprise..."
          value={formData.coverMessage}
          onChange={(e) => setFormData(prev => ({ ...prev, coverMessage: e.target.value }))}
          className="border-2 border-gray-200/50 rounded-xl focus:border-[var(--brand-primary)] transition-all duration-300 resize-none"
        />
      </div>

      {/* Status message */}
      {submitStatus && (
        <div className={`text-center pt-2 font-medium ${submitStatus.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end space-x-4 pt-6">
        {isModal && (
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="px-8 py-3 rounded-xl"
            disabled={submitting}
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          disabled={submitting}
          className="group relative bg-gradient-to-r from-[var(--brand-primary)] to-red-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span className="relative z-10 flex items-center">
            <Zap className="mr-2 w-4 h-4 animate-pulse" />
            {submitting ? "Submitting..." : "Join Our Team"}
            {!submitting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Button>
      </div>
    </form>
  );

  if (isModal) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedJob ? `Apply for ${selectedJob.title}` : 'Submit Application'}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Ready to join the TechxServe Enterprise family? Let's get started!
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {formContent}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <EnhancedBackgroundAnimation intensity="subtle" theme="mixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600">Apply?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the next step in your career journey with TechxServe
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 lg:p-12">
            {formContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Careers Page Component
export default function CareersPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showInlineForm, setShowInlineForm] = useState(false);

  const handleApplyClick = (job: Job | null) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleSubmit = async (formData: FormData) => {
    let resumeUrl = "";
    if (formData.resume) {
      try {
        resumeUrl = await uploadResume(formData.resume);
      } catch (err) {
        console.error("Cloudinary upload failed:", err);
        throw new Error("Resume upload failed. Please try again.");
      }
    }

    const resumeAdminCell = resumeUrl
      ? `<a href="${escapeHtml(resumeUrl)}" style="color:#820507;text-decoration:none;font-weight:500;">📄 ${escapeHtml(formData.resume?.name || "Download Resume")}</a>`
      : `<span style="color:#9ca3af;">Not provided</span>`;

    const adminBody = `
      <h2 style="color:#820507;font-size:20px;margin:0 0 8px;">New Career Application</h2>
      <p style="color:#6b7280;margin:0 0 20px;">Submitted via the Careers page on techxserve.com</p>
      ${summaryTable(`
        ${fieldRow("Full Name", formData.name)}
        ${fieldRow("Email", formData.email)}
        ${fieldRow("Phone", formData.phone)}
        ${fieldRow("Position Interest", formData.position)}
        ${fieldRow("Experience Level", formData.experience)}
        ${rawFieldRow("Resume", resumeAdminCell)}
      `)}
      ${formData.coverMessage ? detailsBlock("Cover Message", formData.coverMessage) : ""}
      <p style="color:#6b7280;font-size:13px;margin:24px 0 0;">Reply directly to this email to respond to ${escapeHtml(formData.name)}.</p>
    `;

    const firstName = (formData.name || "there").split(" ")[0];
    const customerBody = `
      <h2 style="color:#111827;font-size:22px;margin:0 0 6px;font-weight:700;">Thanks for applying, ${escapeHtml(firstName)}!</h2>
      <p style="color:#6b7280;font-size:15px;margin:0 0 18px;">We've received your application.</p>
      <p style="color:#374151;margin:0 0 20px;">Our team will review your application carefully and get back to you soon. We typically respond within <strong style="color:#820507;">5-7 business days</strong>. Here's a summary of what you submitted:</p>
      ${summaryTable(`
        ${fieldRow("Position Interest", formData.position)}
        ${fieldRow("Experience Level", formData.experience)}
        ${rawFieldRow("Resume", resumeUrl ? `<span style="color:#10b981;">✓ Received</span>` : "Not provided")}
      `)}
      ${formData.coverMessage ? detailsBlock("Your Cover Message", formData.coverMessage) : ""}
      <p style="color:#374151;margin:28px 0 0;">In the meantime, feel free to learn more about us at <a href="https://techxserve.com" style="color:#820507;text-decoration:none;font-weight:500;">techxserve.com</a> or reach out at <a href="mailto:info@techxserve.com" style="color:#820507;text-decoration:none;font-weight:500;">info@techxserve.com</a> if you have questions.</p>
      <p style="color:#374151;margin:18px 0 0;">Best of luck,<br><strong>The TechxServe Enterprise Team</strong></p>
    `;

    await sendDualEmails({
      adminSubject: `Career Application: ${formData.position || "General"} — ${formData.name}`,
      adminBodyHtml: adminBody,
      customerEmail: formData.email,
      customerSubject: "We received your application — TechxServe Enterprise",
      customerBodyHtml: customerBody,
    });
  };

  return (
    <div className="min-h-screen">
      <CareersHeroSection />
      <CompanyCultureSection />
      <WhyWorkWithUsSection />
      <OpenPositionsSection onApplyClick={handleApplyClick} />

      {!showModal && (
        <ApplicationForm
          isModal={false}
          selectedJob={null}
          onSubmit={handleSubmit}
        />
      )}

      {/* Modal Form */}
      {showModal && (
        <ApplicationForm
          isModal={true}
          selectedJob={selectedJob}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}