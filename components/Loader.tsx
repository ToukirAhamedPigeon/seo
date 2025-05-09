'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Spinner } from './Spinner'

export const Loader = () => {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500) // simulate loading time
    return () => clearTimeout(timer)
  }, [pathname])

  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Spinner />
    </div>
  ) : null
}
