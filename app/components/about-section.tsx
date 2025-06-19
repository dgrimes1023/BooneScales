import { CheckCircle, Users, Rocket, Shield } from "lucide-react"

export default function AboutSection() {
  const features = [
    { icon: CheckCircle, text: "Modern Technologies" },
    { icon: Users, text: "Client-Focused Approach" },
    { icon: Rocket, text: "Fast Delivery" },
    { icon: Shield, text: "Reliable Support" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-red-500">Boone Scales</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Boone Scales, we specialize in creating cutting-edge web solutions that help small businesses establish
              a powerful online presence. Our team combines technical expertise with creative vision to deliver websites
              that not only look stunning but perform exceptionally.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in building relationships, not just websites. Every project is approached with dedication to
              quality, attention to detail, and a commitment to exceeding expectations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-red-600/10 border border-red-600/20 hover:bg-red-600/20 hover:border-red-500/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <feature.icon className="w-5 h-5 text-red-400 flex-shrink-0 group-hover:text-red-300 transition-colors duration-300" />
                  <span className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600/20 to-transparent p-8 rounded-lg border border-red-600/30">
              <div className="space-y-6">
                {/* Stats Display */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">99%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">5★</div>
                    <div className="text-gray-300 text-sm">Average Rating</div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4 mt-8">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Performance</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Design Quality</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Client Retention</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>

                {/* Animated elements */}
                <div className="flex space-x-2 mt-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
