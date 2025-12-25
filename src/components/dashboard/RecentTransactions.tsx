// app/components/dashboard/RecentTransactions.tsx
import Card from "@/src/components/dashboard/Card";

type Transaction = {
  _id: string;
  date: string;
  description?: string;
  amount: number;
  type: "income" | "expense" | "transfer";
};

type Props = {
  transactions: Transaction[];
  isLoading?: boolean;
};

export function RecentTransactions({ transactions, isLoading }: Props) {
  const hasData = transactions && transactions.length > 0;

  return (
    <Card>
      <h2 className="mb-1 text-sm font-semibold text-slate-800">
        Recent Transactions
      </h2>
      <p className="mb-4 text-xs text-slate-500">
        Latest 5 transactions.
      </p>

      {isLoading ? (
        <div className="flex h-20 items-center justify-center text-xs text-slate-400">
          Loading…
        </div>
      ) : !hasData ? (
        <div className="flex h-20 items-center justify-center text-xs text-slate-400">
          No transactions yet. Add your first transaction to get started!
        </div>
      ) : (
        <ul className="divide-y divide-slate-100 text-xs sm:text-sm">
          {transactions.slice(0, 5).map((tx) => (
            <li
              key={tx._id}
              className="flex items-center justify-between py-2"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-slate-800">
                  {tx.description || "Untitled"}
                </p>
                <p className="text-[11px] text-slate-500">
                  {new Date(tx.date).toLocaleDateString()}
                </p>
              </div>
              <p
                className={
                  "text-sm font-semibold " +
                  (tx.type === "income" ? "text-emerald-600" : "text-rose-600")
                }
              >
                {tx.type === "income" ? "+" : "-"}${tx.amount}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
