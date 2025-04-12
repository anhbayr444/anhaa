'use client'
import { useState } from "react"
import Link from "next/link"

import { AlignJustify } from "lucide-react"



export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
          {/* isOpen bol ongoogoiq bnaa */}
          <AlignJustify size={20}/>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20 border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Price
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors w-full">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

