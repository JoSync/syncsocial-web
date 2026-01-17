import './globals.css'

export const metadata = {
  title: 'SyncSocial',
  icons: {
    icon: '/icon.svg', // Hij zoekt nu in de public map naar icon.svg
  },
};

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
