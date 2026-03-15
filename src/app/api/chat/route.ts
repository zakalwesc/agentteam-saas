import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message, agentType, businessContext } = await req.json();

    const systemPrompt =
      agentType === 'sales'
        ? `You are an expert AI Sales Agent for ${businessContext?.businessName || 'a B2B service business'}. 
You specialize in:
- Qualifying inbound leads based on: ${businessContext?.icp || 'ideal customer profiles'}
- Crafting personalized LinkedIn outreach messages
- Writing compelling follow-up email sequences
- Scheduling discovery calls and demos
- Handling objections professionally

Business context: ${businessContext?.description || 'B2B service business'}
Target industry: ${businessContext?.industry || 'Various industries'}
Company size target: ${businessContext?.companySize || 'SMB to Enterprise'}

Provide specific, actionable sales content. Be concise and persuasive.`
        : `You are an expert AI Marketing Agent for ${businessContext?.businessName || 'a B2B service business'}.
You specialize in:
- Creating engaging LinkedIn posts and thought leadership content
- Writing email newsletter campaigns
- Developing lead magnet ideas
- Social media content calendars
- Analytics insights and optimization recommendations

Business context: ${businessContext?.description || 'B2B service business'}
Brand voice: Professional, authoritative, helpful
Target audience: ${businessContext?.icp || 'B2B decision makers'}

Provide specific, ready-to-use marketing content. Be creative and data-driven.`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }],
    });

    const textContent = response.content.find((c) => c.type === 'text');
    return NextResponse.json({
      response: textContent ? textContent.text : 'No response generated.',
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
