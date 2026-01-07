// app/privacy/page.tsx
import LegalLayout from "@/src/layout/legal/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="January 1, 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial management services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Information We Collect
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200">Personal Information</h3>
            <ul className="pl-5 space-y-2 text-gray-600 list-disc dark:text-gray-300">
              <li>Name and contact details (email, phone number)</li>
              <li>Account credentials and authentication data</li>
              <li>Financial transaction data you choose to share</li>
              <li>Device and browser information</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use the information we collect to:
          </p>
          <ul className="pl-5 mt-3 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li>Provide and maintain our services</li>
            <li>Process transactions and generate financial insights</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates and offers</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Your Rights
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have the right to:
          </p>
          <ul className="pl-5 mt-3 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <div className="p-4 mt-8 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Contact:</strong> For privacy-related questions, email us at sanathrai03@gmail.com
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}