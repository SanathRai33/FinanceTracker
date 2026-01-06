// app/components/debt/DebtEmptyState.tsx

export function DebtEmptyState() {
    return (
      <section className="rounded-2xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-100 sm:px-6 sm:py-10 min-h-screen dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <h2 className="mb-6 text-xs font-semibold text-slate-700 sm:text-sm dark:text-slate-400">
          Debt Records
        </h2>
  
        <div className="flex flex-col items-center max-w-xl gap-4 mx-auto text-center ">
          {/* Icon circle */}
          <div className="flex items-center justify-center rounded-full h-14 w-14 bg-slate-50 text-slate-400 dark:bg-[#2c2d2e] dark:text-slate-500">
            {/* simple placeholder icon; swap for react-icons if you like */}
            <div className="flex items-center justify-center w-8 h-8 border rounded-full border-slate-300 dark:border-slate-600">
              <span className="text-lg">👥</span>
            </div>
          </div>
  
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              No Debt Records Yet
            </p>
            <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
              Track money you&apos;ve lent to others.
            </p>
          </div>
  
          <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600">
            <span className="text-base leading-none">+</span>
            <span>Add Your First Record</span>
          </button>
        </div>
      </section>
    );
  }
  