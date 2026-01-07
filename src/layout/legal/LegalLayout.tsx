// components/legal/LegalLayout.tsx
interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <header className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-800 shadow-sm rounded-xl p-6 md:p-8">
          {children}
        </div>

        <div className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>
            For questions about this policy, please contact us at sanathrai03@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}