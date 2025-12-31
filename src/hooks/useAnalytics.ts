// Add to existing useAnalytics.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/src/lib/apiClient";

export function useBalanceOverTime(year: number = new Date().getFullYear()) {
    return useQuery({
      queryKey: ["analytics", "balance", year],
      queryFn: async () => {
        const { data } = await apiClient.get(`/analytics/balance-over-time?year=${year}`);
        console.log(data)
        return data.balanceOverTime;
      },
    });
  }
  
  export function useExpenseSavingsBreakdown() {
    return useQuery({
      queryKey: ["analytics", "expense-savings"],
      queryFn: async () => {
        const { data } = await apiClient.get("/analytics/expense-savings");
        return data;
      },
    });
  }
  
  export function useNeedWantBreakdown() {
    return useQuery({
      queryKey: ["analytics", "need-want"],
      queryFn: async () => {
        const { data } = await apiClient.get("/analytics/need-want");
        return data.needWantBreakdown;
      },
    });
  }
  
  export function useAnalyticsStats() {
    return useQuery({
      queryKey: ["analytics", "stats"],
      queryFn: async () => {
        const { data } = await apiClient.get("/analytics/stats");
        return data.analyticsStats;
      },
    });
  }
  