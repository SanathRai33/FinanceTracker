// app/components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        {/* Left section */}
        <div className="space-y-1">
          <p className="font-medium text-slate-700">
            FinanceTracker
          </p>
          <p className="max-w-md">
            Track expenses, savings goals, and debt in one clean dashboard.
          </p>
          <p className="text-[11px]">
            © {year} FinanceTracker. All rights reserved.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-wrap items-center gap-4 sm:justify-end">
          <div className="flex gap-3">
            <Link
              href="/privacy"
              className="transition-colors hover:text-blue-600"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-blue-600"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="transition-colors hover:text-blue-600"
            >
              Support
            </Link>
          </div>

          <p className="text-[11px] sm:text-xs">
            Built for better money decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
