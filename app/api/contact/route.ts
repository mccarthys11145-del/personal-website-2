
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, subject, message, inquiryType, timestamp, formType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Log the contact submission (in production, you'd typically send an email or save to a service)
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || '',
      message: message.trim(),
      inquiryType: inquiryType || 'general',
      formType: formType || 'contact',
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    }

    // Log the submission for now (in production, integrate with email service like SendGrid, etc.)
    console.log('Contact form submission received:', contactData)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received successfully. Thank you for your inquiry!',
        submissionId: `contact_${Date.now()}` 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while processing your message. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  )
}
