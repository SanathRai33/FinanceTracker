// app/debt-tracker/page.tsx

import { DebtToolbar } from "../../src/components/debt/DebtToolbar";
import { DebtEmptyState } from "../../src/components/debt/DebtEmptyState";

export default function DebtTrackerPage() {
  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        <DebtToolbar />
        <DebtEmptyState />
      </div>
    </div>
  );
}
