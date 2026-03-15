import { UserCheck, Megaphone, Check } from 'lucide-react';

export default function Agents() {
  const agents = [
    {
      icon: UserCheck,
      name: 'Sales Agent',
      tagline: 'Your always-on SDR that never sleeps',
      description:
        'Qualifies every inbound lead, crafts personalized LinkedIn outreach, schedules discovery calls, and sends intelligent follow-ups — all without you lifting a finger.',
      features: [
        'Inbound lead qualification & scoring',
        'Personalized LinkedIn connection + outreach',
        'Multi-step email follow-up sequences',
        'Calendar scheduling & reminders',
        'CRM updates & pipeline management',
        'Objection handling & nurture flows',
      ],
      gradient: 'from-brand-600 to-brand-700',
      lightBg: 'bg-brand-50',
      textColor: 'text-brand-600',
      checkColor: 'text-brand-500',
      stat: '8.4 meetings/mo',
      statLabel: 'avg booked',
    },
    {
      icon: Megaphone,
      name: 'Marketing Agent',
      tagline: 'Your creative director and campaign manager',
      description:
        'Creates compelling content, manages your social media presence, runs email campaigns, and analyzes performance to continuously improve your marketing ROI.',
      features: [
        'LinkedIn thought leadership content',
        'Email newsletter campaigns',
        'Lead magnet creation & optimization',
        'Social media content calendar',
        'Campaign analytics & A/B testing',
        'SEO blog posts & case studies',
      ],
      gradient: 'from-accent-500 to-accent-600',
      lightBg: 'bg-accent-50',
      textColor: 'text-accent-600',
      checkColor: 'text-accent-500',
      stat: '42% open rate',
      statLabel: 'avg email campaigns',
    },
  ];

  return (
    <section id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">The Team</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Two agents. Infinite leverage.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Each agent is purpose-built for its role, trained on your business, and improves continuously from
            real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`bg-gradient-to-br ${agent.gradient} p-8 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <p className="text-white/80 text-sm">{agent.tagline}</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{agent.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
                  <span className="text-lg font-bold">{agent.stat}</span>
                  <span className="text-white/70 text-xs">{agent.statLabel}</span>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">What it handles</p>
                <ul className="space-y-3">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 ${agent.lightBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-3 h-3 ${agent.checkColor}`} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
