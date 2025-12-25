// hooks/useSavingsGoals.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useSavingsGoals() {
  return useQuery({
    queryKey: ["goals", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/goals");
      return data.goals;
    },
  });
}

export function useAddSavingsGoal() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["goals", "add"],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post("/goals", payload);
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
      const { data } = await apiClient.put(`/goals/${id}`, payload);
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
      const { data } = await apiClient.patch(`/goals/${id}/progress`, payload);
      return data.goal;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["goals"] });
    },
  });
}
