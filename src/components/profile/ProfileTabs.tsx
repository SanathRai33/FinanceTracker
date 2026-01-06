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
    <div className="flex p-1 space-x-1 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#1e1f20] dark:border-gray-700">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-50 dark:bg-[#121214] text-blue-700 dark:text-blue-200"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <Icon size={16} className={isActive ? "text-blue-600 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}