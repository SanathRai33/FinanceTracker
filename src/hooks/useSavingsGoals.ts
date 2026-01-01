// src/hooks/useSavingsGoals.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useSavingsGoals() {
  return useQuery({
    queryKey: ["goals", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/savings-goals"); // ✅ Fixed path
      return data.goals;
    },
  });
}

// ✅ ADD this missing export
export function useGoals() {
  return useSavingsGoals(); // Alias for backward compatibility
}

// ✅ ADD this missing export
export function useDeleteGoal() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["goals", "delete"],
    mutationFn: async (id: string) => {
      await apiClient.delete(`/savings-goals/${id}`);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["goals"] });
    },
  });
}

export function useAddSavingsGoal() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["goals", "add"],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post("/savings-goals", payload);
      return data.goal;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["goals"] });
    },
  });
}

export function useUpdateSavingsGoal(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["goals", "update", id],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put(`/savings-goals/${id}`, payload);
      return data.goal;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["goals"] });
    },
  });
}

export function useUpdateSavingsProgress(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["goals", "progress", id],
    mutationFn: async (payload: { amountToAdd: number }) => {
      const { data } = await apiClient.patch(`/savings-goals/${id}/progress`, payload);
      return data.goal;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["goals"] });
    },
  });
}
