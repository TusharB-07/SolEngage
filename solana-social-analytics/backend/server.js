const express = require('express');
const cors = require('cors');
const insightsRouter = require('./routes/insights');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/insights', insightsRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Solana Social Analytics Backend' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
