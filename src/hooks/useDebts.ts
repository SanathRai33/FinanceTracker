// hooks/useDebts.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useDebtRecords() {
  return useQuery({
    queryKey: ["debts", "all"],
    queryFn: async () => {
      const { data } = await apiClient.get("/debts");
      return data.records;
    },
  });
}

export function useAddDebtRecord() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["debts", "add"],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post("/debts", payload);
      return data.record;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["debts"] });
    },
  });
}
