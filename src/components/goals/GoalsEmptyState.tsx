// src/components/goals/GoalsEmptyState.tsx
"use client";

interface Props {
  onCreateGoal: () => void;
}

export function GoalsEmptyState({ onCreateGoal }: Props) {
  return (
    <div className="text-center py-20">
      <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l2-2m-2 2l-2-2m2 2l2 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22.5 34A9.5 9.5 0 0133 24.5a9.5 9.5 0 00-11-9.5 9.5 9.5 0 00-9.5 9.5A9.5 9.5 0 0122.5 34z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">No goals yet</h2>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Set financial milestones and track your progress toward achieving them. Start by creating your first goal.
      </p>
      <button 
        onClick={onCreateGoal}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Create Your First Goal
      </button>
    </div>
  );
}
