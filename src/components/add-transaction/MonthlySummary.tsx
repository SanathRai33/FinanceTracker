// app/components/add-transaction/MonthlySummary.tsx

type SummaryItem = {
    label: string;
    amount: string;
    colorClasses: string;
  };
  
  const items: SummaryItem[] = [
    {
      label: "Income",
      amount: "₹0",
      colorClasses: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Fixed Expenses",
      amount: "₹0",
      colorClasses: "bg-rose-50 text-rose-600",
    },
    {
      label: "Variable Expenses",
      amount: "₹0",
      colorClasses: "bg-amber-50 text-amber-600",
    },
    {
      label: "Savings",
      amount: "₹0",
      colorClasses: "bg-indigo-50 text-indigo-600",
    },
  ];
  
  export function MonthlySummary() {
    return (
      <section className="block p-4 mb-1 font-medium bg-white shadow-sm rounded-2xl ring-1 ring-slate-100 sm:p-5 text-slate-600 dark:text-slate-300 dark:bg-[#1e1f20] dark:ring-slate-700">
        <h2 className="mb-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
          Monthly Summary
        </h2>
  
        <div className="space-y-2 text-xs sm:text-sm">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#2a2b2d]"
            >
              <div className="flex items-center gap-2">
                <div
                  className={
                    "flex h-6 w-6 items-center justify-center rounded-full text-[10px] " +
                    item.colorClasses
                  }
                >
                  ●
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  