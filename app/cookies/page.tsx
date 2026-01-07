// app/cookies/page.tsx
import LegalLayout from "@/src/layout/legal/LegalLayout";
import CookieTable from "@/src/components/legal/CookieTable";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      purpose: "Required for basic site functionality",
      duration: "Session",
      examples: "Authentication, security, session management"
    },
    {
      name: "Functional Cookies",
      purpose: "Remember preferences and settings",
      duration: "Up to 1 year",
      examples: "Language preference, theme settings"
    },
    {
      name: "Analytics Cookies",
      purpose: "Understand how users interact with our service",
      duration: "Up to 2 years",
      examples: "Google Analytics, Mixpanel"
    },
    {
      name: "Advertising Cookies",
      purpose: "Deliver relevant advertisements",
      duration: "Up to 1 year",
      examples: "Facebook Pixel, Google Ads"
    }
  ];

  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="January 7, 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            How We Use Cookies
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            We use cookies for several purposes:
          </p>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li><strong>Authentication:</strong> Keep you logged in across sessions</li>
            <li><strong>Preferences:</strong> Remember your language and theme settings</li>
            <li><strong>Security:</strong> Detect and prevent fraudulent activity</li>
            <li><strong>Analytics:</strong> Understand how you use our service to improve it</li>
            <li><strong>Performance:</strong> Optimize site speed and responsiveness</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Types of Cookies We Use
          </h2>
          <CookieTable cookies={cookieTypes} />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Managing Cookies
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Browser Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Opting Out</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                You can opt out of non-essential cookies through our cookie consent banner. Note that disabling essential cookies may affect the functionality of our service.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">Do Not Track</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We respect Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
            Third-Party Cookies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some third-party services we use (like analytics providers) may place their own cookies on your device. We recommend you review their privacy policies to understand how they use cookies.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}