// app/transactions/page.tsx

import { TransactionsFilters } from "../components/transactions/TransactionsFilters";
import { TransactionsTable } from "../components/transactions/TransactionsTable";

export default function TransactionsPage() {
  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        {/* Title */}
        <div className="lg:text-[28px] md:text-sm text-sm sm:text-sm">
          <h1 className="font-semibold text-slate-800">Transactions</h1>
        </div>

        {/* Filters card */}
        <TransactionsFilters />

        {/* Table */}
        <TransactionsTable />
      </div>
    </div>
  );
}
