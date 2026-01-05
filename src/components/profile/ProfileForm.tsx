// app/profile/components/ProfileForm.tsx
"use client";

import {
  FiUser,
  FiMail,
  FiCalendar,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi";
import { TbCurrencyRupee } from "react-icons/tb";

interface ProfileFormProps {
  user: any;
  editedUser: any;
  setEditedUser: (user: any) => void;
  isEditing: boolean;
  formatDate: (date?: string) => string;
}

export default function ProfileForm({
  user,
  editedUser,
  setEditedUser,
  isEditing,
  formatDate,
}: ProfileFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          {isEditing ? (
            <input
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
              <FiUser className="text-gray-400" />
              <span className="text-gray-700">{user?.name || "Not set"}</span>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          {isEditing ? (
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
              <FiMail className="text-gray-400" />
              <span className="text-gray-700">{user?.email || "Not set"}</span>
            </div>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          {isEditing ? (
            <input
              value={editedUser.phone}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
              <span className="text-gray-400">
                <FiSmartphone />
              </span>
              <span className="text-gray-700">{user?.phoneNumber || "Not set"}</span>
            </div>
          )}
        </div>

        {/* Member Since */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Member Since
          </label>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
            <FiCalendar className="text-gray-400" />
            <span className="text-gray-700">{formatDate(user?.createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-gray-900 mb-4">Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Currency */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Default Currency
            </label>
            {isEditing ? (
              <select
                value={editedUser.currency}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, currency: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="INR">Indian Rupee (₹)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">British Pound (£)</option>
              </select>
            ) : (
              <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
                <TbCurrencyRupee className="text-gray-400" />
                <span className="text-gray-700"> { user?.currency } (₹)</span>
              </div>
            )}
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Language
            </label>
            {isEditing ? (
              <select
                value={editedUser.language}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, language: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            ) : (
              <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50">
                <FiGlobe className="text-gray-400" />
                <span className="text-gray-700"> { user?.locale} </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isEditing ? (
        <div className="text-gray-600 text-sm mt-2 indent-1">
          <span>
            * Profile image is managed through Google. To change your image, visit
            <a
              href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline pl-2 font-medium"
            >
              Google Account settings
            </a>
          </span>
        </div>
      ) : null}
    </div>
  );
}
