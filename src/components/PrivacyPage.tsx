import { motion } from "motion/react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import EnhancedBackgroundAnimation from "./EnhancedBackgroundAnimation";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      <EnhancedBackgroundAnimation intensity="subtle" theme="mixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />

      <div className="container mx-auto px-6 py-24 pt-32 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)]/15 to-purple-500/15 text-[var(--brand-primary)] rounded-full mb-8 backdrop-blur-sm border border-[var(--brand-primary)]/30 shadow-lg">
            <Shield className="w-5 h-5 mr-3" />
            <span className="font-semibold">Privacy Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600">Policy</span>
          </h1>
          <p className="text-gray-500">Last updated: April 16, 2025</p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 lg:p-12 space-y-10 text-gray-700 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or apply for a position. This may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>
            <p>
              We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">TechxServe Enterprise LLC uses the information we collect to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, marketing communications, and promotional materials (you may opt out at any time)</li>
              <li>Process job applications</li>
              <li>Improve and optimize our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
            </p>
            <p>
              We may also disclose your information when required by law or to protect the rights, property, or safety of TechxServe Enterprise LLC, our clients, or others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete the personal information we hold about you. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at <a href="mailto:info@techxserve.com" className="text-[var(--brand-primary)] hover:underline">info@techxserve.com</a>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">TechxServe Enterprise LLC</p>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] mt-0.5 flex-shrink-0" />
                <span>30 N Gould St Ste N, Sheridan, WY 82801</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0" />
                <a href="mailto:info@techxserve.com" className="hover:text-[var(--brand-primary)] transition-colors">info@techxserve.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0" />
                <a href="tel:+13072939151" className="hover:text-[var(--brand-primary)] transition-colors">+1 (307) 293-9151</a>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
