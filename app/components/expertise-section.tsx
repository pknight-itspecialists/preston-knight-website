
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Scale, 
  Settings, 
  Search, 
  Lock, 
  AlertTriangle,
  FileText,
  Users,
  Database
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const expertiseAreas = [
  {
    icon: Shield,
    title: "Cybersecurity & Information Security",
    description: "Comprehensive cybersecurity services including incident response, forensics, and threat detection.",
    skills: [
      "Cyber Incident Investigation",
      "Digital Forensics Support", 
      "Ransomware Analysis & Recovery",
      "Business Email Compromise Investigation",
      "Advanced Persistent Threat Detection",
      "Endpoint Detection & Response (EDR)",
      "Security Operations Center Management"
    ]
  },
  {
    icon: Scale,
    title: "Expert Witness Services",
    description: "Technical expertise in legal matters involving cybersecurity incidents and technology disputes.",
    skills: [
      "Ransomware Incident Investigation",
      "Business Email Compromise Analysis",
      "Data Breach Investigation",
      "Cybersecurity Standard of Care Evaluation",
      "Technology Contract Disputes",
      "Insurance Claim Evaluation",
      "Expert Report Preparation"
    ]
  },
  {
    icon: Settings,
    title: "IT Leadership & Operations",
    description: "Strategic IT leadership and comprehensive operations management for enterprise environments.",
    skills: [
      "IT Strategy Development & Governance",
      "Infrastructure Management",
      "Cloud Services Management",
      "Enterprise Architecture",
      "Service Level Agreement Management",
      "Business Continuity Planning",
      "Vendor Management"
    ]
  },
  {
    icon: FileText,
    title: "Compliance & Risk Management",
    description: "Regulatory compliance expertise across multiple frameworks and industries.",
    skills: [
      "HIPAA Compliance",
      "PCI-DSS Implementation",
      "NIST Cybersecurity Framework",
      "GLBA Compliance",
      "Vulnerability Assessment",
      "Security Risk Assessment",
      "Policy Development"
    ]
  }
]

export default function ExpertiseSection() {
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
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Core Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Specialized Knowledge Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep technical expertise across cybersecurity, expert witness services, 
              IT leadership, and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-hover h-full bg-white shadow-lg border-0 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                        <area.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {area.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">
                        Key Capabilities:
                      </h4>
                      <div className="grid gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Proficiencies */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    Technical Proficiencies
                  </h3>
                  <p className="text-slate-600">
                    Hands-on experience with industry-leading cybersecurity and IT infrastructure tools.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Lock className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-slate-900">Security Platforms</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>• Todyl SASE & Zero Trust</div>
                      <div>• Microsoft 365 Defender</div>
                      <div>• Palo Alto Networks</div>
                      <div>• Huntress Platform</div>
                      <div>• Azure Sentinel</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Database className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-slate-900">Infrastructure</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>• AWS, Azure, Google Cloud</div>
                      <div>• VMware vSphere</div>
                      <div>• Active Directory</div>
                      <div>• Cisco & HP Networking</div>
                      <div>• Veeam & Datto Backup</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Search className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-slate-900">Analysis Tools</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>• Wireshark & Network Analysis</div>
                      <div>• Metasploit & Kali Tools</div>
                      <div>• Tenable Vulnerability Mgmt</div>
                      <div>• ConnectWise & Autotask</div>
                      <div>• Digital Forensics Suites</div>
                    </div>
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
