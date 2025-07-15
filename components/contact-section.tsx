
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Linkedin,
  Send,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Mail,
    title: "Expert Consultation",
    description: "Legal consulting and expert witness services",
    action: "Request Consultation"
  },
  {
    icon: Phone,
    title: "Cybersecurity Services",
    description: "Incident response and security consulting",
    action: "Schedule Assessment"
  },
  {
    icon: Calendar,
    title: "IT Leadership Consulting",
    description: "Strategic IT planning and governance",
    action: "Book Strategy Session"
  }
]

const serviceAreas = [
  "Denver Metropolitan Area",
  "Colorado Springs",
  "Front Range Colorado",
  "Remote Consulting Available",
  "Expert Witness Services Nationwide"
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll respond within 24 hours.')
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          serviceType: 'general'
        })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Start Your Consultation Today
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to discuss your cybersecurity needs, expert witness requirements, 
              or IT leadership challenges? Let's connect and explore how I can help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-hover bg-white shadow-lg border-0 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                        <method.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{method.title}</h3>
                        <p className="text-sm text-slate-600">{method.description}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          subject: method.title,
                          serviceType: method.title.toLowerCase().replace(/\s+/g, '-')
                        }))
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Service Areas */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-slate-900">Service Areas</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Links */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Connect & Follow</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="https://www.linkedin.com/in/prestontknight/" target="_blank">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="https://itspecialists.net" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        IT Specialists Blog
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card id="contact-form" className="bg-white shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center">
                    <Send className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      Send a Message
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    I typically respond within 24 hours during business days.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can I help you?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your needs, timeline, and any specific requirements..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Your information will be kept confidential and secure.
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
