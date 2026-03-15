'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-accent-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AgentTeam</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
              How It Works
            </a>
            <a href="#agents" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
              Agents
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-brand-600 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/onboarding"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#how-it-works" className="block text-sm text-gray-600 py-2" onClick={() => setIsOpen(false)}>
            How It Works
          </a>
          <a href="#agents" className="block text-sm text-gray-600 py-2" onClick={() => setIsOpen(false)}>
            Agents
          </a>
          <a href="#pricing" className="block text-sm text-gray-600 py-2" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#faq" className="block text-sm text-gray-600 py-2" onClick={() => setIsOpen(false)}>
            FAQ
          </a>
          <Link
            href="/onboarding"
            className="block bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
}
