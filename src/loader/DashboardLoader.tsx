// app/components/dashboard/DashboardLoader.tsx
"use client";

import { ReactNode } from "react";

// Card Component (same as your existing Card.tsx)
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg bg-white dark:bg-[#1e1f20] dark:text-[#94A3B8] p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// Skeleton Components
function SkeletonText({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`} />
  );
}

function SkeletonCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 ${className}`} />
  );
}

// Skeleton StatCard
function SkeletonStatCard() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 space-y-1">
          <SkeletonText className="w-16 h-3" />
          <SkeletonText className="w-24 h-6" />
        </div>
        <SkeletonCircle className="h-9 w-9" />
      </div>
    </Card>
  );
}

// Skeleton OverviewHeader
function SkeletonOverviewHeader() {
  return (
    <Card className="text-white bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-600">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <SkeletonText className="w-48 h-6" />
          <SkeletonText className="w-32 h-4" />
        </div>
        <SkeletonText className="w-64 h-4" />
      </div>
    </Card>
  );
}

// Skeleton QuickActions
function SkeletonQuickActions() {
  return (
    <Card>
      <div className="space-y-3">
        <div className="space-y-2">
          <SkeletonText className="w-32 h-4" />
          <SkeletonText className="w-48 h-3" />
        </div>
        
        <div className="space-y-2">
          <SkeletonText className="w-full h-10 rounded-full" />
          <SkeletonText className="w-full h-10 rounded-full" />
          <SkeletonText className="w-full h-10 rounded-full" />
        </div>
      </div>
    </Card>
  );
}

// Skeleton IncomeDistribution
function SkeletonIncomeDistribution() {
  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <SkeletonText className="w-2 h-8" />
          <SkeletonText className="w-40 h-6" />
          <div className="ml-auto">
            <SkeletonText className="w-24 h-4" />
          </div>
        </div>
        
        <div className="space-y-3">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <SkeletonCircle className="w-3 h-3" />
                <SkeletonText className="w-24 h-4" />
              </div>
              <div className="space-y-1 text-right">
                <SkeletonText className="w-16 h-4" />
                <SkeletonText className="w-12 h-3 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// Skeleton RecentTransactions
function SkeletonRecentTransactions() {
  return (
    <Card>
      <div className="space-y-3">
        <div className="space-y-1">
          <SkeletonText className="w-40 h-4" />
          <SkeletonText className="w-32 h-3" />
        </div>
        
        <div className="space-y-3">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <div className="flex-1 space-y-1">
                <SkeletonText className="h-4 w-36" />
                <SkeletonText className="w-24 h-3" />
              </div>
              <SkeletonText className="w-16 h-5" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// Main DashboardLoader Component
export default function DashboardLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        {/* Overview Header Skeleton */}
        <SkeletonOverviewHeader />

        {/* Stat Cards Skeleton Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <SkeletonStatCard />
          <SkeletonStatCard />
          <SkeletonStatCard />
          <SkeletonStatCard />
          <SkeletonStatCard />
        </div>

        {/* Middle Section Grid Skeleton */}
        <div className="grid gap-3 lg:grid-cols-2">
          <SkeletonQuickActions />
          <SkeletonIncomeDistribution />
        </div>

        {/* Recent Transactions Skeleton */}
        <SkeletonRecentTransactions />
      </div>
    </div>
  );
}

// Optional: Standalone Loading Component (for use in page.tsx)
export function DashboardLoadingState() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <DashboardLoader />
    </div>
  );
}