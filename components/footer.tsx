
import Link from 'next/link'
import { Shield, Mail, ExternalLink, Download } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Preston Knight</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cybersecurity expert and IT leadership consultant providing expert witness services 
              and strategic cybersecurity solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Expert Witness Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Cybersecurity Consulting</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">IT Leadership</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Incident Response</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="/downloads/Expanded_Expert_Witness_Resume.docx" 
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Expert Witness Resume
                </Link>
              </li>
              <li>
                <Link 
                  href="/downloads/pklinkedin resume.pdf" 
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Professional Resume
                </Link>
              </li>
              <li>
                <Link 
                  href="https://itspecialists.net" 
                  target="_blank"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  IT Specialists Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="https://www.linkedin.com/in/prestontknight/" 
                  target="_blank"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  LinkedIn Profile
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  Get In Touch
                </Link>
              </li>
              <li className="text-slate-500">Denver Metro Area</li>
              <li className="text-slate-500">Remote Services Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400">
              © 2025 Preston Knight. All rights reserved.
            </div>
            <div className="text-sm text-slate-400 mt-4 md:mt-0">
              CEO & Owner, IT Specialists, INC
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
