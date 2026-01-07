// components/legal/CookieTable.tsx
interface CookieTableProps {
  cookies: Array<{
    name: string;
    purpose: string;
    duration: string;
    examples: string;
  }>;
}

export default function CookieTable({ cookies }: CookieTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300">
              Type
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300">
              Purpose
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300">
              Duration
            </th>
            <th className="py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase px 6 dark:text-gray-300">
              Examples
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#1e1f20] divide-y divide-gray-200 dark:divide-gray-700">
          {cookies.map((cookie, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {cookie.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                {cookie.purpose}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap dark:text-gray-300">
                {cookie.duration}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                {cookie.examples}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}