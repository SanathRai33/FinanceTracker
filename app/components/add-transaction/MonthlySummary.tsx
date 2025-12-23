// app/components/add-transaction/MonthlySummary.tsx

type SummaryItem = {
    label: string;
    amount: string;
    colorClasses: string;
  };
  
  const items: SummaryItem[] = [
    {
      label: "Income",
      amount: "$0",
      colorClasses: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Fixed Expenses",
      amount: "$0",
      colorClasses: "bg-rose-50 text-rose-600",
    },
    {
      label: "Variable Expenses",
      amount: "$0",
      colorClasses: "bg-amber-50 text-amber-600",
    },
    {
      label: "Savings",
      amount: "$0",
      colorClasses: "bg-indigo-50 text-indigo-600",
    },
  ];
  
  export function MonthlySummary() {
    return (
      <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
        <h2 className="mb-4 text-sm font-semibold text-slate-800">
          Monthly Summary
        </h2>
  
        <div className="space-y-2 text-xs sm:text-sm">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
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
                <span className="font-medium text-slate-700">{item.label}</span>
              </div>
              <span className="font-semibold text-slate-800">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  