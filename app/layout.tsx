import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaloyan Notes',
  description: 'Svruhinteligentno prilojenie za vodene na digitalni zapiski.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/pspCatLogo.svg",
        href: "/pspCatLogo.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='kaloyan-theme-2'
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
