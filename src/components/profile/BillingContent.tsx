// app/profile/components/BillingContent.tsx
"use client";

export default function BillingContent() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200">Billing Information</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Manage your subscription and billing</p>
        
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg dark:border-slate-700">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-200">Free Plan</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Basic features with limited transactions</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-full dark:text-gray-300 dark:border-gray-700">
              Current Plan
            </span>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Free Plan */}
            <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Free</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For beginners</p>
              <div className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-200">
                ₹0<span className="text-sm font-normal text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Up to 100 transactions/month
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Basic analytics
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  1 savings goal
                </li>
              </ul>
              <button className="w-full py-2 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg cursor-not-allowed hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" disabled>
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative p-6 border-2 border-blue-500 rounded-xl">
              <div className="absolute transform -translate-x-1/2 -top-2 left-1/2">
                <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                  Popular
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Pro</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Most popular choice</p>
              <div className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-200">
                ₹299<span className="text-sm font-normal text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Unlimited transactions
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Multiple savings goals
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Debt tracking
                </li>
              </ul>
              <button className="w-full py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                Upgrade to Pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="p-6 border-2 border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Business</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For teams</p>
              <div className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-200">
                ₹999<span className="text-sm font-normal text-gray-500 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Custom reporting
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-2 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  AI support
                </li>
              </ul>
              <button className="w-full py-2 font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}