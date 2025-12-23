// app/components/debt/DebtToolbar.tsx

export function DebtToolbar() {
    return (
      <div className="mb-3 flex flex-col items-start justify-between gap-3 text-xs sm:mb-4 sm:flex-row sm:items-center sm:text-sm">
        <h1 className="font-semibold text-slate-800 lg:text-[28px] md:text-sm text-sm sm:text-sm">
          Debt Tracker
        </h1>
  
        <button className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">
          <span className="text-base leading-none">+</span>
          <span>Add Debt Record</span>
        </button>
      </div>
    );
  }
  