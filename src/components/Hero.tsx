'use client';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-brand-700 font-medium">14-day free trial • No credit card required</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your AI sales and{' '}
            <span className="gradient-text">marketing team.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-medium mb-4">
            Works 24/7, learns your business, scales with you.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Replace $4–8k/month in salaries with a $300–500/month AI team that handles LinkedIn outreach, email
            campaigns, lead qualification, and meeting scheduling — automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300 hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-all"
            >
              <Play className="w-4 h-4 text-brand-600" />
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              { icon: CheckCircle, text: 'No engineering required' },
              { icon: CheckCircle, text: 'Live in under 10 minutes' },
              { icon: CheckCircle, text: 'Cancel anytime' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: TrendingUp,
              value: '3.2x',
              label: 'Average pipeline increase',
              color: 'text-brand-600',
              bg: 'bg-brand-50',
            },
            {
              icon: Calendar,
              value: '8.4',
              label: 'Avg. meetings booked/month',
              color: 'text-accent-600',
              bg: 'bg-accent-50',
            },
            {
              icon: Users,
              value: '94%',
              label: 'Customer retention rate',
              color: 'text-purple-600',
              bg: 'bg-purple-50',
            },
          ].map(({ icon: Icon, value, label, color, bg }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={`text-3xl font-extrabold ${color} mb-1`}>{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 sm:p-8 text-white text-center max-w-2xl mx-auto shadow-xl shadow-brand-200">
          <p className="text-lg font-semibold mb-1">💡 ROI Reality Check</p>
          <p className="text-brand-100">
            Just <strong className="text-white">1 extra qualified meeting per month</strong> from your AI team pays for
            the entire subscription. Most customers see{' '}
            <strong className="text-white">5–12 additional meetings in month one.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
