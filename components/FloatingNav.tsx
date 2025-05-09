'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { HomeIcon, InfoIcon } from 'lucide-react'

export default function FloatingNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white shadow-xl border border-gray-200 rounded-full px-6 py-2 flex gap-8 items-center backdrop-blur-md">
      <NavLink href="/" icon={<HomeIcon className="w-5 h-5" />} label="Home" active={pathname === '/'} />
      <NavLink href="/about" icon={<InfoIcon className="w-5 h-5" />} label="About" active={pathname === '/about'} />
    </nav>
  )
}

function NavLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link href={href}>
      <div className={cn(
        "flex flex-col items-center text-xs font-medium transition",
        active ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
      )}>
        {icon}
        {label}
      </div>
    </Link>
  )
}
