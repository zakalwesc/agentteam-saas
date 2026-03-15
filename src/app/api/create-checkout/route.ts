import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

const PLANS = {
  starter: {
    name: 'Starter',
    price: 29900,
    description: 'AI Sales + Marketing Agent — Starter Plan',
  },
  pro: {
    name: 'Pro',
    price: 49900,
    description: 'AI Sales + Marketing Agent — Pro Plan',
  },
};

export async function POST(req: NextRequest) {
  try {
    const { plan, email } = await req.json();
    const planData = PLANS[plan as keyof typeof PLANS];

    if (!planData) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://agentteam.ai';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `AgentTeam ${planData.name}`,
              description: planData.description,
            },
            unit_amount: planData.price,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
      },
      success_url: `${baseUrl}/dashboard?success=true&plan=${plan}`,
      cancel_url: `${baseUrl}/#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
