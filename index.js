const axios = require('axios');

class MSIAI {
    constructor(apiKey) {
        this.baseUrl = 'https://www.msii.xyz/api/yapay-zeka';
        this.apiKey = apiKey;
    }

    async chat(options) {
        const { model, prompt, system } = options;

        if (!this.apiKey) {
            throw new Error('API key is required. Please provide an API key when initializing MSIAI. If you don\'t have an API key, you can get a free one by joining our Discord server: discord.gg/msidev');
        }

        if (!model || !prompt) {
            throw new Error('Model and prompt are required. If you need assistance, please join our Discord server: discord.gg/msidev');
        }

        const params = new URLSearchParams({
            model: model,
            prompt: prompt,
            apiKey: this.apiKey
        });

        if (system) {
            params.append('system', system);
        }

        const url = `${this.baseUrl}?${params.toString()}`;

        try {
            const response = await axios.get(url);
            return { reply: response.data.response };
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error(`Invalid API key. Please use a valid API key or get a new one from our Discord server: discord.gg/msidev`);
            } else if (error.response && error.response.status === 429) {
                throw new Error(`Daily usage limit exceeded. For more information, please join our Discord server: discord.gg/msidev`);
            } else {
                throw new Error(`API request failed: ${error.message}. For help, please join our Discord server: discord.gg/msidev`);
            }
        }
    }

    static getModelList() {
        return [
            'gpt-3.5-turbo',
            'gpt-4',
            'o1-preview',
            'o1-preview-2024-09-12',
            'o1-mini-2024-09-12',
            'o1-mini',
            'gpt-4o-latest',
            'gpt-4o-2024-08-06'
        ];
    }
}

module.exports = MSIAI;
