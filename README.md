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

## 🔑 API Key

To use MSIAI, you need an API key. You can obtain a free API key by joining our Discord server:

[Join Our Discord Server](https://discord.gg/msidev)

## 🚀 Quick Start

### JavaScript (Node.js)

```javascript
const MSIAI = require('msiai');

const msiai = new MSIAI('YOUR_API_KEY');

msiai.chat({
    model: "gpt-3.5-turbo",
    prompt: "What are the benefits of exercise?",
    system: "You are a fitness expert."
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
    model: "gpt-4",
    prompt: "Explain quantum computing in simple terms.",
    system: "You are a quantum physics educator."
})
.then(response => {
    console.log(response.reply);
})
.catch(error => {
    console.error(error.message);
});
```

## 📚 Available Models

MSIAI offers the following AI models:

- gpt-3.5-turbo
- gpt-4
- o1-preview
- o1-preview-2024-09-12
- o1-mini-2024-09-12
- o1-mini
- gpt-4o-latest
- gpt-4o-2024-08-06

## 🤝 Support

If you have any questions, need assistance, or want to provide feedback, please contact me via Discord:

[My Discord Profile](https://discord.com/users/657241749579759616)

You can also join our Discord server for community support and to obtain a free API key:

[Join Our Discord Server](https://discord.gg/msidev)
