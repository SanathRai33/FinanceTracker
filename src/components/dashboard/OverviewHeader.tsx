// app/components/dashboard/OverviewHeader.tsx
import Card from "@/src/components/dashboard/Card";

export default function OverviewHeader() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold sm:text-xl">
            Monthly Financial Overview
          </h1>
          <p className="text-sm text-blue-100">November 2025</p>
        </div>
        <p className="text-sm text-blue-100">
          All your income, expenses and savings at a glance.
        </p>
      </div>
    </Card>
  );
}
