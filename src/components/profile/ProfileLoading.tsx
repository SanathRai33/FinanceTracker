// app/profile/components/ProfileLoading.tsx
export default function ProfileLoading() {
    return (
      <div className="min-h-screen bg-blue-50 dark:bg-[#121214]">
        <div className="container max-w-6xl px-4 py-8 mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="w-48 h-8 mb-2 bg-gray-300 rounded animate-pulse dark:bg-[#1e1f20]"></div>
            <div className="w-64 h-4 bg-gray-200 rounded animate-pulse dark:bg-[#1e1f20]"></div>
          </div>
  
          {/* Tabs Skeleton */}
          <div className="flex p-1 mb-6 space-x-1 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#1e1f20] dark:border-slate-700">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-10 bg-gray-200 rounded-md animate-pulse dark:bg-black"></div>
            ))}
          </div>
  
          {/* Content Skeleton */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#1e1f20] dark:border-gray-700">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Avatar Skeleton */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gray-300 rounded-full animate-pulse dark:bg-[#1e1f20]"></div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-700"></div>
              </div>
  
              {/* Form Skeleton */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="w-24 h-4 bg-gray-200 rounded animate-pulse dark:bg-[#1e1f20]"></div>
                      <div className="w-full h-10 bg-gray-100 rounded-lg animate-pulse dark:bg-gray-700"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }