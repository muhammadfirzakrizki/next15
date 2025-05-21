// app/(auth)/template.tsx
'use client'

import '@/app/globals.css'
import './style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [inputValue, setInputValue] = useState('')

  const navLinks = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
    { href: '/forgot-password', label: 'Forgot Password' },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
          placeholder="Test input"
        />
        {navLinks.map((link) => (
          <div className="flex justify-center mt-2" key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                'text-blue-500 hover:underline',
                pathname === link.href && 'font-bold underline text-orange-600'
              )}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      <main>{children}</main>
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <p className="text-center">Footer Auth</p>
      </footer>
    </div>
  )
}
