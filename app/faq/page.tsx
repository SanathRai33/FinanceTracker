// app/faq/page.tsx
import SupportLayout from "@/src/layout/support/SupportLayout";
import FAQAccordion from "@/src/components/support/FAQAccordion";

export default function FAQPage() {
  const faqCategories = [
    {
      name: "Account & Security",
      icon: "🔐",
      questions: [
        {
          question: "How do I reset my password?",
          answer: "You can reset your password by clicking 'Forgot Password' on the login page. You'll receive an email with a link to create a new password. If you don't receive the email, check your spam folder."
        },
        {
          question: "Is two-factor authentication available?",
          answer: "Yes, you can enable 2FA in your account settings under the Security tab. We support authenticator apps like Google Authenticator and Authy."
        },
        {
          question: "How do I delete my account?",
          answer: "Go to Settings → Account → Delete Account. Note that this action is permanent and cannot be undone. All your data will be permanently deleted."
        }
      ]
    },
    {
      name: "Features & Usage",
      icon: "🚀",
      questions: [
        {
          question: "How do I connect my bank account?",
          answer: "Navigate to Settings → Connected Accounts and click 'Add Account'. Follow the secure connection process. We use bank-level security and never store your banking credentials."
        },
        {
          question: "Can I export my transaction data?",
          answer: "Yes, you can export your data in CSV or Excel format. Go to Reports → Export Data. You can choose date ranges and specific transaction types to export."
        },
        {
          question: "How does automatic categorization work?",
          answer: "Our AI learns from your transactions and automatically categorizes them. You can train it by manually categorizing transactions, and it will improve over time."
        }
      ]
    },
    {
      name: "Billing & Subscription",
      icon: "💰",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for annual plans. Monthly plans can be canceled at any time, but refunds are not provided for partial months."
        }
      ]
    },
    {
      name: "Technical Issues",
      icon: "🔧",
      questions: [
        {
          question: "The app is loading slowly. What should I do?",
          answer: "Try clearing your browser cache and cookies, or try using a different browser. If the issue persists, check our status page or contact support."
        },
        {
          question: "I'm having trouble with mobile app sync",
          answer: "Make sure both your mobile app and web app are updated to the latest version. Try logging out and back in on both devices to force a sync."
        },
        {
          question: "Why can't I see my recent transactions?",
          answer: "Bank connections may take up to 24 hours to update. If it's been longer, try disconnecting and reconnecting your bank account."
        }
      ]
    }
  ];

  return (
    <SupportLayout
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions"
    >
      <div className="space-y-8">
        {/* Search */}
        <section>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1e1f20] border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {faqCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-all text-center"
              >
                <div className="mb-3 text-2xl">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {category.name}
                </h3>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {category.questions.length} questions
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center mb-6 space-x-3">
                <div className="text-2xl">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {category.name}
                </h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQAccordion
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section>
          <div className="p-8 text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
            <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
              Didn't find what you were looking for?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact Support
              </a>
              <a
                href="/community"
                className="px-6 py-3 font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Ask Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
}