// app/profile/components/ProfileTabs.tsx
"use client";

import { FiUser, FiBell, FiShield, FiCreditCard } from "react-icons/fi";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  const tabs = [
    { id: "profile", label: "Profile", icon: FiUser },
    { id: "notifications", label: "Notifications", icon: FiBell },
    { id: "security", label: "Security", icon: FiShield },
    { id: "billing", label: "Billing", icon: FiCreditCard },
  ];

  return (
    <div className="flex space-x-1 rounded-lg bg-white p-1 shadow-sm border border-gray-200">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Icon size={16} className={isActive ? "text-blue-600" : "text-gray-500"} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}