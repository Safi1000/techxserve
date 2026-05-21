import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight
} from "lucide-react";
const txsLogo = "/logo.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const quickLinks = [
  { name: "Home", page: "home" },
  { name: "About Us", page: "about" },
  { name: "Services", page: "services" },
  { name: "Products", page: "products" },
  { name: "Blog", page: "blog" },
  { name: "Careers", page: "careers" },
  { name: "Contact", page: "contact" }
];

const serviceLinks = [
  { name: "Custom Software Development", page: "services" },
  { name: "Mobile App Development", page: "services" },
  { name: "Web Development", page: "services" },
  { name: "Cloud Solutions", page: "services" },
  { name: "Digital Transformation", page: "services" }
];

export default function Footer({ setCurrentPage }: { setCurrentPage?: (page: string) => void } = {}) {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your digital transformation goals and drive innovation in your organization.
            </p>
            <Button
              size="lg"
              className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 transform hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <ImageWithFallback
                    src={txsLogo}
                    alt="TXS Logo"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <div className="text-2xl font-medium">
                  Tech<span className="text-[var(--brand-primary)]">x</span>Serve
                </div>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through innovative technology solutions. We deliver excellence in every project, driving growth and success for our clients.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[var(--brand-primary)]" />
                  <span>30 N Gould St Ste N, Sheridan, WY 82801</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[var(--brand-primary)]" />
                  <a href="tel:+13072939151" className="hover:text-[var(--brand-primary)] transition-colors duration-300">+1 (307) 293-9151</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
                  <a href="mailto:info@techxserve.com" className="hover:text-[var(--brand-primary)] transition-colors duration-300">info@techxserve.com</a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => setCurrentPage?.(link.page)}
                      className="text-gray-300 hover:text-[var(--brand-primary)] transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => setCurrentPage?.(service.page)}
                      className="text-gray-300 hover:text-[var(--brand-primary)] transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">Stay Connected</h3>
              
              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-gray-300">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                  />
                  <Button
                    size="sm"
                    className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] px-4"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-gray-300">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/techxserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-[var(--brand-primary)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://twitter.com/techxserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-[var(--brand-primary)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 TechxServe Enterprise LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => setCurrentPage?.("privacy")}
                className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setCurrentPage?.("terms")}
                className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setCurrentPage?.("cookies")}
                className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}