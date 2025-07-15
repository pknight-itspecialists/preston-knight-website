
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message, serviceType } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: name?.trim(),
        email: email?.trim()?.toLowerCase(),
        company: company?.trim() || null,
        subject: subject?.trim(),
        message: message?.trim(),
        serviceType: serviceType || 'general',
        status: 'new',
        createdAt: new Date(),
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
