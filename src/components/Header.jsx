import { useState } from 'react';
import { GraduationCap, Search, LogIn, Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Programs', href: '#programs' },
    { label: 'Examinations', href: '#exams' },
    { label: 'Results', href: '#results' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white grid place-items-center shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">
              Digital University+
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search portal"
                className="pl-9 pr-3 py-2 rounded-xl text-sm bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </div>
            <a
              href="#login"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm border border-neutral-300/60 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>
            <a
              href="#portal"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-sm hover:opacity-95"
            >
              <Shield className="h-4 w-4" />
              Open Portal
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search portal"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-sm bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="#login"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm border border-neutral-300/60 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
              </a>
              <a
                href="#portal"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-sm hover:opacity-95"
              >
                <Shield className="h-4 w-4" />
                Open Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
