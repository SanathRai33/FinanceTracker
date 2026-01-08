// app/components/transactions/TransactionLoader.tsx
"use client";

import { ReactNode } from "react";

// Card Component matching your theme
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

// Skeleton Table Row
function SkeletonTableRow({ columns = 10 }: { columns?: number }) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      {Array.from({ length: columns }).map((_, idx) => (
        <td key={idx} className="px-6 py-4">
          <div className="flex items-center justify-center">
            <SkeletonText className="w-3/4 h-4" />
          </div>
        </td>
      ))}
    </tr>
  );
}

// Skeleton Filter Bar (matching TransactionsFilters)
function SkeletonFilterBar() {
  return (
    <Card className="mb-6 ring-1 ring-slate-200 dark:ring-slate-700">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="flex-1">
            <SkeletonText className="w-16 h-4 mb-2" />
            <SkeletonText className="w-full h-10 rounded-lg" />
          </div>
        ))}
        <div className="flex gap-2">
          <SkeletonText className="w-24 h-10 rounded-lg" />
        </div>
      </div>
    </Card>
  );
}

// Skeleton Header Section
function SkeletonHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="space-y-2">
        <SkeletonText className="w-48 h-8" />
        <SkeletonText className="w-32 h-4" />
      </div>
      <div>
        <SkeletonText className="w-40 h-10 rounded-md" />
      </div>
    </div>
  );
}

// Skeleton Export Buttons (matching TransactionsTable export section)
function SkeletonExportButtons() {
  return (
    <div className="flex justify-end gap-3 p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <SkeletonText className="w-40 h-10 rounded-lg" />
      <SkeletonText className="w-40 h-10 rounded-lg" />
    </div>
  );
}

// Skeleton Table Header
function SkeletonTableHeader() {
  const headers = ["Date", "Type", "Description", "Amount", "Method", "Recurring", "Need/Want", "Notes", "Balance", "Actions"];
  
  return (
    <thead>
      <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        {headers.map((header, idx) => (
          <th key={idx} className="px-6 py-4">
            <SkeletonText className="w-20 h-4 mx-auto" />
          </th>
        ))}
      </tr>
    </thead>
  );
}

// Skeleton Table Body
function SkeletonTableBody({ rows = 5 }: { rows?: number }) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <SkeletonTableRow key={rowIdx} />
      ))}
    </tbody>
  );
}

// Skeleton Summary Stats
function SkeletonSummaryStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <SkeletonText className="w-32 h-4 mb-2" />
          <SkeletonText className="w-24 h-8" />
        </div>
      ))}
    </div>
  );
}

// Main TransactionLoader Component
export default function TransactionLoader() {
  return (
    <div className="p-6 space-y-6 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] min-h-screen">
      {/* Header */}
      <SkeletonHeader />
      
      {/* Filter Bar */}
      <SkeletonFilterBar />
      
      {/* Export Buttons */}
      <div className="space-y-4">
        <SkeletonExportButtons />
        
        {/* Table Container */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <table className="w-full">
            <SkeletonTableHeader />
            <SkeletonTableBody rows={5} />
          </table>
        </div>
        
        {/* Summary Stats */}
        <SkeletonSummaryStats />
      </div>
    </div>
  );
}

// Optional: Loading overlay for edit modal
export function TransactionEditLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <div className="space-y-4">
          {/* Modal Header */}
          <div className="space-y-2">
            <SkeletonText className="w-40 h-6" />
            <SkeletonText className="w-64 h-4" />
          </div>
          
          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <SkeletonText className="w-24 h-4 mb-2" />
              <SkeletonText className="w-full h-10 rounded-lg" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <SkeletonText className="w-16 h-4 mb-2" />
                <SkeletonText className="w-full h-10 rounded-lg" />
              </div>
              <div>
                <SkeletonText className="w-16 h-4 mb-2" />
                <SkeletonText className="w-full h-10 rounded-lg" />
              </div>
            </div>
            
            <div>
              <SkeletonText className="w-16 h-4 mb-2" />
              <SkeletonText className="w-full h-24 rounded-lg" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <SkeletonText className="w-24 h-10 rounded-lg" />
            <SkeletonText className="w-32 h-10 rounded-lg" />
          </div>
        </div>
      </Card>
    </div>
  );
}

// Optional: Full page loading state
export function TransactionsLoadingState() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <TransactionLoader />
    </div>
  );
}

// Optional: Empty state skeleton (for when there are no transactions)
export function EmptyTransactionsLoader() {
  return (
    <div className="py-12 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 mb-4">
          <SkeletonCircle className="w-16 h-16" />
        </div>
        <SkeletonText className="w-64 h-6 mb-2" />
        <SkeletonText className="h-4 mb-6 w-96" />
        <div className="flex justify-center gap-4">
          <SkeletonText className="w-40 h-10 rounded-lg" />
          <SkeletonText className="w-40 h-10 rounded-lg" />
        </div>
      </div>
    </div>
  );
}