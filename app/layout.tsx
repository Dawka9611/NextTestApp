import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className='flex flex-col border-2 border-green-500 h-screen'>
          <NavigationBar />
          <div className='flex flex-1 border-2 border-blue-500 '>
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
