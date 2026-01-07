// app/support/page.tsx
import SupportLayout from "@/src/layout/support/SupportLayout";
import { FiSearch, FiBook, FiMessageSquare, FiVideo, FiUsers, FiHelpCircle } from "react-icons/fi";

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <FiBook className="w-5 h-5" />,
      title: "Getting Started",
      description: "Learn how to set up your account and basic features",
      count: "12 articles",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FiMessageSquare className="w-5 h-5" />,
      title: "Account & Settings",
      description: "Manage your profile, preferences, and security",
      count: "18 articles",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: <FiVideo className="w-5 h-5" />,
      title: "Features Guide",
      description: "Detailed guides for all features and tools",
      count: "25 articles",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: "Billing & Subscription",
      description: "Manage your subscription and payment methods",
      count: "8 articles",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <FiHelpCircle className="w-5 h-5" />,
      title: "Troubleshooting",
      description: "Fix common issues and errors",
      count: "15 articles",
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
    }
  ];

  const popularArticles = [
    "How to connect your bank account",
    "Setting up monthly budgets",
    "Understanding spending categories",
    "Exporting your transaction history",
    "Two-factor authentication setup",
    "Resetting your password"
  ];

  return (
    <SupportLayout
      title="Help Center"
      subtitle="Find answers and learn how to get the most out of our service"
    >
      <div className="space-y-8">
        {/* Search Section */}
        <section>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1e1f20] border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              Try searching for "budgets", "transactions", or "settings"
            </p>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="group p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      {category.count}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Popular Articles
          </h2>
          <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-3 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    {article}
                  </span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Need More Help?
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              href="/contact"
              className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-blue-100 rounded-full dark:bg-blue-900/30">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Email Support</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">We respond within 24 hours</p>
            </a>

            <a
              href="#"
              className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-green-100 rounded-full dark:bg-green-900/30">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Live Chat</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Available 9 AM - 6 PM IST</p>
            </a>

            <a
              href="/community"
              className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-purple-100 rounded-full dark:bg-purple-900/30">
                <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Community</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Get help from other users</p>
            </a>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
}