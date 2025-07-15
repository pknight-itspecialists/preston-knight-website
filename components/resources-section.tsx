
'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  ExternalLink,
  Download,
  Users
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Emerging Cybersecurity Threats in 2024",
    excerpt: "Analysis of the latest cybersecurity trends and threat vectors affecting businesses today.",
    category: "Threat Analysis",
    readTime: "5 min read",
    date: "Coming Soon",
    isPlaceholder: true
  },
  {
    title: "NIST Cybersecurity Framework 2.0: What's New",
    excerpt: "Comprehensive review of updates to the NIST framework and implementation best practices.",
    category: "Compliance",
    readTime: "8 min read",
    date: "Coming Soon",
    isPlaceholder: true
  },
  {
    title: "Expert Witness Best Practices in Cyber Cases",
    excerpt: "Insights into effective expert witness testimony and technical analysis in legal proceedings.",
    category: "Legal Consulting",
    readTime: "6 min read",
    date: "Coming Soon",
    isPlaceholder: true
  }
]

const caseStudies = [
  {
    title: "Ransomware Incident Response & Recovery",
    description: "Multi-million dollar ransomware attack investigation, containment, and business recovery.",
    industry: "Manufacturing",
    outcome: "Full data recovery, zero ransom payment",
    isPlaceholder: true
  },
  {
    title: "Business Email Compromise Investigation",
    description: "Complex BEC fraud investigation involving international wire transfers and legal proceedings.",
    industry: "Financial Services",
    outcome: "Successful prosecution, partial fund recovery",
    isPlaceholder: true
  },
  {
    title: "HIPAA Compliance Transformation",
    description: "Healthcare organization's complete cybersecurity overhaul and HIPAA compliance implementation.",
    industry: "Healthcare",
    outcome: "Full compliance, zero violations in 2 years",
    isPlaceholder: true
  }
]

const resources = [
  {
    icon: Download,
    title: "Expert Witness Resume",
    description: "Comprehensive resume highlighting cybersecurity expertise and legal consulting experience.",
    type: "PDF Download",
    link: "/downloads/Expanded_Expert_Witness_Resume.docx"
  },
  {
    icon: Download,
    title: "Professional Resume",
    description: "LinkedIn-optimized resume showcasing IT leadership and business accomplishments.",
    type: "PDF Download", 
    link: "/downloads/pklinkedin resume.pdf"
  },
  {
    icon: ExternalLink,
    title: "IT Specialists Blog",
    description: "Regular insights on cybersecurity trends, best practices, and industry commentary.",
    type: "External Link",
    link: "https://itspecialists.net"
  },
  {
    icon: ExternalLink,
    title: "LinkedIn Profile",
    description: "Connect for professional networking and industry insights.",
    type: "Social Media",
    link: "https://www.linkedin.com/in/prestontknight/"
  }
]

export default function ResourcesSection() {
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
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Resources & Insights
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Thought Leadership & Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access professional resources, industry insights, and real-world case studies 
              showcasing cybersecurity expertise and successful engagements.
            </p>
          </motion.div>

          {/* Featured Blog Posts */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Latest Insights
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full bg-white shadow-lg border-0 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.isPlaceholder && (
                          <Badge variant="outline" className="text-xs">
                            Preview
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Case Studies
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full bg-slate-50 border-0 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-xs">
                          {study.industry}
                        </Badge>
                        {study.isPlaceholder && (
                          <Badge variant="secondary" className="text-xs">
                            Case Study
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h4>
                      
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-xs font-medium text-green-800 mb-1">
                          Outcome:
                        </div>
                        <div className="text-sm text-green-700">
                          {study.outcome}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Resources */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Professional Resources
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full bg-white shadow-lg border-0 group">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-blue-100 rounded-lg mb-4 inline-block group-hover:bg-blue-200 transition-colors">
                        <resource.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      
                      <h4 className="font-semibold text-slate-900 mb-2">
                        {resource.title}
                      </h4>
                      
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <Badge variant="outline" className="text-xs mb-4">
                        {resource.type}
                      </Badge>
                      
                      <Button 
                        size="sm" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <Link href={resource.link} target={resource.link.startsWith('http') ? '_blank' : '_self'}>
                          Access
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="bg-blue-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Stay Connected
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Follow my latest insights on cybersecurity trends, expert witness best practices, 
                  and IT leadership strategies through my professional blog and LinkedIn updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <Link href="https://itspecialists.net" target="_blank">
                      Visit IT Specialists Blog
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/prestontknight/" target="_blank">
                      Connect on LinkedIn
                      <ExternalLink className="ml-2 h-5 w-5" />
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
