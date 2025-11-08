import { BookOpen, FileText, Calendar, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Programs & Curriculum',
    desc: 'Discover courses, credits and syllabi with a clean, guided structure.'
  },
  {
    icon: FileText,
    title: 'Examinations',
    desc: 'Timetables, hall tickets and instructions — clearly organized.'
  },
  {
    icon: Calendar,
    title: 'Academic Calendar',
    desc: 'All key dates at a glance with smart reminders.'
  },
  {
    icon: CheckCircle2,
    title: 'Results & Certificates',
    desc: 'Instant access to results, transcripts and digital certificates.'
  }
];

export default function Features() {
  return (
    <section id="programs" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">A cleaner way to navigate university life</h2>
          <p className="mt-3 text-neutral-600">Designed to reduce clicks and confusion. Everything you need, right where you expect it.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-neutral-900 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
