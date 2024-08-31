const axios = require('axios');

class MSIAI {
    constructor() {
        this.baseUrl = 'https://www.msii.xyz/api/yapay-zeka';
    }

    async chat(options) {
        const { model, prompt, system } = options;

        if (!model || !prompt) {
            throw new Error('Model and prompt are required.');
        }

        let url = `${this.baseUrl}?model=${encodeURIComponent(model)}&prompt=${encodeURIComponent(prompt)}`;
        
        if (system) {
            url += `&system=${encodeURIComponent(system)}`;
        }

        try {
            const response = await axios.get(url);
            return { reply: response.data.response };
        } catch (error) {
            throw new Error(`API request failed: ${error.message}`);
        }
    }

    static getModelList() {
        return [
            "mixtral",
            "llama",
            "gpt-4o-mini",
            "claude-3-haiku"
        ];
    }
}

module.exports = MSIAI;
