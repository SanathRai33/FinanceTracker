// app/components/debt/DebtLoader.tsx
"use client";

import { ReactNode } from "react";

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

function SkeletonButton({ className = "" }: { className?: string }) {
  return <SkeletonText className={`h-10 ${className}`} />;
}

// Skeleton Toolbar Header
function SkeletonToolbarHeader() {
  return (
    <div className="flex flex-col justify-between gap-3 lg:px-20">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div className="space-y-2">
          <SkeletonText className="w-48 h-8" />
          <SkeletonText className="w-64 h-4" />
        </div>
        <SkeletonButton className="w-32 rounded-md" />
      </div>
    </div>
  );
}

// Skeleton Add Debt Form
function SkeletonAddDebtForm() {
  return (
    <div className="flex flex-col w-full gap-2 p-3 mt-3 text-gray-800 bg-white border rounded-md border-slate-200 dark:bg-[#1e1f20] dark:border-slate-700">
      {/* First row of inputs */}
      <div className="flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonText key={index} className="flex-1 h-10 rounded-md" />
        ))}
      </div>
      
      {/* Second row of inputs */}
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonText key={index} className="flex-1 h-10 rounded-md" />
        ))}
        <SkeletonButton className="w-24 rounded-md" />
      </div>
    </div>
  );
}

// Skeleton Debt Card
function SkeletonDebtCard() {
  return (
    <div className="relative overflow-hidden border rounded-xl p-5 bg-linear-to-br from-emerald-50 to-white dark:from-[#1e1f20] dark:to-[#232425] border-emerald-200 dark:border-slate-700">
      {/* Top header */}
      <div className="flex flex-col justify-between gap-4 mb-4 sm:flex-row sm:items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <SkeletonCircle className="w-5 h-5" />
            <SkeletonText className="w-32 h-6" />
          </div>
          
          <div className="flex flex-wrap gap-3 mb-2">
            <div className="flex items-center gap-1.5">
              <SkeletonCircle className="w-4 h-4" />
              <SkeletonText className="w-24 h-3" />
            </div>
            <div className="flex items-center gap-1.5">
              <SkeletonCircle className="w-4 h-4" />
              <SkeletonText className="w-32 h-3" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <SkeletonText className="w-20 h-6 rounded-full" />
          <div className="flex items-center gap-1.5">
            <SkeletonCircle className="w-4 h-4" />
            <SkeletonText className="w-20 h-3" />
          </div>
        </div>
      </div>

      {/* Amount and progress section */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <SkeletonText className="w-32 h-4" />
          <SkeletonText className="w-24 h-7" />
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <SkeletonText className="w-24 h-3" />
            <SkeletonText className="w-20 h-3" />
          </div>
          <SkeletonText className="w-full h-2 rounded-full" />
          
          <div className="flex justify-between text-sm">
            <SkeletonText className="w-12 h-4" />
            <SkeletonText className="w-32 h-4" />
          </div>
        </div>
      </div>

      {/* Due date section */}
      <div className="mb-4">
        <SkeletonText className="w-full h-12 rounded-lg" />
      </div>

      {/* Description section */}
      <div className="p-3 mb-5 border rounded-lg bg-white/50 border-slate-200 dark:bg-[#2c2d2e] dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <SkeletonCircle className="w-4 h-4" />
          <SkeletonText className="w-24 h-3" />
        </div>
        <SkeletonText className="w-full h-4" />
        <SkeletonText className="w-3/4 h-4 mt-1" />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
        <SkeletonButton className="flex-1 rounded-md" />
        <SkeletonButton className="flex-1 rounded-md" />
        <SkeletonButton className="flex-1 rounded-md" />
      </div>

      {/* Last updated */}
      <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-700">
        <SkeletonText className="w-48 h-3 mx-auto" />
      </div>
    </div>
  );
}

// Skeleton Debt Grid
function SkeletonDebtGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-0 lg:grid-cols-2 md:grid-cols-2 lg:px-10 lg:py-2">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonDebtCard key={index} />
      ))}
    </div>
  );
}

// Skeleton Empty State
function SkeletonEmptyState() {
  return (
    <section className="rounded-2xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-100 sm:px-6 sm:py-10 min-h-screen dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <SkeletonText className="w-32 h-4 mb-6" />
      
      <div className="flex flex-col items-center max-w-xl gap-4 mx-auto text-center">
        {/* Icon circle */}
        <SkeletonCircle className="w-14 h-14" />
        
        <div className="space-y-2">
          <SkeletonText className="w-48 h-5 mx-auto" />
          <SkeletonText className="w-64 h-4 mx-auto" />
        </div>
        
        <SkeletonText className="w-48 h-10 rounded-full" />
      </div>
    </section>
  );
}

// Main DebtLoader Component
export default function DebtLoader() {
  const showEmptyState = false; // Set to true to show empty state loader
  const showAddForm = false; // Set to true to show add form
  
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:p-8 space-y-4 min-h-screen">
      {/* Toolbar */}
      <SkeletonToolbarHeader />
      
      {/* Add Form (optional) */}
      {showAddForm && <SkeletonAddDebtForm />}
      
      {/* Loading indicator */}
      <div className="flex items-center gap-2 p-4 bg-white rounded-lg dark:bg-[#1e1f20]">
        <SkeletonCircle className="w-4 h-4" />
        <SkeletonText className="w-32 h-3" />
      </div>
      
      {/* Debt Grid or Empty State */}
      {showEmptyState ? (
        <SkeletonEmptyState />
      ) : (
        <SkeletonDebtGrid count={4} />
      )}
    </div>
  );
}

// Alternative: Detailed loader with stats
export function DebtDetailedLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:p-8 space-y-6 min-h-screen">
      {/* Toolbar with expanded options */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <SkeletonText className="w-48 h-8" />
            <div className="flex gap-2">
              <SkeletonText className="w-64 h-4" />
              <SkeletonText className="w-20 h-4 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <SkeletonButton className="w-32 rounded-md" />
            <SkeletonButton className="rounded-md w-36" />
          </div>
        </div>
        
        {/* Filter bar */}
        <div className="flex gap-4 p-4 bg-white rounded-lg dark:bg-[#1e1f20]">
          <SkeletonText className="flex-1 h-10 rounded-md" />
          <SkeletonText className="flex-1 h-10 rounded-md" />
          <SkeletonText className="w-20 h-10 rounded-md" />
        </div>
      </div>
      
      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-4 bg-white rounded-xl dark:bg-[#1e1f20]">
            <div className="space-y-2">
              <SkeletonText className="w-20 h-3" />
              <SkeletonText className="w-24 h-6" />
              <SkeletonText className="w-16 h-3" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Debt Grid */}
      <SkeletonDebtGrid count={6} />
    </div>
  );
}

// Alternative: Loading with tabs
export function DebtTabsLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:p-8 space-y-6 min-h-screen">
      {/* Header with tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <SkeletonText className="w-48 h-8" />
            <SkeletonText className="w-64 h-4" />
          </div>
          <SkeletonButton className="w-32 rounded-md" />
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
          {["All", "Lent", "Borrowed", "Pending", "Paid", "Overdue"].map((tab, index) => (
            <div key={index} className="pb-2">
              <SkeletonText className="w-20 h-8 rounded-md" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4 border rounded-xl bg-white dark:bg-[#1e1f20] dark:border-slate-700">
            {/* Debt card content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SkeletonCircle className="w-5 h-5" />
                  <SkeletonText className="h-5 w-28" />
                </div>
                <SkeletonText className="w-16 h-6 rounded-full" />
              </div>
              
              {/* Amount */}
              <div>
                <SkeletonText className="w-24 h-3 mb-1" />
                <SkeletonText className="w-32 h-6" />
              </div>
              
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <SkeletonText className="w-20 h-3" />
                  <SkeletonText className="w-16 h-3" />
                </div>
                <SkeletonText className="w-full h-2 rounded-full" />
              </div>
              
              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <SkeletonText className="flex-1 h-8 rounded-md" />
                <SkeletonText className="flex-1 h-8 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple spinner loader
export function DebtSpinnerLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 dark:bg-[#121214]">
      <div className="space-y-4 text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <SkeletonCircle className="w-6 h-6" />
          </div>
        </div>
        <div className="space-y-2">
          <SkeletonText className="w-32 h-4 mx-auto" />
          <SkeletonText className="w-48 h-3 mx-auto" />
        </div>
      </div>
    </div>
  );
}

// Full page loading state
export function DebtLoading() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <DebtLoader />
    </div>
  );
}