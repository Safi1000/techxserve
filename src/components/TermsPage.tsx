import { motion } from "motion/react";
import { FileText, Mail, MapPin } from "lucide-react";
import EnhancedBackgroundAnimation from "./EnhancedBackgroundAnimation";

export default function TermsPage() {
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
            <FileText className="w-5 h-5 mr-3" />
            <span className="font-semibold">Terms of Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600">Service</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the TechxServe website (techxserve.com), you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of the Website</h2>
            <p className="mb-4">
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site. You must not:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Use the site in any way that violates applicable local, national, or international laws</li>
              <li>Transmit unsolicited commercial communications</li>
              <li>Attempt to gain unauthorized access to any part of the site or its related systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property of TechxServe Enterprise LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services & Pricing</h2>
            <p>
              TechxServe Enterprise LLC reserves the right to modify, suspend, or discontinue any service at any time without notice. Pricing for services is subject to change and will be communicated prior to entering into any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, TechxServe Enterprise LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or our services. Our total liability to you for any claims arising from these terms shall not exceed the amount you paid us in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">For questions about these Terms of Service, please contact us at:</p>
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
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
