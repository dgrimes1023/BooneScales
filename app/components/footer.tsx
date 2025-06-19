import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-xl font-bold text-white">Boone Scales</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building scalable web solutions for modern businesses. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-sm flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Boone Scales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
