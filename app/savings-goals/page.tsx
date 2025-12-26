// app/goals/page.tsx

import { GoalsToolbar } from "../../src/components/goals/GoalsToolbar";
import { GoalsEmptyState } from "../../src/components/goals/GoalsEmptyState";

export default function GoalsPage() {
  return (
    <div className="bg-blue-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        <GoalsToolbar />
        <GoalsEmptyState />
      </div>
    </div>
  );
}
