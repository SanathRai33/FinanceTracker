// src/components/dashboard/IncomeDistribution.tsx
import Card from "@/src/components/dashboard/Card";
import { useAnalyticsData } from "@/src/hooks/useTransactions";

interface Props {
  analytics?: any;
  categories?: any[];
}

export function IncomeDistribution({ analytics, categories }: Props) {
  const { data: freshAnalytics } = useAnalyticsData();

  const combinedAnalytics = analytics || freshAnalytics;
  const topCategories = combinedAnalytics?.byCategory?.slice(0, 4) || [];

  if (!topCategories.length) {
    return (
      <Card className="h-64">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            📊
          </div>
          <h3 className="text-lg font-semibold mb-1">Income Distribution</h3>
          <p className="text-gray-500 text-sm">Where your money goes this month.</p>
          <p className="text-xs text-gray-400 mt-2">No data available</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-linear-to-b from-blue-400 to-blue-600 rounded" />
          <h3 className="text-lg font-semibold">Income Distribution</h3>
          <span className="ml-auto text-sm text-gray-500">
            Top 4 categories
          </span>
        </div>
        
        <div className="space-y-3">
          {topCategories.map((cat: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `hsl(${idx * 80}, 70%, 50%)` }}
                />
                <span className="font-medium">{cat.category}</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">
                  ₹{cat.total.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  {(cat.total / (combinedAnalytics?.totalIncome || 1) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
