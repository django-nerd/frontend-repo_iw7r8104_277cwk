import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="portal" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
          <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(600px circle at 0% 0%, rgba(99,102,241,0.08), transparent 40%), radial-gradient(800px circle at 100% 100%, rgba(59,130,246,0.08), transparent 40%)'}} />
          <div className="relative grid lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <ShieldCheck className="h-3.5 w-3.5" />
                Secure access for students and administrators
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">All-in-one unified portal</h3>
              <p className="mt-2 text-neutral-600">Single sign-on, role-based dashboards, and streamlined workflows. Built for speed and simplicity.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#login" className="px-5 py-3 rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 inline-flex items-center gap-2">
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#support" className="px-5 py-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300">Get help</a>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-2 gap-3">
                {["Admissions","Fees","Exams","Results","Certificates","Support"].map((label) => (
                  <div key={label} className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs text-neutral-500">Module</div>
                    <div className="mt-1 font-medium">{label}</div>
                    <div className="mt-3 h-2 w-full bg-neutral-100 rounded-full">
                      <div className="h-2 bg-neutral-900 rounded-full" style={{width: `${60 + Math.random()*35}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
