import './globals.css'

export const metadata = {
  title: 'SyncSocial.ai | Jouw leven, gesynchroniseerd',
  description: 'De eerste AI-gedreven agenda voor influencers en fans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
