import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      {/* Newsletter Section */}
      <div className="flex flex-col pt-16 mb-16 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-10 gap-y-7 bg-black">
          <h1 className="font-bold text-5xl">Stay informed. Be Inspired. Be There.</h1>
          <p className="text-lg text-neutral-300">
            Register your interest now to receive exclusive updates, speaker announcements, and early bird opportunities.
          </p>
          
          <div className="flex items-center w-full max-w-[400px] rounded-full overflow-hidden border border-neutral-700 focus-within:ring-2 focus-within:ring-[#40ffaa] bg-neutral-800">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-neutral-400 focus:outline-none" 
            />
            <button className="px-4 py-2 bg-[#40ffaa] text-black font-bold hover:bg-[#38e699] transition-colors rounded-full">
              Notify
            </button>
          </div>
        </div>

      {/* Main Footer */}
      <div className="w-full max-w-[1250px] mx-auto bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">Kov</span>
                <span className="text-3xl font-bold text-[#4527A0]">AI</span>
                <span className="text-lg ml-1">Conference</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                The premier AI conference in South India focused on manufacturing, healthcare, and textile industries.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#4527A0] transition-colors"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#4527A0] transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#4527A0] transition-colors"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#4527A0] transition-colors"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-[#4527A0] pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-[#4527A0] pb-2 inline-block">Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Venue
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-[#4527A0] pb-2 inline-block">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="text-[#4527A0]" size={18} />
                  <a href="mailto:info@kovaiconference.com" className="text-gray-300 hover:text-white">
                    info@kovaiconference.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#4527A0]" size={18} />
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#4527A0] mt-1" size={18} />
                  <span className="text-gray-300">Coimbatore, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 KovAI Conference. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 text-sm hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
