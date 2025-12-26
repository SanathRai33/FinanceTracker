// app/components/debt/DebtEmptyState.tsx

export function DebtEmptyState() {
    return (
      <section className="rounded-2xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-100 sm:px-6 sm:py-10">
        <h2 className="mb-6 text-xs font-semibold text-slate-700 sm:text-sm">
          Debt Records
        </h2>
  
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          {/* Icon circle */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            {/* simple placeholder icon; swap for react-icons if you like */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
              <span className="text-lg">👥</span>
            </div>
          </div>
  
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-800">
              No Debt Records Yet
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">
              Track money you&apos;ve lent to others.
            </p>
          </div>
  
          <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer">
            <span className="text-base leading-none">+</span>
            <span>Add Your First Record</span>
          </button>
        </div>
      </section>
    );
  }
  