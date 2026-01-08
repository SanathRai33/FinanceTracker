// app/components/goals/GoalsLoader.tsx
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

// Skeleton Toolbar
function SkeletonToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <SkeletonText className="w-48 h-8" />
        <SkeletonText className="w-64 h-4" />
      </div>
      <SkeletonText className="w-32 h-10 rounded-md" />
    </div>
  );
}

// Skeleton Goal Card
function SkeletonGoalCard() {
  return (
    <div className="p-6 border rounded-xl bg-linear-to-r from-white to-gray-50 dark:from-[#1e1f20] dark:to-[#232425] border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <SkeletonCircle className="w-9 h-9" />
          <div className="space-y-2">
            <SkeletonText className="w-32 h-5" />
            <SkeletonText className="w-24 h-3" />
          </div>
        </div>
        <SkeletonCircle className="w-12 h-12" />
      </div>

      {/* Progress Bar */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between">
          <SkeletonText className="w-24 h-3" />
          <SkeletonText className="w-12 h-3" />
        </div>
        <SkeletonText className="w-full h-3" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <SkeletonText className="w-32 h-8 rounded-md" />
        <SkeletonText className="w-24 h-8 rounded-md" />
        <SkeletonText className="w-20 h-8 rounded-md" />
      </div>

      {/* Status Badge */}
      <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
        <SkeletonText className="w-24 h-6 rounded-full" />
      </div>
    </div>
  );
}

// Skeleton Goals Grid
function SkeletonGoalsGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonGoalCard key={index} />
      ))}
    </div>
  );
}

// Skeleton Empty State
function SkeletonEmptyState() {
  return (
    <div className="py-20 text-center">
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 shadow-lg rounded-2xl bg-linear-to-r from-emerald-400 to-blue-500">
        <SkeletonCircle className="w-12 h-12" />
      </div>
      <div className="mb-8 space-y-3">
        <SkeletonText className="w-48 mx-auto h-7" />
        <SkeletonText className="w-64 h-4 mx-auto" />
        <SkeletonText className="h-4 mx-auto w-80" />
      </div>
      <SkeletonText className="w-48 h-12 mx-auto rounded-xl" />
    </div>
  );
}

// Skeleton Modal
function SkeletonModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="max-w-md w-full p-0 text-black bg-gray-50 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700 rounded-lg">
        {/* Modal Header */}
        <div className="p-6 pb-2 space-y-2">
          <SkeletonText className="w-40 h-6" />
        </div>
        
        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Goal Name */}
          <div className="space-y-2">
            <SkeletonText className="w-20 h-4" />
            <SkeletonText className="w-full h-10 rounded-md" />
          </div>

          {/* Category and Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <SkeletonText className="w-20 h-4" />
              <SkeletonText className="w-full h-10 rounded-md" />
            </div>
            <div className="space-y-2">
              <SkeletonText className="w-16 h-4" />
              <SkeletonText className="w-full h-10 rounded-md" />
            </div>
          </div>

          {/* Target Amount and Date */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <SkeletonText className="w-24 h-4" />
              <SkeletonText className="w-full h-10 rounded-md" />
            </div>
            <div className="space-y-2">
              <SkeletonText className="w-24 h-4" />
              <SkeletonText className="w-full h-10 rounded-md" />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <SkeletonText className="w-32 h-4" />
            <SkeletonText className="w-full h-10 rounded-md" />
          </div>

          {/* Submit Button */}
          <SkeletonText className="w-full h-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}

// Main GoalsLoader Component
export default function GoalsLoader() {
  const showEmptyState = false; // Set to true to show empty state loader
  
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        {/* Toolbar */}
        <SkeletonToolbar />
        
        {/* Goals Grid or Empty State */}
        {showEmptyState ? (
          <SkeletonEmptyState />
        ) : (
          <SkeletonGoalsGrid count={6} />
        )}
      </div>
    </div>
  );
}

// Alternative: Goals Loading with Modal
export function GoalsWithModalLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        {/* Toolbar */}
        <SkeletonToolbar />
        
        {/* Goals Grid */}
        <SkeletonGoalsGrid count={6} />
        
        {/* Modal (overlay) */}
        <SkeletonModal />
      </div>
    </div>
  );
}

// Alternative: Detailed loader with progress variations
export function GoalsDetailedLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <SkeletonText className="w-48 h-8" />
            <div className="flex gap-2">
              <SkeletonText className="w-64 h-4" />
              <SkeletonText className="w-16 h-4 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <SkeletonText className="w-24 h-10 rounded-md" />
            <SkeletonText className="h-10 rounded-md w-28" />
          </div>
        </div>
        
        {/* Filter Bar */}
        <div className="flex gap-4 p-4 bg-white dark:bg-[#1e1f20] rounded-xl">
          <SkeletonText className="flex-1 h-10 rounded-lg" />
          <SkeletonText className="flex-1 h-10 rounded-lg" />
          <SkeletonText className="w-20 h-10 rounded-lg" />
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="p-4 bg-white dark:bg-[#1e1f20] rounded-xl">
              <div className="space-y-2">
                <SkeletonText className="w-20 h-3" />
                <SkeletonText className="w-32 h-6" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Goals Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-6 border rounded-xl bg-linear-to-r from-white to-gray-50 dark:from-[#1e1f20] dark:to-[#232425] border-slate-200 dark:border-slate-700">
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <SkeletonCircle className="w-10 h-10" />
                <div className="flex-1 space-y-1">
                  <SkeletonText className="w-3/4 h-5" />
                  <SkeletonText className="w-1/2 h-3" />
                </div>
                <SkeletonText className="w-16 h-8 rounded-full" />
              </div>
              
              {/* Progress Section */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <SkeletonText className="w-24 h-3" />
                    <SkeletonText className="w-20 h-4" />
                  </div>
                  <div className="space-y-1 text-right">
                    <SkeletonText className="w-16 h-3 ml-auto" />
                    <SkeletonText className="w-12 h-4 ml-auto" />
                  </div>
                </div>
                <SkeletonText className="w-full h-2 rounded-full" />
                <div className="flex justify-between text-sm">
                  <SkeletonText className="w-16 h-3" />
                  <SkeletonText className="w-20 h-3" />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <SkeletonText className="flex-1 h-8 rounded-md" />
                <SkeletonText className="flex-1 h-8 rounded-md" />
              </div>
              
              {/* Timeline */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <SkeletonText className="w-24 h-3" />
                  <SkeletonText className="w-20 h-3" />
                </div>
                <div className="mt-2">
                  <SkeletonText className="w-full h-1 rounded-full" />
                  <div className="flex justify-between mt-1">
                    <SkeletonCircle className="w-2 h-2" />
                    <SkeletonCircle className="w-2 h-2" />
                    <SkeletonCircle className="w-2 h-2" />
                    <SkeletonCircle className="w-2 h-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Optional: Simple spinner loader
export function GoalsSpinnerLoader() {
  return (
    <div className="bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 rounded-full border-emerald-200 dark:border-emerald-900 border-t-emerald-600 dark:border-t-emerald-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <SkeletonCircle className="w-6 h-6 bg-emerald-500" />
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

// Optional: Full page loading state
export function GoalsLoading() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <GoalsLoader />
    </div>
  );
}