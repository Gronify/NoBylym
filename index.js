// Library
var TelegramBot = require('node-telegram-bot-api');

// Token
var token = 'BOT_TOKEN';

// create
var bot = new TelegramBot(token, { polling: true });

// testing for group
bot.on('message', (msg) => {


    var buling = ["Message",
    "Second Message",
    "Third Message",
    "Fourth message",
    "Message",
    "Second Message",
    "Third Message",
    "Fourth message"
    ];
    var pBuling = ["Message",
    "Second Message",
    "Third Message",
    "Fourth message",
    "Message",
    "Second Message",
    "Third Message",
    "Fourth message"
    ];
    var randomIndex = Math.floor(Math.random() * 8);
    try {

    if (msg.sticker && (msg.from.username == "Enter the username")) {
        //bot.deleteMessage(msg.chat.id, msg.message_id);
        bot.sendMessage(msg.chat.id, buling[randomIndex]);
        console.log(msg.from.id + " "+ msg.from.first_name)
    }
    else if (msg.text && (msg.from.username == "Enter the username")) {
        bot.sendMessage(msg.chat.id, buling[randomIndex]);
        console.log(msg.from.id + " "+ msg.from.first_name)
    }
    else if (msg.text && (msg.from.username == "Enter the username")) {
        bot.sendMessage(msg.chat.id, pBuling[randomIndex]);
        console.log(msg.from.id + " "+ msg.from.first_name)
    }


    else if (msg.text.toString().toLowerCase()) {
        console.log(msg.from.id + " "+ msg.from.first_name + " "+ msg.from.username + " " + msg.text.toString().toLowerCase());

    }
    }catch {}

});

// start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bot is started");
});

// better errors
bot.on("polling_error", (err) => console.log(err));
