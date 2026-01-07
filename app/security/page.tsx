// app/security/page.tsx
import LegalLayout from "@/src/layout/legal/LegalLayout";
import { FiShield, FiLock, FiEye, FiDatabase, FiAlertCircle } from "react-icons/fi";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All financial data is encrypted in transit and at rest using AES-256 encryption."
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Multi-Factor Authentication",
      description: "Optional 2FA using TOTP authenticator apps for enhanced account security."
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and intrusion detection systems."
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Regular Backups",
      description: "Automated daily backups with geo-redundant storage."
    },
    {
      icon: <FiAlertCircle className="w-6 h-6" />,
      title: "Vulnerability Management",
      description: "Regular security audits and penetration testing."
    }
  ];

  return (
    <LegalLayout
      title="Security"
      lastUpdated="January 1, 2024"
    >
      <div className="space-y-6">
        <section className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full dark:bg-green-900/30">
            <FiShield className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Your Security Is Our Priority
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We implement industry-leading security measures to protect your financial data. Our security program is built on multiple layers of protection and continuous improvement.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
            Our Security Features
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "SOC 2 Type II", status: "Certified" },
              { name: "ISO 27001", status: "Compliant" },
              { name: "GDPR", status: "Compliant" },
              { name: "CCPA", status: "Compliant" }
            ].map((cert, index) => (
              <div key={index} className="p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="font-semibold text-gray-800 dark:text-white">{cert.name}</div>
                <div className="mt-1 text-sm text-green-600 dark:text-green-400">{cert.status}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            How You Can Help
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Strong Passwords</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Use unique, complex passwords and consider using a password manager.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Enable 2FA</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Turn on two-factor authentication in your account settings.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Regular Updates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Keep your devices and browsers updated with the latest security patches.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Reporting Security Issues
          </h2>
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-gray-600 dark:text-gray-300">
              If you discover a security vulnerability in our service, please report it to:
              <br />
              <strong className="text-red-600 dark:text-red-400">sanathrai03@gmail.com</strong>
              <br />
              <span className="text-sm">We appreciate responsible disclosure and will respond promptly.</span>
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}