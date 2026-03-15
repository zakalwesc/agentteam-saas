'use client';
import { useState } from 'react';
import {
  Zap,
  BarChart3,
  Mail,
  Calendar,
  Users,
  MessageSquare,
  TrendingUp,
  Settings,
  Bell,
  UserCheck,
  Megaphone,
  Send,
  ArrowUpRight,
  ChevronRight,
  Loader2,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

type AgentType = 'sales' | 'marketing';

const mockActivities = [
  { id: 1, type: 'lead', icon: Users, message: 'Qualified lead: James Chen, VP Sales at TechFlow Inc.', time: '3 min ago', color: 'text-accent-600', bg: 'bg-accent-50' },
  { id: 2, type: 'meeting', icon: Calendar, message: 'Meeting booked: Discovery call with Acme Corp — Tue 2pm', time: '28 min ago', color: 'text-brand-600', bg: 'bg-brand-50' },
  { id: 3, type: 'email', icon: Mail, message: 'Follow-up sequence sent to 18 prospects in Series B SaaS list', time: '1h ago', color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 4, type: 'content', icon: MessageSquare, message: 'LinkedIn post published: "3 signs your SDR team is burning out"', time: '3h ago', color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 5, type: 'lead', icon: Users, message: 'Qualified lead: Maria Santos, Founder at GrowthPath', time: '4h ago', color: 'text-accent-600', bg: 'bg-accent-50' },
  { id: 6, type: 'email', icon: Mail, message: 'Cold email campaign launched: 52 healthcare SaaS targets', time: '6h ago', color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function DashboardApp() {
  const [activeAgent, setActiveAgent] = useState<AgentType>('sales');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!chatInput.trim() || loading) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          agentType: activeAgent,
          businessContext: {
            businessName: 'Your Company',
            description: 'B2B service business',
            icp: 'Decision makers at SMB companies',
            industry: 'Technology',
          },
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response || data.error }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error connecting to agent. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: Mail, label: 'Outreach Sent', value: '247', change: '+18%', color: 'text-brand-600', bg: 'bg-brand-50' },
    { icon: TrendingUp, label: 'Reply Rate', value: '34%', change: '+5%', color: 'text-accent-600', bg: 'bg-accent-50' },
    { icon: Calendar, label: 'Meetings Booked', value: '12', change: '+3', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Users, label: 'Pipeline Value', value: '$84k', change: '+$22k', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-gray-900 text-white flex-col hidden lg:flex">
        <div className="p-5 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-accent-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">AgentTeam</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: BarChart3, label: 'Overview', active: true },
            { icon: UserCheck, label: 'Sales Agent', active: false },
            { icon: Megaphone, label: 'Marketing Agent', active: false },
            { icon: Users, label: 'Leads', active: false },
            { icon: Calendar, label: 'Meetings', active: false },
            { icon: Mail, label: 'Campaigns', active: false },
            { icon: TrendingUp, label: 'Analytics', active: false },
            { icon: Settings, label: 'Settings', active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? 'bg-brand-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-xs font-bold">JD</div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </div>
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Back to site
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
            <p className="text-xs text-gray-500">Your agents are active and working 🟢</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Link href="/#pricing" className="text-xs bg-brand-600 text-white px-3 py-1.5 rounded-lg hover:bg-brand-700 transition-colors font-medium">
              Upgrade Plan
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map(({ icon: Icon, label, value, change, color, bg }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-0.5">{value}</div>
                <div className="text-xs text-gray-500 mb-2">{label}</div>
                <div className="flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-accent-500" />
                  <span className="text-xs text-accent-600 font-medium">{change} this month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Agent Activity Feed</h2>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"></span> Live
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="px-5 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 ${activity.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 leading-relaxed">{activity.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
              <div className="px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-semibold text-gray-900">Chat with Your Agent</h2>
                </div>
                <div className="flex rounded-lg bg-gray-100 p-1">
                  <button
                    onClick={() => { setActiveAgent('sales'); setMessages([]); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeAgent === 'sales' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" /> Sales
                  </button>
                  <button
                    onClick={() => { setActiveAgent('marketing'); setMessages([]); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeAgent === 'marketing' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Megaphone className="w-3.5 h-3.5" /> Marketing
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px] max-h-[320px]">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                      activeAgent === 'sales' ? 'bg-brand-50' : 'bg-accent-50'
                    }`}>
                      {activeAgent === 'sales'
                        ? <UserCheck className="w-6 h-6 text-brand-600" />
                        : <Megaphone className="w-6 h-6 text-accent-600" />}
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {activeAgent === 'sales' ? 'Sales Agent Ready' : 'Marketing Agent Ready'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activeAgent === 'sales'
                        ? 'Ask me to write outreach, qualify leads, or craft follow-ups'
                        : 'Ask me to create content, write campaigns, or suggest strategies'}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {(activeAgent === 'sales'
                        ? ['Write LinkedIn outreach', 'Draft follow-up email', 'Qualify this lead']
                        : ['Write LinkedIn post', 'Create email campaign', 'Content ideas']
                      ).map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => { setChatInput(prompt); }}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${ msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-brand-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 text-gray-500 animate-spin" />
                      <span className="text-xs text-gray-500">Agent thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 border-t border-gray-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                    placeholder={`Ask your ${activeAgent} agent...`}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !chatInput.trim()}
                    className="bg-brand-600 hover:bg-brand-700 disabled:bg-gray-200 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
