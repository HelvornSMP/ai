# AI Chatbot - Dark Gaming Theme

A sleek AI chatbot with a dark gaming aesthetic inspired by HelvornNetwork, powered by Groq's fast AI models.

## 🎮 Features

- **Dark Gaming Theme**: Purple/blue gradient design with animated star background
- **Groq AI Integration**: Ultra-fast responses using Llama 3.1 70B
- **Modern UI**: Glassmorphism effects, smooth animations, and responsive design
- **Real-time Chat**: Typing indicators and timestamp display
- **Vercel Ready**: Optimized for serverless deployment

## 🚀 Quick Deploy to Vercel

### Method 1: Add Your API Key Directly to Code

1. **Open `api/chat.js`**
2. **Find this line:**
   ```javascript
   const GROQ_API_KEY = process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY_HERE';
   ```
3. **Replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key:**
   ```javascript
   const GROQ_API_KEY = process.env.GROQ_API_KEY || 'gsk_YOUR_ACTUAL_KEY_HERE';
   ```
4. **Save the file**

### Method 2: Use Environment Variables (Recommended)

1. **Push code to GitHub**
2. **Go to [Vercel](https://vercel.com/)**
3. **Import your repository**
4. **Add Environment Variable:**
   - Key: `GROQ_API_KEY`
   - Value: Your Groq API key
5. **Click Deploy**

## 🔑 Getting Your Groq API Key

1. Go to https://console.groq.com/
2. Sign up for free (no credit card required)
3. Navigate to "API Keys"
4. Click "Create API Key"
5. Copy your key (starts with `gsk_...`)

## 💻 Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Create .env file
echo "GROQ_API_KEY=your_key_here" > .env

# Run locally
vercel dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
ai-chatbot-v2/
├── api/
│   └── chat.js          # Groq API integration
├── public/
│   ├── index.html       # Main page
│   ├── styles.css       # Dark gaming theme
│   └── script.js        # Chat functionality
├── vercel.json          # Vercel config
├── package.json         # Dependencies
└── README.md           # This file
```

## 🎨 Customization

### Change AI Model

Edit `api/chat.js`:
```javascript
model: 'llama-3.1-70b-versatile',  // Current
// Options:
// 'llama-3.1-8b-instant'   - Faster, lighter
// 'mixtral-8x7b-32768'     - Longer context
// 'gemma2-9b-it'           - Alternative model
```

### Modify System Prompt

Edit the system message in `api/chat.js`:
```javascript
{ 
  role: 'system', 
  content: 'Your custom instructions here' 
}
```

### Change Theme Colors

Edit CSS variables in `public/styles.css`:
```css
:root {
    --primary: #8b5cf6;      /* Purple */
    --secondary: #3b82f6;    /* Blue */
    --bg-dark: #0a0a0f;      /* Background */
}
```

## ⚡ Performance

- **Groq Latency**: ~300-500ms average response time
- **Free Tier**: 14,400 requests per day
- **Models**: Llama 3.1, Mixtral, Gemma2

## 🔒 Security Notes

- Never commit your API key to GitHub
- Use environment variables in production
- Add rate limiting if needed
- Consider adding user authentication

## 📱 Mobile Support

Fully responsive design with:
- Touch-friendly interface
- Adaptive layouts
- Optimized for all screen sizes

## 🆘 Troubleshooting

### API Key Errors
- Check if key is correct (starts with `gsk_`)
- Verify it's properly added to environment variables
- Redeploy after adding the key

### Connection Errors
- Ensure API endpoint is `/api/chat`
- Check browser console for errors
- Verify Vercel deployment succeeded

### UI Issues
- Clear browser cache
- Check if all files are deployed
- Verify fonts are loading

## 📄 License

MIT License - Free to use and modify!

## 🌟 Credits

- Design inspired by HelvornNetwork
- Powered by Groq AI
- Fonts: Orbitron & Rajdhani (Google Fonts)
