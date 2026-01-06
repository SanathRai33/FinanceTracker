// src/components/goals/GoalsEmptyState.tsx
"use client";

interface Props {
  onCreateGoal: () => void;
}

export function GoalsEmptyState({ onCreateGoal }: Props) {
  return (
    <div className="py-20 text-center">
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 shadow-lg rounded-2xl bg-linear-to-r from-emerald-400 to-blue-500 dark:from-emerald-600 dark:to-blue-800">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l2-2m-2 2l-2-2m2 2l2 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22.5 34A9.5 9.5 0 0133 24.5a9.5 9.5 0 00-11-9.5 9.5 9.5 0 00-9.5 9.5A9.5 9.5 0 0122.5 34z" />
        </svg>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-200">No goals yet</h2>
      <p className="max-w-md mx-auto mb-8 text-slate-500 dark:text-slate-400">
        Set financial milestones and track your progress toward achieving them. Start by creating your first goal.
      </p>
      <button 
        onClick={onCreateGoal}
        className="flex items-center gap-2 px-8 py-3 mx-auto font-semibold text-white transition-all duration-200 shadow-lg bg-emerald-600 hover:bg-emerald-700 rounded-xl hover:shadow-xl"
      >
        Create Your First Goal
      </button>
    </div>
  );
}
