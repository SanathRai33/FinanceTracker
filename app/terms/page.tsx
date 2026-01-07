// app/terms/page.tsx
import LegalLayout from "@/src/layout/legal/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="January 7, 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing and using our financial management services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Account Responsibilities
          </h2>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li>You must be at least 18 years old to use our services</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must provide accurate and complete information</li>
            <li>You agree to notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Service Description
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our service provides financial management tools including expense tracking, budgeting, goal setting, and financial insights. We are not a financial advisor and do not provide investment advice.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            User Content
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You retain ownership of all financial data you input into our service. By using our services, you grant us a license to process and analyze your data to provide the services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Prohibited Activities
          </h2>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li>Attempting to hack or compromise our systems</li>
            <li>Using the service for illegal activities</li>
            <li>Sharing your account with others</li>
            <li>Reverse engineering our software</li>
            <li>Uploading malicious content</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Termination
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may terminate or suspend your account at our sole discretion for violations of these terms. You may terminate your account at any time through your account settings.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}