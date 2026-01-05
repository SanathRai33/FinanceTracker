// app/profile/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/src/hooks/useUser";
import { useLogout } from "@/src/hooks/useAuth";
import { toast } from "sonner";
import ProfileLoading from "@/src/components/profile/ProfileLoading";
import ProfileHeader from "@/src/components/profile/ProfileHeader";
import ProfileTabs from "@/src/components/profile/ProfileTabs";
import ProfileContent from "@/src/components/profile/ProfileContent";
import NotificationsContent from "@/src/components/profile/NotificationsContent";
import SecurityContent from "@/src/components/profile/SecurityContent";
import BillingContent from "@/src/components/profile/BillingContent";

export default function ProfilePage() {
  const router = useRouter();
  const { data: user, isLoading, refetch } = useCurrentUser();
  const { mutate: logout } = useLogout();

  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast.error(error.message || "Failed to logout");
    }
  };

  if (isLoading) {
    return <ProfileLoading />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="h-16 w-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Profile</h2>
          <p className="text-gray-600">Please wait while we load your profile...</p>
        </div>
      </div>
    );
  }

  const getUserInitials = () => {
    if (!user?.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />
        
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === "profile" && (
            <ProfileContent
              user={user}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              getUserInitials={getUserInitials}
              formatDate={formatDate}
              refetch={refetch}
            />
          )}
          
          {activeTab === "notifications" && (
            <NotificationsContent />
          )}
          
          {activeTab === "security" && (
            <SecurityContent />
          )}
          
          {activeTab === "billing" && (
            <BillingContent />
          )}
        </div>

        {/* Logout Button */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Account ID: <span className="font-mono text-gray-700">{user._id}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}