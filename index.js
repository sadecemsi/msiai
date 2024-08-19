const axios = require('axios');

const MODEL_LIST = [
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

class msiai {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API key is required.\n\nAPI anahtarı gerekli.');
        }
        this.apiKey = apiKey;
        this.baseUrl = 'https://www.msii.xyz/api/yapay-zeka';
    }

    async createChatCompletion(options) {
        const { model, messages } = options;

        if (!model) {
            throw new Error('Model is required.\n\nModel gerekli.');
        }
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error('Messages array is required and should not be empty.\n\nMesajlar dizisi gerekli ve boş olmamalı.');
        }

        if (!MODEL_LIST.includes(model)) {
            throw new Error(`Invalid model name. Please use one of the following models:\n${MODEL_LIST.join(', ')}\n\nGeçersiz model adı. Lütfen aşağıdaki modellerden birini kullanın:\n${MODEL_LIST.join(', ')}`);
        }

        const systemMessage = messages.find(msg => msg.role === 'system');
        const userMessage = messages.find(msg => msg.role === 'user');

        if (!userMessage) {
            throw new Error('At least one user message is required.\n\nEn az bir kullanıcı mesajı gerekli.');
        }

        let url = `${this.baseUrl}?model=${encodeURIComponent(model)}&prompt=${encodeURIComponent(userMessage.content)}&apikey=${this.apiKey}`;
        
        if (systemMessage) {
            url += `&system=${encodeURIComponent(systemMessage.content)}`;
        }

        try {
            const response = await axios.get(url);
            return {
                choices: [
                    {
                        message: {
                            role: 'assistant',
                            content: response.data.response
                        }
                    }
                ]
            };
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new Error('Bad Request: ' + error.response.data.error);
                    case 401:
                        throw new Error('Invalid API key.\n\nGeçersiz API anahtarı.');
                    case 429:
                        throw new Error('Rate limit exceeded. Please try again later.\n\nKullanım sınırına ulaşıldı. Lütfen daha sonra tekrar deneyin.');
                    default:
                        throw new Error(`API request failed: ${error.response.data.error || error.message}`);
                }
            } else {
                throw new Error(`Network error: ${error.message}`);
            }
        }
    }

    static getModelList() {
        return MODEL_LIST;
    }
}

module.exports = msiai;
