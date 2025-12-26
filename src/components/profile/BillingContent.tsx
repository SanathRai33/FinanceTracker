// app/profile/components/BillingContent.tsx
"use client";

export default function BillingContent() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Billing Information</h2>
        <p className="text-gray-600 mb-6">Manage your subscription and billing</p>
        
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
            <div>
              <h4 className="font-semibold text-gray-900">Free Plan</h4>
              <p className="text-sm text-gray-500">Basic features with limited transactions</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-full">
              Current Plan
            </span>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Free Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900">Free</h3>
              <p className="text-gray-500 text-sm mb-4">For beginners</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ₹0<span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Up to 100 transactions/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Basic analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  1 savings goal
                </li>
              </ul>
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-not-allowed">
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-500 rounded-xl p-6 relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                  Popular
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
              <p className="text-gray-500 text-sm mb-4">Most popular choice</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ₹299<span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Unlimited transactions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Multiple savings goals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Debt tracking
                </li>
              </ul>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Upgrade to Pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900">Business</h3>
              <p className="text-gray-500 text-sm mb-4">For teams</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ₹999<span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Custom reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  AI support
                </li>
              </ul>
              <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}