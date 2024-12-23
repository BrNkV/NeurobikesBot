import TelegramBot from 'node-telegram-bot-api';

// Replace with your token from BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any incoming messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    // Simple greeting response
    if (text.includes('hi')) {
        bot.sendMessage(chatId, 'Hello dear user!');
    } else {
        bot.sendMessage(chatId, 'I am a simple bot. Send "hi" to get a greeting!');
    }
});
