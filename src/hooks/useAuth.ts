// hooks/useAuth.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const { data } = await apiClient.get("/auth/me");
      return data.user;
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: async (payload: { name: string; email: string; password: string }) => {
      const { data } = await apiClient.post("/auth/register", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: async (payload: { email: string; password: string }) => {
      const { data } = await apiClient.post("/auth/login", payload);
      // store token
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.token);
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: async () => {
      await apiClient.post("/auth/logout");
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
      }
    },
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["auth"] });
    },
  });
}
