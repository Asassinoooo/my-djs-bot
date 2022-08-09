"use strict";
var __importStar = (this && this.__importStar) || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const { keep_alive } = require("./keep_alive");
const dotenv_1 = __importDefault(require("dotenv"));
const parseTime = require("parse-duration").default;
const prettyMS = require("pretty-ms");
const ms = require("ms");
const { GuildMember, Guild } = require("discord.js");
dotenv_1.default.config();
const prefix = '!';
const client = new discord_js_1.default.Client({
  intents: [
    discord_js_1.Intents.FLAGS.GUILDS,
    discord_js_1.Intents.FLAGS.GUILD_MESSAGES
  ]
});
client.on('ready', () => {
  console.log('Bot Is Online');
  client.user?.setActivity("Serving The USSR");

});
client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
  }
});

client.on('messageCreate', (messageCreate) => {
  const messages = ["yes", "Hell nah", "Very Pro", "nope"];
  if (messageCreate.content.toLowerCase() === 'is usa pro?') {
    messageCreate.reply({
      content: messages[Math.floor(Math.random() * messages.length)],
    });
  }
});
client.on('messageCreate', (messageCreate) => {
  const randnumvodka = Math.floor(Math.random() * 5001);
  var statusvodka = "";
  if (500 > randnumvodka && randnumvodka > 0)
    statusvodka = "Very Weak";
  else if (1000 > randnumvodka && randnumvodka > 500)
    statusvodka = "Not Bad";
  else if (2500 > randnumvodka && randnumvodka > 1000)
    statusvodka = "Nice";
  else if (4000 > randnumvodka && randnumvodka > 2500)
    statusvodka = "Good Job Comrade";
  else if (9999 > randnumvodka && randnumvodka > 4000)
    statusvodka = "WHAT THE";
  if (messageCreate.content.toLowerCase() === 'drinks vodka') {
    messageCreate.reply({
      content: `you drunk ${randnumvodka}ml of vodka\n${statusvodka}`
    });
  }
});
client.on('messageCreate', (messagecreate) => {
  if (messagecreate.content.toLowerCase() == 'troll all') {
    messagecreate.delete();
    messagecreate.channel.send('@everyone')
      .then(msg => {
        setTimeout(() => msg.delete(), 1);
      });
  }
});
client.on('messageCreate', (messageCreate) => {
  if (messageCreate.content.toLowerCase() === 'am gay' || messageCreate.content.toLowerCase() === "i'm gay" || messageCreate.content.toLowerCase() === "im gay" || messageCreate.content.toLowerCase() === "i am gay") {
    messageCreate.reply({
      content: "you're going to the gulag"
    });
  }
});

client.on('messageCreate', (messageCreate) => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const numbers1 = ["1", "2", "3", "4", "5", "6"];
  var ranroul = Math.floor(Math.random() * numbers.length);
  var ranroul1 = Math.floor(Math.random() * numbers1.length);
  var dol = "";
  if (ranroul === ranroul1)
    dol = "dead";
  else
    dol = "alive";
  if (messageCreate.content.toLowerCase() === '!roulette') {
    messageCreate.reply({ content: `the bullet is on ${ranroul + 1}\nthe revolver shots bullet number ${ranroul1 + 1}\nyou're ${dol}` });
  };
});


client.on('messageCreate', (messageCreate) => {
  const benmessage = ["yes", "no", "euhhhh...", "hohoho"]
  if (messageCreate.content.toLowerCase().startsWith(`hey ben`) || messageCreate.content.toLowerCase().startsWith(`hi ben`)) {
    messageCreate.reply(benmessage[Math.floor(Math.random() * benmessage.length)],)
  }
});

client.on('messageCreate', (messageCreate) => {
  const benmessage = ["yes", "no", "euhhhh...", "hohoho"]
  const nonowords =["@everyone"]
  if(messageCreate.content.toLowerCase().includes(nonowords)){}
  else if(messageCreate.content.toLowerCase().startsWith(`ben say`)){
    var bensay = messageCreate.content.toLowerCase().replace('ben say'," ")
    messageCreate.channel.send(bensay+"ㅤ")
    messageCreate.delete();}
  else if (messageCreate.content.toLowerCase().startsWith(`ben`)) {
    messageCreate.reply(benmessage[Math.floor(Math.random() * benmessage.length)]) 
}});

client.login(process.env.TOKEN);