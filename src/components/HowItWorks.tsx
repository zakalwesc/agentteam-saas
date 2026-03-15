import { ClipboardList, Upload, Plug, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Describe Your Business',
      description:
        'Tell us about your company, ideal customer profile (industry, company size, pain points), and what makes you different. Takes 5 minutes.',
      color: 'text-brand-600',
      bg: 'bg-brand-50',
      border: 'border-brand-200',
    },
    {
      number: '02',
      icon: Upload,
      title: 'Upload Your Playbook',
      description:
        'Share past proposals, pitch decks, or email samples. Your AI agents learn your voice, style, and proven messaging.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
    },
    {
      number: '03',
      icon: Plug,
      title: 'Connect Your Tools',
      description:
        'Integrate your CRM (HubSpot, Salesforce), email, and LinkedIn. One-click connections, no engineering needed.',
      color: 'text-accent-600',
      bg: 'bg-accent-50',
      border: 'border-accent-200',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Your Agent Team Goes Live',
      description:
        'Sales and Marketing agents start working immediately — qualifying leads, booking meetings, creating content, running campaigns.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Simple Setup</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Live in under 10 minutes
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No complex integrations. No engineering team required. Just follow three steps and your AI team is ready to
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0 -translate-y-px" />
              )}
              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${step.bg} ${step.border} border rounded-xl flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <span className="text-4xl font-extrabold text-gray-100">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
