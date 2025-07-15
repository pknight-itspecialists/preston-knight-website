
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Heart, 
  Building, 
  Scale, 
  Factory, 
  GraduationCap,
  Users,
  ShoppingCart,
  Laptop
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const industries = [
  {
    icon: Code,
    name: "Software Development & Technology",
    description: "IT infrastructure, cloud architecture, and cybersecurity for technology companies.",
    specialties: ["Cloud Security", "DevSecOps", "API Security", "Data Protection"]
  },
  {
    icon: Heart,
    name: "Healthcare & HIPAA-Regulated",
    description: "HIPAA compliance, patient data protection, and healthcare IT security.",
    specialties: ["HIPAA Compliance", "PHI Protection", "Medical Device Security", "Telehealth Security"]
  },
  {
    icon: Building,
    name: "Financial Services & Banking",
    description: "Financial data security, PCI-DSS compliance, and regulatory frameworks.",
    specialties: ["PCI-DSS Compliance", "Financial Data Security", "Fraud Prevention", "Regulatory Compliance"]
  },
  {
    icon: Scale,
    name: "Legal & Professional Services",
    description: "Attorney-client privilege protection, document security, and professional ethics compliance.",
    specialties: ["Document Security", "Client Confidentiality", "Legal Tech Security", "Compliance Auditing"]
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    description: "Industrial control systems security, supply chain protection, and operational technology.",
    specialties: ["OT Security", "Industrial IoT", "Supply Chain Security", "Manufacturing IT"]
  },
  {
    icon: GraduationCap,
    name: "Education & Research Institutions",
    description: "Student data protection, research security, and educational technology safeguards.",
    specialties: ["FERPA Compliance", "Research Data Security", "Campus Network Security", "EdTech Protection"]
  },
  {
    icon: Users,
    name: "Non-Profit Organizations",
    description: "Donor data protection, grant compliance, and cost-effective security solutions.",
    specialties: ["Donor Privacy", "Grant Compliance", "Budget-Conscious Security", "Volunteer Data Protection"]
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Customer data protection, payment security, and retail technology infrastructure.",
    specialties: ["E-commerce Security", "Payment Processing", "Customer Data Protection", "Retail POS Security"]
  },
  {
    icon: Laptop,
    name: "Remote & Hybrid Workforce",
    description: "Secure remote work environments, endpoint protection, and distributed team security.",
    specialties: ["Remote Access Security", "Endpoint Protection", "Zero Trust Architecture", "Cloud Collaboration Security"]
  }
]

const complianceHighlights = [
  {
    framework: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    focus: "Healthcare data protection and patient privacy"
  },
  {
    framework: "PCI-DSS",
    description: "Payment Card Industry Data Security Standard",
    focus: "Credit card processing and payment security"
  },
  {
    framework: "NIST",
    description: "National Institute of Standards and Technology",
    focus: "Cybersecurity framework implementation"
  },
  {
    framework: "GLBA",
    description: "Gramm-Leach-Bliley Act",
    focus: "Financial services privacy and security"
  },
  {
    framework: "State Laws",
    description: "Colorado Data Breach Notification Laws",
    focus: "State-level data breach reporting requirements"
  }
]

export default function IndustrySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="industry" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Industry Experience
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cross-Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Extensive experience serving diverse industries with tailored cybersecurity 
              and IT solutions that meet specific regulatory and operational requirements.
            </p>
          </motion.div>

          {/* Industry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-hover h-full bg-white shadow-lg border-0 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                        <industry.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                        {industry.name}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-medium text-slate-900 mb-2">
                        Key Specialties:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {industry.specialties.map((specialty, specialtyIndex) => (
                          <Badge 
                            key={specialtyIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Compliance Framework Expertise */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    Regulatory Framework Expertise
                  </h3>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Deep understanding of regulatory requirements and compliance frameworks 
                    across industries and jurisdictions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {complianceHighlights.map((compliance, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-6 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-lg font-bold text-blue-600 mr-3">
                          {compliance.framework}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-slate-900 mb-2">
                        {compliance.description}
                      </div>
                      <div className="text-xs text-slate-600">
                        {compliance.focus}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                    <Users className="h-4 w-4 mr-2" />
                    Serving clients across all industry verticals with tailored compliance solutions
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
