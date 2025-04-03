"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (e, selector) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to ${selector}`);
    } else {
      console.error(`Element not found: ${selector}`);
    }
  };
  return (
    <>
    <div className="fixed inset-0 z-50 bg-black animate-fade-out pointer-events-none" />

    <header className="fixed z-50 w-[100vw] flex flex-col justify-center items-center border-2 border-white/10 backdrop-blur-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-transparent rounded-[10px] text-[1.5em]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link href="/" onClick={(e) => scrollToSection(e, ".HelloThereContainer")} className="text-6xl font-display tracking-tight">
              JIAN BING
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-display">
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#aboutme")}
              className="text-4xl font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="text-4xl font-medium hover:text-gray-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, ".experiencecontainer")}
              className="text-4xl font-medium hover:text-gray-600 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#skills")}
              className="text-4xl font-medium hover:text-gray-600 transition-colors"
            >
              Skills
            </Link>
        
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, ".contactcontainer")}
              className="px-4 py-2 rounded-full bg-accent text-black font-medium text-sm hover:bg-accent/80 transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="#contact"
                className="block w-full px-4 py-2 text-center rounded-full bg-accent text-black font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
