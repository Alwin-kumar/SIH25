import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({
        response: 'AI service is not configured yet. Please set up the GEMINI_API_KEY environment variable to enable AI chat functionality.',
        error: 'API_KEY_MISSING',
        success: false
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create context about the career guidance platform
    const systemPrompt = `You are an AI Career Advisor for a comprehensive career guidance platform called "Future Forge". You help users with:

1. Career guidance and planning
2. Job role recommendations
3. Skill development advice
4. Resume building tips
5. Interview preparation
6. College and course recommendations
7. Industry insights and trends

Available features in the platform:
- Career Roadmap: Shows different domains (IT, Healthcare, Finance, etc.) with job roles, requirements, and courses
- Resume Builder: AI-powered resume creation with ATS optimization
- Interview Prep: Programming quizzes and aptitude tests
- Industry Insights: Market trends, growth rates, and skill demands
- Colleges: Information about educational institutions
- Courses: Free and paid learning resources

Always provide helpful, encouraging, and practical advice. If users ask about specific features, guide them on how to use the platform effectively. Keep responses conversational but professional.`;

    // Prepare the conversation history for context
    const conversationContext = conversationHistory.slice(-6); // Last 6 messages for context

    // Create the full prompt
    const fullPrompt = `${systemPrompt}\n\nConversation History:\n${conversationContext.map(msg =>
      `${msg.type === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
    ).join('\n')}\n\nUser: ${message}\n\nAssistant:`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const aiResponse = response.text();

    return new Response(JSON.stringify({
      response: aiResponse,
      success: true
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('AI Chat API Error:', error);

    // Fallback responses for common scenarios
    const fallbackResponses = {
      'API_KEY': 'I apologize, but there seems to be an issue with the AI service. Please try again in a moment.',
      'QUOTA': 'I\'m currently at capacity. Please try again in a few minutes.',
      'API_KEY_MISSING': 'AI service is not configured yet. Please set up the GEMINI_API_KEY environment variable to enable AI chat functionality.',
      'default': 'I\'m having trouble connecting to the AI service right now. You can explore our Career Roadmap, Resume Builder, or Interview Prep sections for immediate guidance!'
    };

    const fallbackMessage = error.message.includes('API_KEY')
      ? fallbackResponses.API_KEY
      : error.message.includes('QUOTA')
      ? fallbackResponses.QUOTA
      : error.message.includes('API_KEY_MISSING')
      ? fallbackResponses.API_KEY_MISSING
      : fallbackResponses.default;

    return new Response(JSON.stringify({
      response: fallbackMessage,
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
