// app/contact/page.tsx
import SupportLayout from "@/src/layout/support/SupportLayout";
import { FiMail, FiMessageSquare, FiGlobe, FiClock } from "react-icons/fi";

export default function ContactUs() {
  return (
    <SupportLayout
      title="Contact Us"
      subtitle="Get in touch with our support team"
    >
      <div className="space-y-8">
        {/* Contact Cards */}
        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FiMail className="w-5 h-5" />,
                title: "Email",
                value: "support@example.com",
                description: "General inquiries",
                color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              },
              {
                icon: <FiMessageSquare className="w-5 h-5" />,
                title: "Support",
                value: "help@example.com",
                description: "Technical support",
                color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
              },
              {
                icon: <FiGlobe className="w-5 h-5" />,
                title: "Business",
                value: "business@example.com",
                description: "Partnership inquiries",
                color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
              },
              {
                icon: <FiClock className="w-5 h-5" />,
                title: "Response Time",
                value: "Within 24 hours",
                description: "Typically faster",
                color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                <p className="mt-3 font-medium text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <select className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Issue</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className="px-6 py-3 font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Preview */}
        <section>
          <div className="p-8 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                Check our FAQ first
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Many common questions are already answered in our FAQ section.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-[#1e1f20] text-gray-800 dark:text-white font-medium rounded-lg hover:shadow-md transition-all"
              >
                Visit FAQ
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
}