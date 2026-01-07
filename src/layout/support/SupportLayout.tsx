// components/support/SupportLayout.tsx
interface SupportLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SupportLayout({ title, subtitle, children }: SupportLayoutProps) {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <header className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </header>

        <div className="space-y-8">
          {children}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/support"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            ← Back to Help Center
          </a>
        </div>
      </div>
    </div>
  );
}