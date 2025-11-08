import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid lg:grid-cols-2 items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            Modern Digital University Portal
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Premium, minimal and student-first university experience
          </h1>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            A refined portal for admissions, exams, results and administration. Built for clarity, speed and accessibility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portal" className="px-5 py-3 rounded-xl text-white bg-neutral-900 hover:bg-neutral-800">
              Enter Portal
            </a>
            <a href="#programs" className="px-5 py-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300">
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] lg:h-[80vh]">
        <Spline scene="https://prod.spline.design/6q0aY8qJkI9o1Y6T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
}
