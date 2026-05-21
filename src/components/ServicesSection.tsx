import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Code, Smartphone, Globe, Database, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import EnhancedBackgroundAnimation from "./EnhancedBackgroundAnimation";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    description: "Tailored applications built with cutting-edge technologies to meet your unique business requirements.",
    color: "from-blue-500 to-purple-600",
    hoverColor: "from-blue-500/20 to-purple-600/20",
    accentColor: "blue-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile solutions that engage users across iOS and Android platforms.",
    color: "from-green-500 to-teal-600",
    hoverColor: "from-green-500/20 to-teal-600/20",
    accentColor: "green-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "Responsive, scalable web applications that deliver exceptional user experiences across all devices.",
    color: "from-orange-500 to-red-600",
    hoverColor: "from-orange-500/20 to-red-600/20",
    accentColor: "orange-500"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Robust cloud infrastructure and migration services that scale with your business growth.",
    color: "from-purple-500 to-pink-600",
    hoverColor: "from-purple-500/20 to-pink-600/20",
    accentColor: "purple-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Strategic technology consulting to modernize your operations and drive innovation.",
    color: "from-yellow-500 to-orange-600",
    hoverColor: "from-yellow-500/20 to-orange-600/20",
    accentColor: "yellow-500"
  }
];

// Enhanced floating decorative shapes
const FloatingDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Morphing cross shape */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-12 h-12 border-2 border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10"
        style={{ clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)' }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 0.9, 1.2, 1],
          opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating arrow shape */}
      <motion.div
        className="absolute bottom-1/3 right-1/5 w-16 h-16 border-2 border-gray-300/30 bg-gray-200/15"
        style={{ clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)' }}
        animate={{
          x: [0, 40, -20, 10, 0],
          y: [0, -25, 15, -10, 0],
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulsating oval */}
      <motion.div
        className="absolute top-2/3 left-1/3 w-20 h-12 border-2 border-[var(--brand-primary)]/25 bg-[var(--brand-primary)]/8 rounded-full"
        animate={{
          scaleX: [1, 1.4, 1],
          scaleY: [1, 0.7, 1],
          rotate: [0, 180, 360],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Multi-pointed star */}
      <motion.div
        className="absolute top-1/6 right-1/3 w-14 h-14 border-2 border-blue-300/30 bg-blue-200/15"
        style={{ clipPath: 'polygon(50% 0%, 63% 27%, 94% 35%, 73% 56%, 82% 89%, 50% 74%, 18% 89%, 27% 56%, 6% 35%, 37% 27%)' }}
        animate={{
          rotate: [0, 72, 144, 216, 288, 360],
          scale: [1, 1.4, 1.1, 1.3, 1],
          opacity: [0.3, 0.7, 0.5, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating chevron */}
      <motion.div
        className="absolute bottom-1/6 left-1/4 w-10 h-10 border-2 border-green-300/40 bg-green-200/20"
        style={{ clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)' }}
        animate={{
          y: [0, -30, 15, -20, 0],
          rotate: [0, 60, 120, 180, 240, 300, 360],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Animation System */}
      <EnhancedBackgroundAnimation intensity="medium" theme="technology" />

      {/* Floating decorative shapes */}
      <FloatingDecorations />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header with Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Subtle background element */}
          <motion.div
            className="absolute inset-0 -mx-8 rounded-3xl opacity-[0.02] overflow-hidden"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0JTIwZGlnaXRhbHxlbnwxfHx8fDE3NTYwNzQyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology innovation abstract"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-10">
            <motion.span 
              className="text-[var(--brand-primary)] uppercase tracking-wider text-sm font-medium relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="absolute -inset-2 bg-[var(--brand-primary)]/10 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative">What We Do</span>
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-medium text-gray-900 mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our 
              <motion.span 
                className="text-[var(--brand-primary)] relative inline-block ml-3"
                animate={{
                  textShadow: [
                    '0 0 0 rgba(130, 5, 7, 0)',
                    '0 0 20px rgba(130, 5, 7, 0.4)',
                    '0 0 0 rgba(130, 5, 7, 0)'
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Expertise
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We deliver comprehensive technology solutions that drive growth and innovation across industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white relative overflow-hidden group-hover:scale-105">
                {/* Unique gradient overlay for each service */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Unique color wash on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-tr ${service.hoverColor} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Unique accent border on hover */}
                <motion.div
                  className={`absolute inset-0 border-2 border-${service.accentColor} opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-500`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <CardContent className="p-8 relative z-10">
                  {/* Enhanced icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 relative overflow-hidden`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.15 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                      }}
                    />
                    <span className="relative z-10">{service.icon}</span>
                  </motion.div>

                  {/* Content with unique hover color */}
                  <motion.h3 
                    className={`text-xl font-medium text-gray-900 mb-4 group-hover:text-${service.accentColor} transition-colors duration-500`}
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Enhanced learn more link with unique color */}
                  <motion.div
                    className={`flex items-center text-${service.accentColor} font-medium cursor-pointer group-hover:text-${service.accentColor} transition-colors duration-500 group/link`}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="mr-2">Learn More</span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  </motion.div>
                </CardContent>

                {/* Enhanced decorative corner */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${service.color} opacity-15 group-hover:opacity-30 transition-opacity duration-700`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Additional floating element */}
                <motion.div
                  className="absolute bottom-4 left-4 w-3 h-3 bg-[var(--brand-primary)]/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to transform your business with our expertise?
          </motion.p>
          <motion.button
            className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white px-10 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 relative overflow-hidden group"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary-light)] to-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10">Get Started Today</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}