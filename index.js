const axios = require('axios');

class MSIAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://www.msii.xyz/api/yapay-zeka';
    }

    async chat(options) {
        const { model, content, system } = options;

        if (!this.apiKey) {
            throw new Error('API key is required.');
        }

        if (!model || !content) {
            throw new Error('Model and content are required.');
        }

        let url = `${this.baseUrl}?model=${encodeURIComponent(model)}&prompt=${encodeURIComponent(content)}&apikey=${this.apiKey}`;
        
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
            "chatgpt-4o-latest", "gpt-4o-mini-2024-07-18", "gpt-4o-2024-08-06", "gpt-4o-2024-05-13",
            "gemini-1.5-pro-exp-0801", "gemini-1.5-pro-api-0514", "gemini-1.5-flash-api-0514",
            "claude-3-5-sonnet-20240620", "llama-3.1-405b-instruct", "llama-3.1-70b-instruct",
            "llama-3.1-8b-instruct", "mistral-large-2407", "strawberry-turbo", "strawberry-large",
            "grok-2", "gemma-2-27b-it", "gemma-2-9b-it", "gemma-2-2b-it", "eureka-chatbot",
            "gemma-2-9b-it-simpo", "claude-3-haiku-20240307", "claude-3-sonnet-20240229",
            "claude-3-opus-20240229", "deepseek-coder-v2", "deepseek-v2-api-0628", "nemotron-4-340b",
            "llama-3-70b-instruct", "llama-3-8b-instruct", "athene-70b-0725", "qwen2-72b-instruct",
            "qwen-max-0428", "gpt-3.5-turbo-0125", "yi-large-preview", "yi-large", "yi-1.5-34b-chat",
            "phi-3-medium-4k-instruct", "phi-3-small-8k-instruct", "phi-3-mini-4k-instruct-june-2024",
            "reka-core-20240722", "reka-core-20240501", "reka-flash-20240722", "reka-flash-preview-20240611",
            "command-r-plus", "command-r", "codestral-2405", "mixtral-8x22b-instruct-v0.1",
            "mixtral-8x7b-instruct-v0.1", "mistral-large-2402", "mistral-medium", "qwen1.5-110b-chat",
            "qwen1.5-72b-chat", "qwen1.5-32b-chat", "qwen1.5-14b-chat", "qwen1.5-7b-chat", "qwen1.5-4b-chat",
            "glm-4-0520", "glm-4-0116", "snowflake-arctic-instruct", "dbrx-instruct", "olmo-7b-instruct",
            "vicuna-13b", "internvl2-26b"
        ];
    }
}

module.exports = MSIAI;
