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

> **MSIAI: A flexible and free API library offering streamlined access to diverse AI models. Enhance your projects with powerful machine learning capabilities and simplify complex AI integrations**

> **MSIAI leverages cutting-edge language models to provide intelligent responses across a wide range of topics and languages, all at no cost.**

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

const msiai = new MSIAI();

msiai.chat({
    model: "gpt-4o-mini",
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

const msiai = new MSIAI();

msiai.chat({
    model: "claude-3-haiku",
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

### Python

```python
from msiai import MSIAI

msiai = MSIAI()

response = msiai.chat(
    model="llama",
    prompt="Describe the process of photosynthesis.",
    system="You are a biology professor." 
)

print(response['reply'])
```

### Ruby

```ruby
require 'msiai'

msiai = MSIAI.new

response = msiai.chat(
  model: "mixtral",
  prompt: "Write a short story about time travel.",
  system: "You are a creative science fiction author."
)

puts response[:reply]
```

## 📚 Available Models

MSIAI offers the following AI models, all accessible for free:

- gpt-4o-mini
- claude-3-haiku
- llama (Meta-Llama-3.1-70B-Instruct-Turbo)
- mixtral (Mixtral-8x7B-Instruct-v0.1)

## 🤝 Support

If you have any questions, need assistance, or want to provide feedback, please contact me via Discord:

[My Discord Profile](https://discord.com/users/657241749579759616)

You can also join our Discord server for community support:

[Join Our Discord Server](https://discord.gg/msidev)
