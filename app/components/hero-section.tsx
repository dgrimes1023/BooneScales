"use client"

import { ArrowRight, Code, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Enhanced red grid pattern - more visible */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.15)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating icons */}
          <div className="flex justify-center space-x-8 mb-12 mt-20 opacity-60">
            <Code className="w-8 h-8 text-red-400 animate-bounce delay-100" />
            <Zap className="w-8 h-8 text-red-400 animate-bounce delay-300" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Web Development
            <span className="block text-red-500">Built to Scale</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Boone Scales creates fast, responsive, and modern websites for small businesses.
          </p>

          <div className="flex justify-center">
            <a href="#contact" className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/25 flex items-center w-fit cursor-pointer">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
