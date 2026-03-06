import { Target, Gauge, Shield, Users, RefreshCw, Rocket } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description: "Make informed strategic decisions backed by comprehensive, real-time data insights.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Gauge,
      title: "Improved Efficiency",
      description: "Eliminate data silos and reduce time spent searching for information across systems.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Enhanced Data Security",
      description: "Centralized data governance with enterprise-grade security and compliance standards.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Empowered Teams",
      description: "Give every team member access to the insights they need, when they need them.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Analytics",
      description: "Access up-to-the-minute data to respond quickly to market changes and opportunities.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Rocket,
      title: "Scalable Growth",
      description: "Infrastructure that grows with your business, supporting expansion without limitations.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PT. Mitra Solusi Integrasi Data?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the transformative power of unified data and intelligent analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}