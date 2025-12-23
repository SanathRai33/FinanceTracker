// app/components/goals/GoalsEmptyState.tsx

export function GoalsEmptyState() {
    return (
      <section className="rounded-2xl bg-white px-4 py-8 text-center shadow-sm ring-1 ring-slate-100 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
          {/* Target icon circle */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            {/* replace with an actual icon if you like */}
            <div className="h-7 w-7 rounded-full border border-slate-300" />
          </div>
  
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-800">
              No Savings Goals Yet
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">
              Start tracking your savings goals to achieve your financial dreams!
            </p>
          </div>
  
          <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-sm">
            <span className="text-base leading-none">+</span>
            <span>Add Your First Goal</span>
          </button>
        </div>
      </section>
    );
  }
  