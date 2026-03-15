import { BarChart3, TrendingUp, Mail, Calendar, Users, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-wider">Full Visibility</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Your pipeline, always in view
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-time dashboard showing every activity your AI team takes, every lead in your pipeline, every meeting
            booked.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
          <div className="bg-gray-750 border-b border-gray-700 px-6 py-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-400 font-medium">AgentTeam Dashboard</span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Mail, label: 'Outreach Sent', value: '247', change: '+18%', color: 'text-brand-400', bg: 'bg-brand-900/40' },
                { icon: TrendingUp, label: 'Reply Rate', value: '34%', change: '+5%', color: 'text-accent-400', bg: 'bg-accent-900/40' },
                { icon: Calendar, label: 'Meetings Booked', value: '12', change: '+3', color: 'text-purple-400', bg: 'bg-purple-900/40' },
                { icon: Users, label: 'Pipeline Value', value: '$84k', change: '+$22k', color: 'text-orange-400', bg: 'bg-orange-900/40' },
              ].map(({ icon: Icon, label, value, change, color, bg }) => (
                <div key={label} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                  <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-gray-400 mb-2">{label}</div>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-accent-400" />
                    <span className="text-xs text-accent-400 font-medium">{change} this month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-300">Outreach Activity</h3>
                  <BarChart3 className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100, 80, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">2 weeks ago</span>
                  <span className="text-xs text-gray-500">Today</span>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'Lead qualified', name: 'Acme Corp', time: '2m ago', dot: 'bg-accent-400' },
                    { action: 'Meeting booked', name: 'TechFlow', time: '15m ago', dot: 'bg-brand-400' },
                    { action: 'Email sent', name: '24 prospects', time: '1h ago', dot: 'bg-purple-400' },
                    { action: 'Follow-up', name: 'SalesPath', time: '2h ago', dot: 'bg-orange-400' },
                    { action: 'Post published', name: 'LinkedIn', time: '3h ago', dot: 'bg-blue-400' },
                  ].map((item) => (
                    <div key={item.name + item.time} className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 ${item.dot} rounded-full flex-shrink-0`}></div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-gray-300">{item.action}</span>
                        <span className="text-xs text-gray-500 ml-1">· {item.name}</span>
                      </div>
                      <span className="text-xs text-gray-600 flex-shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
