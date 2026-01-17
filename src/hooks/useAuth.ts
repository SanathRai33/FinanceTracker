// src/hooks/useAuth.ts
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { firebaseAuth, googleProvider } from "@/src/lib/firebaseClient";
import apiClient from "@/src/lib/apiClient";

type MeResponse = {
  success: boolean;
  data: {
    user: { id: string; email: string; name?: string; avatarUrl?: string; phone?: string; currency?: string, language?: string, createdAt?: string } | null;
  };
};

export function useCurrentUser() {
  return useQuery<MeResponse["data"]["user"]>({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get<MeResponse>("/auth/me");
        console.log("Current user data:", data.data.user);
        return data.data.user;
      } catch (error) {
        console.error("Failed to fetch current user:", error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: 2, // Retry twice on failure
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

async function getIdTokenFromFirebase(user: User): Promise<string> {
  return user.getIdToken(true);
}

export function useGoogleLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["auth", "google-login"],
    mutationFn: async () => {
      const cred = await signInWithPopup(firebaseAuth, googleProvider);
      const user = cred.user;
      const idToken = await getIdTokenFromFirebase(user);

      const { data } = await apiClient.post("/auth/google", { idToken });
      
      // Store the token in localStorage for subsequent requests
      if (data.success) {
        localStorage.setItem("access_token", idToken);
      }
      
      return data;
    },
    onSuccess: () => {
      // Refetch user data after successful login
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
    onError: (error) => {
      console.error("Login error:", error);
      // Clear any stored token on failure
      localStorage.removeItem("access_token");
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: async () => {
      try {
        await apiClient.post("/auth/logout");
        await signOut(firebaseAuth);
      } finally {
        // Always clear local storage, even if request fails
        localStorage.removeItem("access_token");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}
