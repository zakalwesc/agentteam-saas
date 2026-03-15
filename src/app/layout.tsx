import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentTeam — Your AI Sales & Marketing Team',
  description:
    'AgentTeam provides an autonomous AI sales and marketing team for B2B service businesses. Works 24/7, learns your business, scales with you.',
  keywords: 'AI sales agent, marketing automation, lead generation, B2B, SaaS',
  openGraph: {
    title: 'AgentTeam — Your AI Sales & Marketing Team',
    description: 'Replace $4-8k/month salaries with a $300-500/month AI team that works 24/7.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
