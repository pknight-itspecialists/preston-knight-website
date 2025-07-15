
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Preston Knight - Cybersecurity Expert & IT Leadership Consultant',
  description: 'Expert witness services, cybersecurity consulting, and IT leadership by Preston Knight, CEO of IT Specialists with 14+ years of experience.',
  keywords: 'cybersecurity expert, expert witness, IT consultant, Preston Knight, cyber incident response, digital forensics',
  authors: [{ name: 'Preston Knight' }],
  openGraph: {
    title: 'Preston Knight - Cybersecurity Expert & IT Leadership Consultant',
    description: 'Expert witness services, cybersecurity consulting, and IT leadership by Preston Knight, CEO of IT Specialists with 14+ years of experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
