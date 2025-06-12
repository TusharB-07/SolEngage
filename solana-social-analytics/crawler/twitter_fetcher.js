const axios = require('axios');

class TwitterFetcher {
    constructor(bearerToken) {
        this.bearerToken = bearerToken;
        this.baseUrl = 'https://api.twitter.com/2';
    }

    async fetchTweets(query) {
        try {
            const response = await axios.get(`${this.baseUrl}/tweets/search/recent`, {
                headers: {
                    'Authorization': `Bearer ${this.bearerToken}`
                },
                params: {
                    query: query,
                    max_results: 10
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching tweets:', error);
            return null;
        }
    }
}

module.exports = TwitterFetcher;
