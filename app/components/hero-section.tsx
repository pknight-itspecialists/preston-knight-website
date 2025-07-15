
'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Award, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg tech-pattern">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Cybersecurity Expert & CEO
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Preston Knight
              <span className="block text-blue-400">IT Leadership Expert</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              14+ years of comprehensive IT experience with 10+ years specializing in cybersecurity. 
              CEO of IT Specialists providing expert witness services, cyber incident response, 
              and strategic IT leadership.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-400">14+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Years Cybersecurity</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-sm text-gray-400">Clients Served</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="#contact">
                  Expert Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="#services">
                  View Services
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-1 shadow-2xl">
                  <Image
                    src="/assets/headshot.jpeg"
                    alt="Preston Knight - CEO & Cybersecurity Expert"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Award className="h-6 w-6 text-blue-600" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Users className="h-6 w-6 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  )
}
