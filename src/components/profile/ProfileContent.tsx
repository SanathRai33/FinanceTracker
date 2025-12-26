// app/profile/components/ProfileContent.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FiUser, FiMail, FiCalendar, FiEdit2, FiSave, FiX, FiGlobe } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import ProfileForm from "./ProfileForm";
import ProfileStats from "./ProfileStats";

interface User {
  name?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  currency?: string;
  language?: string;
  createdAt?: string;
}

interface ProfileContentProps {
  user: User | any;
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
  const [editedUser, setEditedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    currency: user?.currency || "INR",
    language: user?.language || "en",
  });

  const handleSave = async () => {
    try {
      // API call would go here
      toast.success("Profile updated successfully");
      setIsEditing(false);
      refetch();
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      currency: user?.currency || "INR",
      language: user?.language || "en",
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 flex flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            <p className="text-gray-600">Update your personal details</p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FiEdit2 size={16} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiSave size={16} />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FiX size={16} />
                Cancel
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6 pt-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-32 w-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-linear-to-br from-blue-500 to-purple-600">
                {user?.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user?.name || "User"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-white text-3xl font-bold">
                    {getUserInitials()}
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {user?.name || "User"}
                </h3>
                <div className="inline-flex items-center gap-1 mt-1 px-2 py-1 border border-green-200 rounded-full text-green-700 text-xs">
                  <MdOutlineVerified className="text-green-500" />
                  Verified Account
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