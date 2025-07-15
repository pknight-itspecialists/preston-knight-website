
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Award,
  Calendar,
  MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experience = [
  {
    company: "IT Specialists, INC",
    role: "CEO & Owner",
    period: "2010 - Present (14+ Years)",
    location: "Denver Metropolitan Area",
    description: "Built and scaled IT Specialists from startup to established MSP providing comprehensive cybersecurity and IT services.",
    achievements: [
      "Direct comprehensive IT operations and cybersecurity services for client organizations",
      "Lead cyber incident investigations in collaboration with cybersecurity insurance carriers",
      "Manage 24/7 Security Operations Center (SOC) services and MDR capabilities",
      "Develop and implement IT governance frameworks, policies, and procedures"
    ],
    timeline: [
      { role: "CEO & Owner", period: "2015 - Present" },
      { role: "COO & Operations Manager", period: "2015 - Present" },
      { role: "Sales Executive and SME", period: "2015 - Present" },
      { role: "Product Manager", period: "2015 - Present" },
      { role: "Project Manager", period: "2013 - 2017" },
      { role: "Helpdesk Representative", period: "2011 - 2013" },
      { role: "Client Advocate", period: "2010 - 2011" }
    ]
  },
  {
    company: "University of Colorado Boulder",
    role: "Advisory Committee Member",
    period: "April 2021 - Present",
    location: "Leeds School of Business",
    description: "Industry professional advising on CU Boulder Leeds School of Business's Customer Experience Certificate Program.",
    achievements: [
      "Contributing expertise to Customer Experience Certificate Program development",
      "Providing industry insights to academic curriculum design",
      "Bridging gap between academic theory and practical application",
      "Mentoring students on real-world cybersecurity challenges"
    ]
  }
]

const achievements = [
  {
    icon: Building2,
    title: "Business Leadership",
    items: [
      "Built and scaled IT Specialists from startup to established MSP over 14+ years",
      "Developed comprehensive cybersecurity practice specializing in incident response",
      "Established partnerships with cybersecurity insurance carriers and legal counsel",
      "Created 24/7 SOC services and managed detection and response capabilities"
    ]
  },
  {
    icon: Award,
    title: "Technical Achievements",
    items: [
      "Led numerous cyber incident investigations including ransomware and data breaches",
      "Implemented Zero Trust Network Architecture for multiple client organizations",
      "Developed security awareness training programs and phishing simulation campaigns",
      "Designed and implemented business continuity and disaster recovery solutions"
    ]
  },
  {
    icon: Users,
    title: "Industry Recognition",
    items: [
      "Regular contributor to cybersecurity and IT management blog at itspecialists.net",
      "Thought leadership in cybersecurity trends and regulatory developments",
      "Advisory role at University of Colorado Boulder Leeds School of Business",
      "Subject matter expert for cybersecurity insurance carriers and legal counsel"
    ]
  }
]

export default function ExperienceSection() {
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Professional Experience
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Career Progression & Achievements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven track record of building successful cybersecurity practices 
              and delivering expert consulting services.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-hover bg-white shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-slate-900">
                            {exp.role}
                          </h3>
                          <Badge variant="secondary">
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center text-slate-600 mb-4">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                          <MapPin className="h-4 w-4 ml-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>

                        <p className="text-slate-700 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900">Key Responsibilities:</h4>
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-slate-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Career Timeline for IT Specialists */}
                      {exp.timeline && (
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-slate-900 mb-4">Career Progression:</h4>
                          <div className="space-y-3">
                            {exp.timeline.map((position, posIndex) => (
                              <div key={posIndex} className="border-l-2 border-blue-200 pl-4 pb-3">
                                <div className="font-medium text-slate-900 text-sm">
                                  {position.role}
                                </div>
                                <div className="text-xs text-slate-600">
                                  {position.period}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Notable Achievements */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Notable Achievements & Recognition
              </h3>
              <p className="text-slate-600">
                Key milestones and contributions throughout my career in cybersecurity and IT leadership.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {achievements.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full bg-slate-50 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <category.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900">
                          {category.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
