// app/profile/components/ProfileLoading.tsx
export default function ProfileLoading() {
    return (
      <div className="min-h-screen bg-blue-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-8 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
  
          {/* Tabs Skeleton */}
          <div className="flex space-x-1 rounded-lg bg-white p-1 shadow-sm border border-gray-200 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-md animate-pulse"></div>
            ))}
          </div>
  
          {/* Content Skeleton */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar Skeleton */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
  
              {/* Form Skeleton */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-10 w-full bg-gray-100 rounded-lg animate-pulse"></div>
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