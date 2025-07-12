import './globals.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Youtube Clone',
  description: 'App description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex min-h-screen w-full">
          <Sidebar />
          <div className="flex-1">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
