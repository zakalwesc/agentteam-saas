export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "We replaced our $7k/month SDR with AgentTeam. First month, booked 11 qualified demos. I can't believe we waited so long.",
      author: 'Sarah K.',
      role: 'Founder, B2B SaaS',
      avatar: 'SK',
      color: 'bg-brand-600',
    },
    {
      quote:
        'Our consulting firm generates consistent inbound now. The LinkedIn outreach alone brought in 3 new clients in 60 days.',
      author: 'Marcus T.',
      role: 'Managing Partner, Strategy Consulting',
      avatar: 'MT',
      color: 'bg-accent-600',
    },
    {
      quote:
        'As a solo coach, I could never afford a full sales team. AgentTeam changed that. My pipeline has never been fuller.',
      author: 'Jennifer L.',
      role: 'Executive Coach',
      avatar: 'JL',
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-10">
          Trusted by consultants, agencies, and SaaS founders
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
