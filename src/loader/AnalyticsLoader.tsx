// app/components/analytics/AnalyticsLoader.tsx
"use client";

import { ReactNode } from "react";

// Skeleton Components
function SkeletonText({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`} style={style} />
  );
}

function SkeletonCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 ${className}`} />
  );
}

// Skeleton AnalyticsStatCard
function SkeletonAnalyticsStatCard() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700 ring-slate-100 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 space-y-2">
          <SkeletonText className="w-24 h-3" />
          <SkeletonText className="w-32 h-6" />
        </div>
        <SkeletonCircle className="h-9 w-9" />
      </div>
    </section>
  );
}

// Skeleton Chart Container
function SkeletonChart({ height = "h-56", title = true }: { height?: string; title?: boolean }) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      {title && (
        <div className="mb-6 space-y-2">
          <SkeletonText className="w-40 h-4" />
          <SkeletonText className="w-64 h-3" />
        </div>
      )}
      <div className={`flex items-center justify-center ${height} bg-gray-50 dark:bg-gray-800 rounded-lg`}>
        <div className="text-center">
          <SkeletonCircle className="w-16 h-16 mx-auto mb-3" />
          <SkeletonText className="w-32 h-4 mx-auto" />
        </div>
      </div>
    </section>
  );
}

// Skeleton Page Header
function SkeletonPageHeader() {
  return (
    <div className="mb-8 space-y-2">
      <SkeletonText className="w-32 h-8" />
      <SkeletonText className="w-64 h-4" />
    </div>
  );
}

// Skeleton Coming Soon Chart
function SkeletonComingSoon() {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-center h-64 p-8 bg-white border-2 border-dashed rounded-xl border-slate-200 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <div className="space-y-3 text-center">
          <SkeletonCircle className="w-16 h-16 mx-auto" />
          <SkeletonText className="w-48 h-4 mx-auto" />
        </div>
      </div>
    </div>
  );
}

// Main AnalyticsLoader Component
export default function AnalyticsLoader() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <SkeletonPageHeader />

        {/* Stats Cards Grid */}
        <div className="grid gap-6 mb-8 lg:grid-cols-2 xl:grid-cols-4">
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
        </div>

        {/* Charts Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Balance Over Time */}
          <SkeletonChart height="h-56 sm:h-64" />
          
          {/* Expense & Savings Breakdown */}
          <SkeletonChart height="h-40 sm:h-48" />
          
          {/* Need vs Want Breakdown */}
          <SkeletonChart height="h-40 sm:h-48" />
          
          {/* Coming Soon Chart */}
          <SkeletonComingSoon />
        </div>
      </div>
    </div>
  );
}

// Optional: Detailed chart skeleton with grid lines
function SkeletonDetailedChart() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <div className="mb-6 space-y-2">
        <SkeletonText className="w-40 h-4" />
        <SkeletonText className="w-64 h-3" />
      </div>
      
      {/* Chart Area with Grid Lines */}
      <div className="h-56 p-4 rounded-lg sm:h-64 bg-gray-50 dark:bg-gray-800">
        {/* Y-axis labels */}
        <div className="flex h-full">
          <div className="flex flex-col justify-between mr-4">
            {[0, 1, 2, 3].map((i) => (
              <SkeletonText key={i} className="w-12 h-3" />
            ))}
          </div>
          
          {/* Chart with grid lines */}
          <div className="relative flex-1">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-full h-px bg-gray-200 dark:bg-gray-700" />
              ))}
            </div>
            
            {/* Bars/Line */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center w-12">
                  <SkeletonText className="w-8 mb-2" style={{ height: `${Math.random() * 80 + 20}%` }} />
                  <SkeletonText className="w-10 h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Optional: Pie chart skeleton
function SkeletonPieChart() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <div className="mb-6 space-y-2">
        <SkeletonText className="w-40 h-4" />
        <SkeletonText className="w-64 h-3" />
      </div>
      
      <div className="flex flex-col items-center h-40 sm:h-48">
        <div className="relative flex items-center justify-center mb-6">
          {/* Pie chart circle */}
          <SkeletonCircle className="w-32 h-32" />
          
          {/* Center label */}
          <div className="absolute text-center">
            <SkeletonText className="w-16 h-4 mx-auto mb-1" />
            <SkeletonText className="w-12 h-3 mx-auto" />
          </div>
        </div>
        
        {/* Legend */}
        <div className="grid w-full grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <SkeletonCircle className="w-3 h-3 mr-2" />
              <SkeletonText className="flex-1 h-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Alternative loader with more detailed charts
export function AnalyticsDetailedLoader() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <SkeletonPageHeader />

        {/* Stats Cards */}
        <div className="grid gap-6 mb-8 lg:grid-cols-2 xl:grid-cols-4">
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
          <SkeletonAnalyticsStatCard />
        </div>

        {/* Detailed Charts Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          <SkeletonDetailedChart />
          <SkeletonPieChart />
          <SkeletonPieChart />
          <SkeletonComingSoon />
        </div>
      </div>
    </div>
  );
}

// Optional: Full page loading state
export function AnalyticsLoadingState() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <AnalyticsLoader />
    </div>
  );
}

// Optional: Minimal loader for quick loading
export function AnalyticsMinimalLoader() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Simple loading indicator */}
        <div className="flex flex-col items-center justify-center h-96">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <SkeletonCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 space-y-2 text-center">
            <SkeletonText className="w-32 h-4" />
            <SkeletonText className="w-48 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}