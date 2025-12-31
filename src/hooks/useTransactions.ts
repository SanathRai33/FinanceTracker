// src/hooks/useTransactions.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/transactions");
      return data.transactions || data;
    },
  });
}

export function useTransactionsByMonth(year: number, month: number) {
  return useQuery({
    queryKey: ["transactions", "month", year, month],
    queryFn: async () => {
      const { data } = await apiClient.get(`/transactions/by-month?year=${year}&month=${month}`);
      return data.transactions;
    },
  });
}

export function useTransactionsByType(type: "income" | "expense" | "transfer" | "all") {
  if (type === "all") return useTransactions();
  
  return useQuery({
    queryKey: ["transactions", "type", type],
    queryFn: async () => {
      const { data } = await apiClient.get(`/transactions/by-type/${type}`);
      return data.transactions;
    },
  });
}

export function useTransactionsByCategory(categoryId: string) {
  return useQuery({
    queryKey: ["transactions", "category", categoryId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/transactions/by-category/${categoryId}`);
      return data.transactions;
    },
    enabled: !!categoryId,
  });
}

export function useRecurringTransactions() {
  return useQuery({
    queryKey: ["transactions", "recurring"],
    queryFn: async () => {
      const { data } = await apiClient.get("/transactions/recurring");
      return data.transactions;
    },
  });
}

// Mutations (no change needed)
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

// src/hooks/useTransactions.ts
export function useDeleteTransaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["transactions", "delete"],
    mutationFn: async (id: string) => {
      await apiClient.delete(`/transactions/${id}`);
    },
    // ✅ Optimistic update: remove from ALL transaction lists instantly
    onMutate: async (id: string) => {
      // Cancel outgoing refetches
      await qc.cancelQueries({ queryKey: ["transactions"] });
      
      // Snapshot previous data
      const previousTransactions: any[] = qc.getQueryData(["transactions", "all"]) || [];
      const previousDashboard: any[] = qc.getQueryData(["dashboard", "stats"]) || [];
      
      // Optimistically remove from lists
      qc.setQueryData(["transactions", "all"], (old: any[] = []) => 
        old.filter((tx: any) => tx._id !== id)
      );
      
      // Invalidate dashboard stats (will refetch)
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      
      return { previousTransactions, previousDashboard };
    },
    onError: (err, id, context) => {
      // Rollback on error
      if (context?.previousTransactions) {
        qc.setQueryData(["transactions", "all"], context.previousTransactions);
      }
    },
    onSettled: () => {
      // Always refetch fresh data
      qc.invalidateQueries({ queryKey: ["transactions"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      qc.invalidateQueries({ queryKey: ["analytics"] });
    },
  });
}


// Dashboard & Analytics (already wired)
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
