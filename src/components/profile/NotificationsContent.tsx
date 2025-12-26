// app/profile/components/NotificationsContent.tsx
"use client";

import { useState } from "react";

export default function NotificationsContent() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    transactionAlerts: true,
    weeklyReports: true,
    marketingEmails: false,
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Notification Preferences</h2>
        <p className="text-gray-600 mb-6">Choose how you want to be notified</p>
        
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900 block">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <p className="text-sm text-gray-500">
                  {key.includes('email') ? 'Receive notifications via email' :
                   key.includes('push') ? 'Get push notifications on your device' :
                   key.includes('transaction') ? 'Alerts for all transactions' :
                   key.includes('weekly') ? 'Weekly summary reports' :
                   'Marketing and promotional emails'}
                </p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [key]: !value })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}