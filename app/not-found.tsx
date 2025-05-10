'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6">
        <Button className="text-white bg-blue-600 hover:bg-blue-700 transition">Go Home</Button>
      </Link>
    </div>
  )
}
