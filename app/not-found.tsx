// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="lg:min-h-160 min-h-screen bg-blue-50 text-slate-900 dark:bg-[#121214] dark:text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-1 dark:ring-slate-700">
          {/* Code + label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
              Finance Tracker
            </span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Error 404
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-2 text-2xl font-semibold md:text-3xl text-slate-900 dark:text-slate-100">
            Page not found
          </h1>

          {/* Description */}
          <p className="mb-6 text-sm md:text-base text-slate-600 dark:text-slate-400">
            The page you are looking for does not exist or has been moved.  
            Check the URL, or go back to your financial overview.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Go to Dashboard
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/60"
            >
              Go back
            </button>
          </div>

          {/* Subtle footer */}
          <div className="flex items-center justify-between pt-4 mt-6 text-xs border-t border-slate-100 dark:border-slate-800 text-slate-400">
            <span>Financial Tracker</span>
            <span>Keep your money on track</span>
          </div>
        </div>
      </div>
    </main>
  );
}
