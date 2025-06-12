# Solana Social Analytics

A comprehensive platform for analyzing social media activity across Discord, Twitter, and Lens Protocol with Solana blockchain integration for rewards and incentives.

## Features

- **Multi-Platform Analytics**: Track engagement across Discord, Twitter, and Lens
- **Solana Integration**: Reward users with custom tokens for social activity
- **Real-time Insights**: Live dashboard with engagement metrics
- **Sentiment Analysis**: AI-powered sentiment tracking
- **Reward System**: Automated token distribution based on activity

## Project Structure

```
solana-social-analytics/
├── frontend/              # React + TypeScript frontend
├── programs/             # Solana smart contracts (Anchor)
├── scripts/              # Deployment and utility scripts
├── crawler/              # Social media data crawlers
├── backend/              # Express.js API server
├── .env                  # Environment variables
└── README.md
```

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Fill in your API keys and configuration

3. **Deploy Smart Contract**
   ```bash
   anchor build
   anchor deploy
   ```

4. **Start Development Servers**
   ```bash
   # Backend
   cd backend && npm start
   
   # Frontend
   cd frontend && npm run dev
   
   # Crawlers
   cd crawler && node discord_bot.js
   ```

## Architecture

- **Frontend**: React with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express
- **Blockchain**: Solana with Anchor framework
- **Data Sources**: Discord API, Twitter API v2, Lens Protocol
- **Database**: (To be implemented)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
