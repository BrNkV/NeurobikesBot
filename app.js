import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

// Replace with your token from BotFather
const token = process.env.TELEGRAM_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any incoming messages
bot.on('message', (msg) => {

  const chatId = msg.chat.id; 
  console.log(msg);
  const text = msg.text.toLowerCase(); //  Convert the incoming message to lowercase

  // Simple greeting response
  if(msg.from.id="252823261" && text.includes('admin 1')){
    bot.sendMessage(
      chatId,
      `'Hello dear Admin ${msg.chat.username}!'`,
    );
  }
  
  else if (text.includes('hi')) {
    bot.sendMessage(
      chatId,
      `'Hello dear ${msg.chat.username}!'+'Chat ID TEST(docker compose from VPS 126032025) ${chatId} ${msg.chat.first_name} '`,
    );
    console.log(chatId);
  } else {
    bot.sendMessage(chatId, 'I am a simple bot. Send "hi" to get a greeting!');
  }
});
