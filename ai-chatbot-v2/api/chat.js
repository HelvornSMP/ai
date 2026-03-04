export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // GROQ API CONFIGURATION
    // Replace 'YOUR_GROQ_API_KEY_HERE' with your actual Groq API key
    const GROQ_API_KEY = process.env.GROQ_API_KEY || 'put the damn key here';
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful AI assistant. Be concise, friendly, and informative in your responses.' 
          },
          { 
            role: 'user', 
            content: message 
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Groq API error:', data);
      throw new Error(data.error?.message || 'Groq API error');
    }

    return res.status(200).json({
      response: data.choices[0].message.content
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to get AI response',
      details: error.message
    });
  }
}
