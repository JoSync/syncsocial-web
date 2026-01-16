import './globals.css'

export const metadata = {
  title: 'SyncSocial.ai | Your life, synchronized',
  description: 'The first AI-powered calendar bridging content, commerce, and community.',
  icons: {
    icon: 'https://raw.githubusercontent.com/lucide-react/lucide/main/icons/infinity.svg', // Gebruikt tijdelijk het Lucide icoon als favicon
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/infinity.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
