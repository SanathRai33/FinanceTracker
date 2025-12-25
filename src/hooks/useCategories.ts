// hooks/useCategories.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useCategories(type?: string) {
  return useQuery({
    queryKey: ["categories", type || "all"],
    queryFn: async () => {
      const url = type ? `/categories/type/${type}` : "/categories";
      const { data } = await apiClient.get(url);
      return data.categories;
    },
  });
}

export function useAddCategory() {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ["categories", "add"],
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post("/categories", payload);
      return data.category;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
