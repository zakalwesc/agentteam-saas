# AgentTeam — AI Sales & Marketing SaaS

A complete SaaS platform for B2B service businesses featuring an autonomous AI sales and marketing agent team.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe (subscriptions with 14-day trial)
- **AI**: Anthropic Claude API
- **Icons**: Lucide React
- **Deploy**: Vercel

## Features

- 🏠 **Landing page** with full sales copy, testimonials, and pricing
- 🔄 **3-step onboarding flow** (business profile → voice samples → tool connections)
- 🤖 **AI Agent Chat** — interact with Sales or Marketing agents powered by Claude
- 📊 **Live Dashboard** with activity feed, pipeline metrics, and agent chat
- 💳 **Stripe Checkout** with 14-day free trial for Starter ($299/mo) and Pro ($499/mo)
- 📱 **Fully responsive** — mobile-first design

## Setup

### 1. Clone & Install

```bash
git clone https://github.com/your-username/agentteam-saas
cd agentteam-saas
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```env
# Anthropic
ANTHROPIC_API_KEY=your_anthropic_api_key

# Stripe
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51T4TD3CedoFOFPt29c2zcTXjpSg6huTutW8ZlqgjeDlpex1v7ezgbADjDfANH1AyZ4GfkpC8ttg3XzIOxGxa9NNI00D2vFRysw
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stripe Setup

1. Create an account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. For webhooks (local): use [Stripe CLI](https://stripe.com/docs/stripe-cli)
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. For production: add webhook endpoint in Stripe Dashboard pointing to `https://yourdomain.com/api/webhooks/stripe`
   - Events to listen for: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

**Set environment variables** in Vercel Dashboard → Project → Settings → Environment Variables.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── onboarding/page.tsx   # 3-step onboarding
│   ├── dashboard/page.tsx    # App dashboard
│   └── api/
│       ├── chat/route.ts         # Claude AI agent chat
│       ├── create-checkout/route.ts  # Stripe checkout
│       └── webhooks/stripe/route.ts  # Stripe webhooks
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── HowItWorks.tsx
│   ├── Agents.tsx
│   ├── Dashboard.tsx         # Marketing section dashboard preview
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── OnboardingFlow.tsx    # Interactive onboarding
│   └── DashboardApp.tsx      # Full app dashboard with agent chat
```

## License

MIT
