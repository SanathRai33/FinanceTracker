// app/components/transactions/TransactionsTable.tsx

const columns = [
    "Date",
    "Type",
    "Category",
    "Description",
    "Amount",
    "Payment Method",
    "Recurring",
    "Need/Want",
    "Notes",
    "Balance",
  ];
  
  export function TransactionsTable() {
    return (
      <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-xs font-medium text-slate-500">
                {columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="whitespace-nowrap border-b border-slate-100 px-4 py-2 text-left"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-xs text-slate-400"
                >
                  No transactions found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  