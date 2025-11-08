import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Admissions', href: '#' },
    { label: 'Examinations', href: '#exams' },
    { label: 'Results', href: '#results' },
    { label: 'Downloads', href: '#' },
    { label: 'Help Center', href: '#support' },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-xl font-semibold tracking-tight">Digital University+</div>
            <p className="mt-2 text-sm text-neutral-600 max-w-md">A premium, minimal and accessible experience for students and administrators. Faster, clearer, and designed with care.</p>
            <div className="mt-4 flex items-center gap-3 text-neutral-500">
              <a aria-label="Facebook" href="#" className="hover:text-neutral-900"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="#" className="hover:text-neutral-900"><Twitter className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="#" className="hover:text-neutral-900"><Youtube className="h-5 w-5" /></a>
              <a aria-label="Email" href="#" className="hover:text-neutral-900"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-neutral-600 hover:text-neutral-900">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Digital University+. All rights reserved.</div>
      </div>
    </footer>
  );
}
