// src/hooks/useAuth.ts
"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
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
      const { data } = await apiClient.get<MeResponse>("/auth/me");
      console.log(data)
      return data.data.user;
    },
    staleTime: 5 * 60 * 1000,
  });
}

async function getIdTokenFromFirebase(user: User): Promise<string> {
  return user.getIdToken(true);
}

export function useGoogleLogin() {
  return useMutation({
    mutationKey: ["auth", "google-login"],
    mutationFn: async () => {
      const cred = await signInWithPopup(firebaseAuth, googleProvider);
      const user = cred.user;
      const idToken = await getIdTokenFromFirebase(user);

      const { data } = await apiClient.post("/auth/google", { idToken });
      return data;
    },
  });
}

export function useLogout() {
  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: async () => {
      await apiClient.post("/auth/logout");
      await signOut(firebaseAuth);
    },
  });
}
