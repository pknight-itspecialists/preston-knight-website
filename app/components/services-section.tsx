
'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Scale, 
  Shield, 
  Users, 
  FileText,
  AlertTriangle,
  Search,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const services = [
  {
    icon: Scale,
    title: "Expert Witness Services",
    description: "Technical expertise and testimony for legal matters involving cybersecurity incidents and technology disputes.",
    features: [
      "Ransomware incident investigation and impact assessment",
      "Business email compromise fraud investigation",
      "Data breach investigation and scope determination",
      "Cybersecurity standard of care evaluation",
      "Technology contract dispute analysis",
      "Insurance claim evaluation and support"
    ],
    highlight: "Legal Consulting"
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive cybersecurity solutions from incident response to ongoing security operations management.",
    features: [
      "24/7 Security Operations Center (SOC) services",
      "Cyber incident investigation and digital forensics",
      "Managed Detection and Response (MDR)",
      "Vulnerability assessment and penetration testing",
      "Security awareness training and phishing simulation",
      "Incident response planning and tabletop exercises"
    ],
    highlight: "Security Operations"
  },
  {
    icon: Users,
    title: "IT Leadership Consulting",
    description: "Strategic IT leadership and governance consulting for organizations seeking expert guidance.",
    features: [
      "IT strategy development and governance frameworks",
      "Infrastructure management and architecture review",
      "Cloud services strategy and migration planning",
      "Enterprise architecture and systems integration",
      "IT service management and ITIL process improvement",
      "Vendor management and contract negotiation"
    ],
    highlight: "Strategic Consulting"
  }
]

const complianceFrameworks = [
  { name: "HIPAA", description: "Healthcare compliance" },
  { name: "PCI-DSS", description: "Payment card security" },
  { name: "NIST", description: "Cybersecurity framework" },
  { name: "GLBA", description: "Financial services" },
  { name: "SOX", description: "Corporate governance" },
  { name: "State Laws", description: "Data breach notification" }
]

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Professional Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive IT & Cybersecurity Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert services tailored to your organization's cybersecurity, 
              legal consulting, and IT leadership needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-hover h-full bg-white shadow-lg border-0 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.highlight}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mt-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <Link href="#contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Compliance & Regulatory Expertise */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Compliance & Regulatory Expertise
                    </h3>
                  </div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Extensive experience with regulatory frameworks and compliance requirements 
                    across multiple industries and jurisdictions.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {complianceFrameworks.map((framework, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-lg font-semibold text-slate-900 mb-1">
                        {framework.name}
                      </div>
                      <div className="text-xs text-slate-600">
                        {framework.description}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <Link href="#contact">
                      Discuss Your Compliance Needs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
