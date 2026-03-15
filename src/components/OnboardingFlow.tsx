'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, Building2, Target, Upload, Link2, Zap } from 'lucide-react';

type BusinessContext = {
  businessName: string;
  description: string;
  industry: string;
  companySize: string;
  icp: string;
  painPoints: string;
  voiceSample: string;
  crmTool: string;
  emailTool: string;
  linkedinConnected: boolean;
};

export default function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [context, setContext] = useState<BusinessContext>({
    businessName: '',
    description: '',
    industry: '',
    companySize: '',
    icp: '',
    painPoints: '',
    voiceSample: '',
    crmTool: '',
    emailTool: '',
    linkedinConnected: false,
  });
  const [launching, setLaunching] = useState(false);

  const update = (field: keyof BusinessContext, value: string | boolean) =>
    setContext((prev) => ({ ...prev, [field]: value }));

  const launch = async () => {
    setLaunching(true);
    await new Promise((r) => setTimeout(r, 2500));
    setLaunching(false);
    router.push('/dashboard?onboarded=true');
  };

  const steps = [
    { num: 1, label: 'Your Business' },
    { num: 2, label: 'Your Voice' },
    { num: 3, label: 'Connect Tools' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-50 flex flex-col">
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-brand-600 to-accent-500 rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-gray-900">AgentTeam</span>
        </div>
        <div className="flex items-center gap-2">
          {steps.map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step > s.num
                    ? 'bg-accent-500 text-white'
                    : step === s.num
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span className={`text-xs hidden sm:block ${step === s.num ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                {s.label}
              </span>
              {s.num < 3 && <div className="w-8 h-px bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Tell us about your business</h2>
                  <p className="text-sm text-gray-500">Your agents will be tailored to your specific niche</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    placeholder="Acme Consulting"
                    value={context.businessName}
                    onChange={(e) => update('businessName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What do you do? (be specific)</label>
                  <textarea
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 h-20 resize-none"
                    placeholder="We help B2B SaaS companies reduce churn through proactive customer success programs..."
                    value={context.description}
                    onChange={(e) => update('description', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Industry</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      value={context.industry}
                      onChange={(e) => update('industry', e.target.value)}
                    >
                      <option value="">Select industry</option>
                      <option>SaaS / Technology</option>
                      <option>Professional Services</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>E-commerce</option>
                      <option>Manufacturing</option>
                      <option>Real Estate</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      value={context.companySize}
                      onChange={(e) => update('companySize', e.target.value)}
                    >
                      <option value="">Select size</option>
                      <option>1–10 employees</option>
                      <option>11–50 employees</option>
                      <option>51–200 employees</option>
                      <option>201–1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ideal Customer Profile</label>
                  <textarea
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 h-20 resize-none"
                    placeholder="VP of Sales or Revenue Ops at B2B SaaS companies with 50-500 employees, struggling with low SDR productivity..."
                    value={context.icp}
                    onChange={(e) => update('icp', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Top Pain Points You Solve</label>
                  <textarea
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 h-20 resize-none"
                    placeholder="High SDR turnover, inconsistent pipeline, missed quota, slow ramp time..."
                    value={context.painPoints}
                    onChange={(e) => update('painPoints', e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!context.businessName || !context.description}
                className="w-full mt-6 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Upload className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Teach your agents your voice</h2>
                  <p className="text-sm text-gray-500">Upload samples so your AI mirrors your authentic style</p>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-6 hover:border-brand-300 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600 mb-1">Drop files here or click to upload</p>
                <p className="text-xs text-gray-400">Proposals, pitch decks, email templates, case studies (PDF, DOCX, TXT)</p>
                <button className="mt-3 text-xs text-brand-600 font-medium hover:underline">Browse files</button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Or paste a sample email/message you've sent
                </label>
                <textarea
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 h-32 resize-none"
                  placeholder="Hi [Name], I came across your recent LinkedIn post about scaling your sales team... I wanted to share how we helped [Similar Company] increase their qualified pipeline by 3x without adding headcount."
                  value={context.voiceSample}
                  onChange={(e) => update('voiceSample', e.target.value)}
                />
              </div>

              <div className="bg-brand-50 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-brand-700">
                    <strong>Pro tip:</strong> The more examples you provide, the more accurate your agent's voice will be.
                    You can always add more after launch.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Connect your tools</h2>
                  <p className="text-sm text-gray-500">Integrate your existing stack for seamless automation</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 'crm',
                    label: 'CRM',
                    field: 'crmTool' as const,
                    options: ['HubSpot', 'Salesforce', 'Pipedrive', 'Notion', "I'll set up later"],
                    icon: '🗂️',
                  },
                  {
                    id: 'email',
                    label: 'Email Provider',
                    field: 'emailTool' as const,
                    options: ['Gmail', 'Outlook / Microsoft 365', 'Custom SMTP', "I'll set up later"],
                    icon: '📧',
                  },
                ].map((tool) => (
                  <div key={tool.id} className="border border-gray-200 rounded-xl p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {tool.icon} {tool.label}
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      value={(context as any)[tool.field]}
                      onChange={(e) => update(tool.field, e.target.value)}
                    >
                      <option value="">Select {tool.label}</option>
                      {tool.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                ))}

                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>💼</span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">LinkedIn</p>
                        <p className="text-xs text-gray-400">For automated outreach and content posting</p>
                      </div>
                    </div>
                    <button
                      onClick={() => update('linkedinConnected', !context.linkedinConnected)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        context.linkedinConnected
                          ? 'bg-accent-100 text-accent-700 border border-accent-300'
                          : 'bg-brand-600 text-white hover:bg-brand-700'
                      }`}
                    >
                      {context.linkedinConnected ? '✓ Connected' : 'Connect'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> You can skip integrations and set them up later in your dashboard. Your agents
                  will work in demo mode until connected.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={launch}
                  disabled={launching}
                  className="flex-1 bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-700 hover:to-accent-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70"
                >
                  {launching ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Launching agents...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" /> Launch My Agents
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
