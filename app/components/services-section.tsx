import { Monitor, Search, Server, Smartphone } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "Custom, modern websites tailored to your brand and business goals.",
      features: ["Responsive Design", "Modern UI/UX", "Brand Integration"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic to your site.",
      features: ["Keyword Research", "On-Page SEO", "Performance Optimization"],
    },
    {
      icon: Server,
      title: "Fast Hosting",
      description: "Lightning-fast, secure hosting solutions for optimal performance.",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups"],
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Ensure your website looks perfect on all devices and screen sizes.",
      features: ["Mobile-First Design", "Touch Optimization", "Cross-Platform Testing"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions designed to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-600/50 hover:bg-red-600/5 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-red-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
