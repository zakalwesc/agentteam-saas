'use client';
import { useState } from 'react';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const handleCheckout = async (plan: 'starter' | 'pro') => {
    setLoading(plan);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  const plans = [
    {
      id: 'starter' as const,
      icon: Zap,
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for solopreneurs and small teams ready to scale their outreach.',
      features: [
        'Sales Agent (full access)',
        'Marketing Agent (full access)',
        'Up to 500 outreach contacts/mo',
        '3 email sequences',
        'LinkedIn outreach automation',
        'Calendar scheduling integration',
        'CRM sync (HubSpot or Salesforce)',
        'Monthly performance report',
        'Email support',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
      badge: null,
    },
    {
      id: 'pro' as const,
      icon: Crown,
      name: 'Pro',
      price: '$499',
      period: '/month',
      description: 'For agencies and growing teams that need more volume and advanced features.',
      features: [
        'Everything in Starter, plus:',
        'Up to 2,000 outreach contacts/mo',
        'Unlimited email sequences',
        'Multi-channel campaigns',
        'A/B testing & optimization',
        'Advanced lead scoring',
        'Custom agent personas',
        'Priority Slack support',
        'Dedicated onboarding call',
        'White-label reports',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Simple Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Start free. Scale when ready.</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            14-day free trial, no credit card required. Cancel anytime. Every plan includes both agents.
          </p>
        </div>

        <div className="max-w-xs mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email to get started"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.highlighted
                  ? 'border-2 border-brand-500 shadow-xl shadow-brand-100'
                  : 'border border-gray-200 shadow-sm'
              } bg-white`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="p-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.highlighted ? 'bg-brand-600' : 'bg-gray-100'
                  }`}
                >
                  <plan.icon className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>

                <button
                  onClick={() => handleCheckout(plan.id)}
                  disabled={loading === plan.id}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-200'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  } disabled:opacity-60`}
                >
                  {loading === plan.id ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Redirecting...
                    </span>
                  ) : (
                    <>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">14-day free trial • No credit card needed</p>
              </div>

              <div className="px-8 pb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">What's included</p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Compare to hiring: Junior SDR = $50–70k/year + benefits. AgentTeam Pro = $5,988/year.{' '}
          <strong className="text-gray-600">That's 90% savings.</strong>
        </p>
      </div>
    </section>
  );
}
