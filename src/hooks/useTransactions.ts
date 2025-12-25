// hooks/useTransactions.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/transactions");
      return data.transactions;
    },
  });
}

export function useTransactionById(id?: string) {
  return useQuery({
    queryKey: ["transactions", id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/transactions/${id}`);
      return data.transaction;
    },
    enabled: !!id,
  });
}

export function useAddTransaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["transactions", "add"],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post("/transactions", payload);
      return data.transaction;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["transactions"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      qc.invalidateQueries({ queryKey: ["analytics"] });
    },
  });
}

export function useUpdateTransaction(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["transactions", "update", id],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put(`/transactions/${id}`, payload);
      return data.transaction;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["transactions"] });
      qc.invalidateQueries({ queryKey: ["transactions", id] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      qc.invalidateQueries({ queryKey: ["analytics"] });
    },
  });
}

export function useDeleteTransaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["transactions", "delete"],
    mutationFn: async (id: string) => {
      await apiClient.delete(`/transactions/${id}`);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["transactions"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      qc.invalidateQueries({ queryKey: ["analytics"] });
    },
  });
}

// extra analytics

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: async () => {
      const { data } = await apiClient.get("/transactions/dashboard-stats");
      return data;
    },
  });
}

export function useAnalyticsData() {
  return useQuery({
    queryKey: ["analytics", "transactions"],
    queryFn: async () => {
      const { data } = await apiClient.get("/transactions/analytics");
      return data;
    },
  });
}
