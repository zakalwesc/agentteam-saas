'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is AgentTeam different from traditional marketing automation?',
      a: "Traditional automation tools require you to write every email, define every workflow, and constantly update them. AgentTeam's AI agents actually understand your business, write original personalized content, qualify leads intelligently, and improve over time — like having a real team member who never sleeps.",
    },
    {
      q: 'Will the outreach look like it came from a real person?',
      a: "Yes. After your onboarding, the agents learn your voice, tone, and style from the materials you upload. Prospects receive personalized messages that reference their specific situation — not generic templates. Most of our customers' prospects can't tell it's AI-generated.",
    },
    {
      q: 'What integrations do you support?',
      a: 'We integrate with HubSpot, Salesforce, Pipedrive, LinkedIn (via official API), Gmail, Outlook, Calendly, and more. New integrations are added monthly based on customer requests.',
    },
    {
      q: 'How long does setup take?',
      a: "Most customers are fully set up in under 15 minutes. The 3-step onboarding guides you through everything. If you need help, we offer a free 30-minute setup call with every Pro plan.",
    },
    {
      q: 'Is my data safe? Do you train AI on my data?',
      a: 'Your data is encrypted at rest and in transit. We do not train shared AI models on your proprietary business data. Your information is used only to power your own agents.',
    },
    {
      q: 'What happens after the 14-day trial?',
      a: "You'll be prompted to choose a plan. If you don't subscribe, your agents pause and your data is retained for 30 days. No surprise charges — we only bill when you choose to continue.",
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Absolutely. No contracts, no cancellation fees. Cancel with one click from your dashboard. Your billing stops at the end of the current period.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Frequently asked questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
