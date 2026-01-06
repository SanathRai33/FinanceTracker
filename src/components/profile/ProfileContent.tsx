// app/profile/components/ProfileContent.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FiUser, FiMail, FiCalendar, FiEdit2, FiSave, FiX, FiGlobe, FiSmartphone } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { useUpdateUserProfile } from "@/src/hooks/useUser";
import ProfileForm from "./ProfileForm";
import ProfileStats from "./ProfileStats";

interface User {
  _id: string;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  currency: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  subscription?: {
    plan: string;
    status: string;
  };
}

interface ProfileContentProps {
  user: User | null;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  getUserInitials: () => string;
  formatDate: (date?: string) => string;
  refetch: () => void;
}

export default function ProfileContent({
  user,
  isEditing,
  setIsEditing,
  getUserInitials,
  formatDate,
  refetch,
}: ProfileContentProps) {
  const updateProfile = useUpdateUserProfile();
  
  const [editedUser, setEditedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
    currency: user?.currency || "INR",
    language: user?.locale?.split("-")[0] || "en", // Extract language from locale
  });

  const handleSave = async () => {
    try {
      // Prepare payload for API
      const payload = {
        name: editedUser.name,
        phoneNumber: editedUser.phone,
        currency: editedUser.currency,
        locale: editedUser.language === "hi" ? "hi-IN" : editedUser.language + "-IN",
      };

      await updateProfile.mutateAsync(payload);
      
      toast.success("Profile updated successfully");
      setIsEditing(false);
      refetch();
    } catch (error: any) {
      console.error("Update profile error:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phoneNumber || "",
      currency: user?.currency || "INR",
      language: user?.locale?.split("-")[0] || "en",
    });
    setIsEditing(false);
  };

  // Update form when user data changes
  useState(() => {
    if (user) {
      setEditedUser({
        name: user.name || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        currency: user.currency || "INR",
        language: user.locale?.split("-")[0] || "en",
      });
    }
  });

  if (!user) {
    return (
      <div className="space-y-6">
        <div className="p-8 text-center bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Loading user profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 shadow-sm dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700 rounded-xl ">
        <div className="flex flex-row items-center justify-between p-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h2>
            <p className="text-gray-600 dark:text-gray-400">Update your personal details</p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors border border-gray-300 rounded-lg dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              disabled={updateProfile.isPending}
            >
              <FiEdit2 size={16} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={updateProfile.isPending}
                className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updateProfile.isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent" />
                    Saving...
                  </>
                ) : (
                  <>
                    <FiSave size={16} />
                    Save Changes
                  </>
                )}
              </button>
              <button
                onClick={handleCancel}
                disabled={updateProfile.isPending}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors border border-gray-300 rounded-lg dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                <FiX size={16} />
                Cancel
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6 pt-0">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 overflow-hidden border-4 border-white rounded-full shadow-lg bg-linear-to-br from-blue-500 to-purple-600">
                {user?.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user?.name || "User"}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`h-full w-full flex items-center justify-center text-white text-3xl font-bold ${user?.avatarUrl ? 'hidden' : ''}`}>
                  {getUserInitials()}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {user?.name || "User"}
                </h3>
                <div className="inline-flex items-center gap-1 px-2 py-1 mt-1 text-xs text-green-700 border border-green-200 rounded-full dark:text-green-300 dark:border-green-700 dark:bg-black/20">
                  <MdOutlineVerified className="text-green-500" />
                  {user?.subscription?.plan === "free" ? "Free Account" : "Verified Account"}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1">
              <ProfileForm
                user={user}
                editedUser={editedUser}
                setEditedUser={setEditedUser}
                isEditing={isEditing}
                formatDate={formatDate}
              />
            </div>
          </div>
        </div>
      </div>

      <ProfileStats />
    </div>
  );
}