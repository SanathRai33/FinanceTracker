// app/gdpr/page.tsx
import LegalLayout from "@/src/layout/legal/LegalLayout";

export default function GDPRPage() {
  return (
    <LegalLayout
      title="GDPR Compliance"
      lastUpdated="January 7, 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            General Data Protection Regulation (GDPR)
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We comply with the European Union's General Data Protection Regulation (GDPR), which provides enhanced data protection rights for individuals in the EU/EEA.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Your GDPR Rights
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: "Right to Access",
                description: "You can request a copy of your personal data."
              },
              {
                title: "Right to Rectification",
                description: "You can correct inaccurate personal data."
              },
              {
                title: "Right to Erasure",
                description: "You can request deletion of your data."
              },
              {
                title: "Right to Restriction",
                description: "You can restrict processing of your data."
              },
              {
                title: "Right to Data Portability",
                description: "You can receive your data in a machine-readable format."
              },
              {
                title: "Right to Object",
                description: "You can object to certain types of processing."
              }
            ].map((right, index) => (
              <div key={index} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
                  {right.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Data Processing Principles
          </h2>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li><strong>Lawfulness, fairness, and transparency:</strong> We process data legally and transparently</li>
            <li><strong>Purpose limitation:</strong> We only collect data for specified purposes</li>
            <li><strong>Data minimization:</strong> We only collect necessary data</li>
            <li><strong>Accuracy:</strong> We keep data accurate and up-to-date</li>
            <li><strong>Storage limitation:</strong> We delete data when no longer needed</li>
            <li><strong>Integrity and confidentiality:</strong> We protect data with appropriate security</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Data Transfer Outside EU/EEA
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use standard contractual clauses (SCCs) and other approved mechanisms to ensure adequate protection when transferring data outside the EU/EEA.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Data Protection Officer (DPO)
          </h2>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <p className="text-gray-600 dark:text-gray-300">
              Our Data Protection Officer can be contacted at:
              <br />
              <strong>Email:</strong> sanathrai03@gmail.com
              <br />
              <strong>Address:</strong> [Your Company Address]
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            How to Exercise Your Rights
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Direct Contact</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Email us at privacy@example.com with "GDPR Request" in the subject line.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Account Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Access and download your data directly from your account settings.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Response Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We will respond to all GDPR requests within 30 days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}