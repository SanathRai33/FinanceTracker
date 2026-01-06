// app/profile/components/SecurityContent.tsx
"use client";

import { useState } from "react";
import { FiLock, FiTrash2 } from "react-icons/fi";

export default function SecurityContent() {
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    biometricLogin: true,
    sessionTimeout: "30",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200">Security Settings</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">Manage your account security</p>
        
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Two-Factor Authentication
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Add an extra layer of security to your account
              </p>
            </div>
            <button
              onClick={() => setSecurity({ ...security, twoFactorAuth: !security.twoFactorAuth })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                security.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Biometric Login */}
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Biometric Login
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use fingerprint or face ID to login
              </p>
            </div>
            <button
              onClick={() => setSecurity({ ...security, biometricLogin: !security.biometricLogin })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.biometricLogin ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                security.biometricLogin ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Session Timeout */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black dark:text-white">Session Timeout</label>
            <select
              className="w-full px-3 py-2 text-gray-800 border dark:bg-[#1e1f20] dark:border-gray-600 border-gray-300 rounded-lg dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-700 focus:border-transparent"
              value={security.sessionTimeout}
              onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center w-full gap-2 px-4 py-2 text-left text-black transition-colors rounded-lg hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:bg-black/10">
              <FiLock size={16} />
              Change Password
            </button>
            <button className="flex items-center w-full gap-2 px-4 py-2 text-left text-red-600 transition-colors rounded-lg dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/10">
              <FiTrash2 size={16} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}