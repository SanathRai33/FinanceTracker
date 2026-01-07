// app/status/page.tsx
import SupportLayout from "@/src/layout/support/SupportLayout";
import { FiCheckCircle, FiAlertTriangle, FiXCircle, FiWifi, FiDatabase, FiServer, FiGlobe } from "react-icons/fi";

export default function StatusPage() {
  const services = [
    {
      name: "Web Application",
      status: "operational",
      icon: <FiGlobe className="w-5 h-5" />,
      description: "Main website and user interface"
    },
    {
      name: "API Service",
      status: "operational",
      icon: <FiServer className="w-5 h-5" />,
      description: "Backend API endpoints"
    },
    {
      name: "Database",
      status: "operational",
      icon: <FiDatabase className="w-5 h-5" />,
      description: "Primary database cluster"
    },
    {
      name: "Authentication",
      status: "degraded",
      icon: <FiWifi className="w-5 h-5" />,
      description: "User login and session management"
    },
    {
      name: "File Storage",
      status: "operational",
      icon: <FiDatabase className="w-5 h-5" />,
      description: "Document and image storage"
    },
    {
      name: "Email Service",
      status: "operational",
      icon: <FiGlobe className="w-5 h-5" />,
      description: "Transaction emails and notifications"
    }
  ];

  const incidents = [
    {
      date: "Today, 10:30 AM",
      title: "Authentication Service Latency",
      status: "investigating",
      description: "Some users may experience slow login times"
    },
    {
      date: "Yesterday, 3:45 PM",
      title: "Scheduled Maintenance",
      status: "resolved",
      description: "Completed database optimization"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'degraded': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'outage': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'investigating': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <FiCheckCircle className="w-5 h-5" />;
      case 'degraded': return <FiAlertTriangle className="w-5 h-5" />;
      case 'outage': return <FiXCircle className="w-5 h-5" />;
      case 'investigating': return <FiAlertTriangle className="w-5 h-5" />;
      default: return <FiAlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <SupportLayout
      title="Service Status"
      subtitle="Real-time status of our services"
    >
      <div className="space-y-8">
        {/* Overall Status */}
        <section>
          <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  System Status
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Last updated: Just now
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-800 dark:text-white">
                  All Systems Operational
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-600 dark:text-gray-400">
                        {service.icon}
                      </div>
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        {service.name}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                      <span className="ml-1 capitalize">{service.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Recent Incidents
          </h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-2 space-x-3">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                        {getStatusIcon(incident.status)}
                        <span className="ml-1 capitalize">{incident.status}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {incident.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {incident.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {incident.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe */}
        <section>
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                Stay Updated
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Get notified about service status updates
              </p>
              <form className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
}