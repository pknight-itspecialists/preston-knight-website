
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, GraduationCap, Shield, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Preston Knight
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cybersecurity Leadership & Expert Testimony
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Senior IT executive and cybersecurity expert with proven expertise in 
              cyber incident investigation, digital forensics, and technical consulting.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="card-hover bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        CEO & Owner, IT Specialists
                      </h3>
                      <p className="text-slate-600">Denver Metropolitan Area</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-6">
                    As CEO and owner of IT Specialists, I provide end-to-end managed IT services, 
                    cybersecurity solutions, and IT leadership for client organizations. My extensive 
                    experience includes cyber incident investigation, digital forensics support, and 
                    technical consulting alongside cybersecurity insurance firms and legal counsel.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">14+</div>
                      <div className="text-sm text-slate-600">Years IT Leadership</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">10+</div>
                      <div className="text-sm text-slate-600">Years Cybersecurity</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="card-hover bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-slate-900">
                      Core Expertise
                    </h4>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Cyber Incident Investigation & Digital Forensics</li>
                    <li>• Expert Witness Services & Legal Consulting</li>
                    <li>• IT Governance & Infrastructure Management</li>
                    <li>• Regulatory Compliance (HIPAA, PCI-DSS, NIST)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-slate-900">
                      Academic Involvement
                    </h4>
                  </div>
                  <p className="text-slate-700">
                    Advisory Committee Member at University of Colorado Boulder - Leeds School 
                    of Business, contributing expertise to Customer Experience Certificate Program development.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-slate-900">
                      Key Differentiators
                    </h4>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Business owner with P&L responsibility</li>
                    <li>• Cross-industry experience across multiple verticals</li>
                    <li>• Extensive legal consulting and expert witness experience</li>
                    <li>• Thought leadership in cybersecurity trends</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
