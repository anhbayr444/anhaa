"use client"

import Link from "next/link"
import MobileMenu from "./mobile-menu"
import { Button } from "./ui/button"

export default function Header({onNavigate}) {
  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-bold">
            anhbayr
          </Link>
          
          <nav className="hidden md:flex space-x-8 cursor-pointer">
            <div onClick={()=>onNavigate("home")} className="text-gray-900 hover:text-blue-500 transition-colors">
              Home
            </div>
            <div onClick={()=>onNavigate("about")} className="text-gray-900 hover:text-blue-500 transition-colors">
              About
            </div>
            <div onClick={()=>onNavigate("portfolio")} className="text-gray-900 hover:text-blue-500 transition-colors">
              Portfolio
            </div>
            <div onClick={()=>onNavigate("price")} className="text-gray-900 hover:text-blue-500 transition-colors">
              Price
            </div>
            <div onClick={()=>onNavigate("blog")} className="text-gray-900 hover:text-blue-500 transition-colors">
              Blog
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors hidden md:block">
              Let's Talk
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
