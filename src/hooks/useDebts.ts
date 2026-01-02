// src/hooks/useDebts.ts - CORRECTED PATHS

"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export interface DebtRecord {
  _id: string;
  contactName: string;
  contactEmail?: string;
  contactPhone?: string;
  amount: number;
  direction: "lent" | "borrowed";
  description?: string;
  startDate: string;
  dueDate?: string;
  status: "pending" | "paid" | "overdue";
  amountPaid: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// All debts ✅ FIXED
export function useDebtRecords() {
  return useQuery({
    queryKey: ["debts", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/debt-records"); // ✅ /api/debt-records
      return data.records as DebtRecord[];
    },
  });
}

// Pending debts ✅ FIXED  
export function usePendingDebts() {
  return useQuery({
    queryKey: ["debts", "pending"],
    queryFn: async () => {
      const { data } = await apiClient.get("/debt-records/pending"); // ✅ /api/debt-records/pending
      return data.records as DebtRecord[];
    },
  });
}

// Paid debts ✅ FIXED
export function usePaidDebts() {
  return useQuery({
    queryKey: ["debts", "paid"],
    queryFn: async () => {
      const { data } = await apiClient.get("/debt-records/paid"); // ✅ /api/debt-records/paid
      return data.records as DebtRecord[];
    },
  });
}

// Single debt ✅ FIXED
export function useDebtRecord(id: string | undefined) {
  return useQuery({
    queryKey: ["debts", "detail", id],
    enabled: !!id,
    queryFn: async () => {
      const { data } = await apiClient.get(`/debt-records/${id}`); // ✅ /api/debt-records/:id
      return data.record as DebtRecord;
    },
  });
}

// Create ✅ FIXED
export function useAddDebtRecord() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["debts", "add"],
    mutationFn: async (payload: Partial<DebtRecord>) => {
      const { data } = await apiClient.post("/debt-records", payload); // ✅ /api/debt-records
      return data.record as DebtRecord;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["debts"] });
    },
  });
}

// Update ✅ FIXED
export function useUpdateDebtRecord(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["debts", "update", id],
    mutationFn: async (payload: Partial<DebtRecord>) => {
      const { data } = await apiClient.put(`/debt-records/${id}`, payload); // ✅ /api/debt-records/:id
      return data.record as DebtRecord;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["debts"] });
      qc.invalidateQueries({ queryKey: ["debts", "detail", id] });
    },
  });
}

// Delete ✅ FIXED
export function useDeleteDebtRecord() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["debts", "delete"],
    mutationFn: async (id: string) => {
      await apiClient.delete(`/debt-records/${id}`); // ✅ /api/debt-records/:id
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["debts"] });
    },
  });
}
