// src/hooks/useUser.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

// ✅ User interface (unchanged)
export interface User {
  _id: string;
  firebaseUid?: string;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: string;
  currency: string;
  locale: string;
  timezone?: string;
  numberFormat?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  };
  subscription?: {
    plan: string;
    status: string;
    currentPeriodEnd?: string;
    cancelAtPeriodEnd?: boolean;
  };
  notifications?: {
    email: {
      transactionAlerts: boolean;
      weeklyReports: boolean;
      monthlySummaries: boolean;
      budgetAlerts: boolean;
      securityAlerts: boolean;
      marketing: boolean;
    };
    push: {
      transactionAlerts: boolean;
      budgetAlerts: boolean;
      goalReminders: boolean;
    };
    sms: {
      securityAlerts: boolean;
      importantUpdates: boolean;
    };
  };
  security?: {
    twoFactorEnabled: boolean;
    twoFactorMethod?: string;
    loginDevices?: Array<{
      deviceId: string;
      deviceName: string;
      lastAccessed: string;
      ipAddress: string;
      userAgent: string;
    }>;
  };
  role?: string;
  accountStatus?: string;
  createdAt: string;
  updatedAt: string;
}

// ✅ FIXED: Get current user - CORRECT PATH
export function useCurrentUser() {
  return useQuery({
    queryKey: ["user", "current"],
    queryFn: async () => {
      const { data } = await apiClient.get("/users/me");
      return data.user as User;
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

// ✅ FIXED: Update user profile
export function useUpdateUserProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user", "update"],
    mutationFn: async (payload: Partial<User>) => {
      const { data } = await apiClient.put("/users/me", payload);
      return data.user as User;
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", "current"], updatedUser);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: any) => {
      console.error("Update user error:", error.response?.data || error.message);
      throw error;
    },
  });
}

// ✅ FIXED: Update notifications
export function useUpdateNotifications() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user", "notifications"],
    mutationFn: async (notifications: User["notifications"]) => {
      const { data } = await apiClient.put("/users/me/notifications", { notifications });
      return data.user as User;
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", "current"], updatedUser);
    },
  });
}

// ✅ FIXED: Update security
export function useUpdateSecuritySettings() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user", "security"],
    mutationFn: async (security: User["security"]) => {
      const { data } = await apiClient.put("/users/me/security", { security });
      return data.user as User;
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", "current"], updatedUser);
    },
  });
}

// ✅ FIXED: Delete account
export function useDeleteAccount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user", "delete"],
    mutationFn: async () => {
      await apiClient.delete("/users/me");
    },
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      queryClient.removeQueries({ queryKey: ["transactions"] });
      queryClient.removeQueries({ queryKey: ["debts"] });
      queryClient.removeQueries({ queryKey: ["goals"] });
    },
  });
}

// ✅ FIXED: Sync user (first login)
export function useSyncUser() {
  return useMutation({
    mutationKey: ["user", "sync"],
    mutationFn: async (userData: {
      email: string;
      name?: string;
      avatarUrl?: string;
      phoneNumber?: string;
      signupSource?: string;
      os?: string;
      device?: string;
    }) => {
      const { data } = await apiClient.post("/users/sync", userData);
      return data.user as User;
    },
  });
}
