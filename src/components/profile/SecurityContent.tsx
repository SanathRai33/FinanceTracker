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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Security Settings</h2>
        <p className="text-gray-600 mb-6">Manage your account security</p>
        
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900 block">
                Two-Factor Authentication
              </label>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <button
              onClick={() => setSecurity({ ...security, twoFactorAuth: !security.twoFactorAuth })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
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
              <label className="text-sm font-medium text-gray-900 block">
                Biometric Login
              </label>
              <p className="text-sm text-gray-500">
                Use fingerprint or face ID to login
              </p>
            </div>
            <button
              onClick={() => setSecurity({ ...security, biometricLogin: !security.biometricLogin })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.biometricLogin ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                security.biometricLogin ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Session Timeout */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">Session Timeout</label>
            <select
              className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={security.sessionTimeout}
              onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-50 rounded-lg transition-colors">
              <FiLock size={16} />
              Change Password
            </button>
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <FiTrash2 size={16} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}