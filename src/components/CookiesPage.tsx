import { motion } from "motion/react";
import { Cookie, Mail, MapPin } from "lucide-react";
import EnhancedBackgroundAnimation from "./EnhancedBackgroundAnimation";

export default function CookiesPage() {
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
            <Cookie className="w-5 h-5 mr-3" />
            <span className="font-semibold">Cookie Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-red-600">Policy</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember your preferences, and provide information to website owners about how visitors use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">TechxServe Enterprise LLC uses cookies to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Ensure the website functions correctly (essential cookies)</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze how visitors use our website to improve performance</li>
              <li>Deliver relevant content and understand the effectiveness of our communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p>
                  These are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or filling in forms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p>
                  These help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p>
                  These allow the website to provide enhanced functionality and personalization based on your interactions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p>
              We may use third-party services such as analytics providers that place cookies on your device on our behalf. These third parties have their own privacy policies and we have no control over their cookies. We recommend reviewing the privacy policies of any third-party services you interact with.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p className="mb-4">
              You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or to be alerted when cookies are being sent. Please note that disabling cookies may affect the functionality of our website.
            </p>
            <p>
              For more information on managing cookies, visit{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary)] hover:underline">
                www.allaboutcookies.org
              </a>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">If you have questions about our use of cookies, please contact us at:</p>
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
