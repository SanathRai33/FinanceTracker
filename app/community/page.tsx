// app/community/page.tsx
import SupportLayout from "@/src/layout/support/SupportLayout";
import { FiUsers, FiMessageSquare, FiStar, FiTrendingUp, FiAward } from "react-icons/fi";

export default function CommunityPage() {
  const categories = [
    {
      name: "Getting Started",
      posts: 245,
      color: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      name: "Tips & Tricks",
      posts: 189,
      color: "bg-green-100 dark:bg-green-900/30"
    },
    {
      name: "Feature Requests",
      posts: 342,
      color: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "Bug Reports",
      posts: 87,
      color: "bg-red-100 dark:bg-red-900/30"
    },
    {
      name: "Integrations",
      posts: 156,
      color: "bg-yellow-100 dark:bg-yellow-900/30"
    },
    {
      name: "API & Developers",
      posts: 92,
      color: "bg-indigo-100 dark:bg-indigo-900/30"
    }
  ];

  const topUsers = [
    { name: "Alex Johnson", role: "Community Leader", posts: 124 },
    { name: "Maria Garcia", role: "Top Contributor", posts: 89 },
    { name: "David Chen", role: "Expert User", posts: 76 },
    { name: "Sarah Williams", role: "Active Member", posts: 65 }
  ];

  const recentPosts = [
    {
      title: "Best practices for budget tracking",
      author: "Alex Johnson",
      category: "Tips & Tricks",
      replies: 24,
      views: 156
    },
    {
      title: "How to automate expense categorization",
      author: "Maria Garcia",
      category: "Getting Started",
      replies: 18,
      views: 203
    },
    {
      title: "Feature request: Multi-currency support",
      author: "David Chen",
      category: "Feature Requests",
      replies: 42,
      views: 312
    },
    {
      title: "Export transactions to Excel guide",
      author: "Sarah Williams",
      category: "Tips & Tricks",
      replies: 12,
      views: 98
    }
  ];

  return (
    <SupportLayout
      title="Community"
      subtitle="Connect with other users and share knowledge"
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600">
            <FiUsers className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Our Community
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Join thousands of users sharing tips, asking questions, and helping each other get the most out of our financial management tools.
          </p>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: <FiUsers className="w-5 h-5" />, label: "Members", value: "5,247" },
              { icon: <FiMessageSquare className="w-5 h-5" />, label: "Posts", value: "12,893" },
              { icon: <FiStar className="w-5 h-5" />, label: "Solutions", value: "3,842" },
              { icon: <FiTrendingUp className="w-5 h-5" />, label: "Online", value: "324" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-blue-100 rounded-full dark:bg-blue-900/30">
                  <div className="text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Discussion Categories
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="group p-6 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.name}
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {category.posts} posts
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                    <FiMessageSquare className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Content Grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Recent Discussions
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          by {post.author}
                        </span>
                        <span className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.replies} replies</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Users */}
              <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="flex items-center mb-4 font-semibold text-gray-800 dark:text-white">
                  <FiAward className="w-5 h-5 mr-2 text-yellow-500" />
                  Top Contributors
                </h3>
                <div className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {user.role}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.posts} posts
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 text-white bg-linear-to-r from-blue-500 to-purple-600 rounded-xl">
                <h3 className="mb-3 font-semibold">Join the Conversation</h3>
                <p className="mb-4 text-sm text-blue-100">
                  Share your knowledge and help others in the community.
                </p>
                <button className="w-full py-2 font-medium text-blue-600 transition-colors bg-white rounded-lg hover:bg-blue-50">
                  Start New Discussion
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
}