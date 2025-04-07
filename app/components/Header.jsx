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

    <header className="fixed z-50 w-[100vw] flex flex-col justify-between items-center border-2 border-white/10 backdrop-blur-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-transparent rounded-[10px] text-[1.5em]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link href="/" onClick={(e) => scrollToSection(e, ".HelloThereContainer")} className="text-[clamp(30px,5vw,6rem)] text-nowrap font-display tracking-tight">
              JIAN BING
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-display">
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#aboutme")}
              className="text-[clamp(30px,3vw,4rem)] font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="text-[clamp(30px,3vw,4rem)] font-medium hover:text-gray-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, ".experiencecontainer")}
              className="text-[clamp(30px,3vw,4rem)] font-medium hover:text-gray-600 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "#skills")}
              className="text-[clamp(30px,3vw,4rem)] font-medium hover:text-gray-600 transition-colors"
            >
              Skills
            </Link>

            <Link
              href="/"
              onClick={(e) => scrollToSection(e, ".emailme")}
              className="text-[clamp(30px,3vw,4rem)] font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-row justify-between items-center gap-2 hidden md:flex">
          <a
              href="https://github.com/yimjianbing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yim-jian-bing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://instagram.com/yim_jian_bing" // Replace with your Instagram username
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
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
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
