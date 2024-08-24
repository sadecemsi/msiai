
<p align="center">
  <img src="https://img.shields.io/npm/v/msiai?style=for-the-badge" alt="npm version">
  <img src="https://img.shields.io/npm/dt/msiai?style=for-the-badge" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/msiai?style=for-the-badge" alt="license">
  <a href="https://discord.com/users/657241749579759616" target="_blank">
    <img src="https://img.shields.io/badge/Discord-Support-7289DA?style=for-the-badge&logo=discord" alt="Discord Support">
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/msidev">
    <img src="https://img.shields.io/discord/1275557243466678343?color=7289da&logo=discord&logoColor=white&style=for-the-badge" alt="Discord Server">
  </a>
</p>

# MSIAI

> **MSIAI: A flexible API library offering streamlined access to diverse AI models. Enhance your projects with powerful machine learning capabilities and simplify complex AI integrations**

> **MSIAI leverages cutting-edge language models to provide intelligent responses across a wide range of topics and languages.**

## 📦 Installation

```bash
npm install msiai
yarn add msiai
pnpm add msiai
```

## 🚀 Quick Start

### JavaScript (Node.js)

```javascript
const MSIAI = require('msiai');

const msiai = new MSIAI('YOUR_API_KEY');

msiai.chat({
    model: "chatgpt-4o-latest",
    content: "Merhaba, nasılsın?",
    system: "Sen yardımcı bir asistansın."
}).then(response => {
    console.log(response.reply);
}).catch(error => {
    console.error(error.message);
});
```

### TypeScript

```typescript
import MSIAI from 'msiai';

const msiai = new MSIAI('YOUR_API_KEY');

msiai.chat({
    model: "gpt-4o-2024-08-06",
    content: "What's the weather like today?",
    system: "You are a weather expert." 
})
.then(response => {
    console.log(response.reply);
})
.catch(error => {
    console.error(error.message);
});
```

### Python

```python
from msiai import MSIAI

msiai = MSIAI('YOUR_API_KEY')

response = msiai.chat(
    model="gemini-1.5-pro-exp-0801",
    content="Tell me a joke.",
    system="You are a comedian." 
)

print(response['reply'])
```

## 📚 Available Models

MSIAI offers a wide range of AI models. Here's the complete list:

- chatgpt-4o-latest
- gpt-4o-mini-2024-07-18
- gpt-4o-2024-08-06
- gpt-4o-2024-05-13
- gemini-1.5-pro-exp-0801
- gemini-1.5-pro-api-0514
- gemini-1.5-flash-api-0514
- claude-3-5-sonnet-20240620
- llama-3.1-405b-instruct
- llama-3.1-70b-instruct
- llama-3.1-8b-instruct
- mistral-large-2407
- strawberry-turbo
- strawberry-large
- grok-2
- gemma-2-27b-it
- gemma-2-9b-it
- gemma-2-2b-it
- eureka-chatbot
- gemma-2-9b-it-simpo
- claude-3-haiku-20240307
- claude-3-sonnet-20240229
- claude-3-opus-20240229
- deepseek-coder-v2
- deepseek-v2-api-0628
- nemotron-4-340b
- llama-3-70b-instruct
- llama-3-8b-instruct
- athene-70b-0725
- qwen2-72b-instruct
- qwen-max-0428
- gpt-3.5-turbo-0125
- yi-large-preview
- yi-large
- yi-1.5-34b-chat
- phi-3-medium-4k-instruct
- phi-3-small-8k-instruct
- phi-3-mini-4k-instruct-june-2024
- reka-core-20240722
- reka-core-20240501
- reka-flash-20240722
- reka-flash-preview-20240611
- command-r-plus
- command-r
- codestral-2405
- mixtral-8x22b-instruct-v0.1
- mixtral-8x7b-instruct-v0.1
- mistral-large-2402
- mistral-medium
- qwen1.5-110b-chat
- qwen1.5-72b-chat
- qwen1.5-32b-chat
- qwen1.5-14b-chat
- qwen1.5-7b-chat
- qwen1.5-4b-chat
- glm-4-0520
- glm-4-0116
- snowflake-arctic-instruct
- dbrx-instruct
- olmo-7b-instruct
- vicuna-13b
- internvl2-26b

## 🔑 Getting an API Key

To obtain an API key, please contact me via Discord:

[My Discord Profile](https://discord.com/users/657241749579759616)

## 🤝 Support

If you have any questions or suggestions, please join our Discord server:

[Join Our Discord Server](https://discord.gg/msidev)
