"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
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
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower scout') {
        messageCreate.reply({ content: 'Scout Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($200) = 0,67 DPS\nLV 1 ($250) = 0,83 DPS\nLV 2 ($550) = 1,67 DPS\nLV 3 ($1,350) = 5 DPS\nLV 4 ($3,350) = 10 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower sniper') {
        messageCreate.reply({ content: 'Sniper Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($350) = 0,83 DPS\nLV 1 ($475) = 0,91 DPS\nLV 2 ($975) = 1,27 DPS\nLV 3 ($2,475) = 3 DPS\nLV 4 ($6.475) = 6,67 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower accelerator') {
        messageCreate.reply({ content: 'Accelerator Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($3,500) = 17.5-25 DPS\nLV 1 ($4,100) = 17.5-25 DPS\nLV 2 ($5,300) = 18.2-26 DPS\nLV 3 ($8,350) = 31.2-41.6 DPS\nLV 4 ($18,350) = 62.4-83.2 DPS\nLV 5 ($43,000) = 270-375 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower militant') {
        messageCreate.reply({ content: 'Militant Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($750) = 3,07 DPS\nLV 1 ($950) = 3,07 DPS\nLV 2 ($1,400) = 3,07 DPS\nLV 3 ($3,200) = 11,42 DPS\nLV 4 ($7,700) = 22,85 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower acepilot') {
        messageCreate.reply({ content: 'Ace Pilot Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($500) = 6,67 DPS\nLV 1 ($750) = 13,33 DPS\nLV 2 ($1,100) = 14,83 DPS\nLV 3 ($2,600) = 44,5 DPS\nLV 4 ($6,200) = 65,14 DPS\nLV 5 ($13,700) = 188 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower paintballer') {
        messageCreate.reply({ content: 'Paintballer Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($400) = 1 DPS\nLV 1 ($500) = 1 DPS\nLV 2 ($1,000) = 1.5 DPS\nLV 3 ($1,700) = 2 DPS\nLV 4 ($4,200) = 5 DPS\nLV 5 ($7,700) = 10 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower demoman') {
        messageCreate.reply({ content: 'Demoman Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($450) = 0,67 DPS\nLV 1 ($550) = 0,67 DPS\nLV 2 ($950) = 1,67 DPS\nLV 3 ($1,950) = 3,5 DPS\nLV 4 ($5,450) = 11,11 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower soldier') {
        messageCreate.reply({ content: 'Soldier Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($375) = 1,67 DPS\nLV 1 ($475) = 1,67 DPS\nLV 2 ($775) = 1,67 DPS\nLV 3 ($2,175) = 5,51 DPS\nLV 4 ($7,675) = 15,63 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower freezer') {
        messageCreate.reply({ content: 'Freezer Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($350) = Freeze Time = 0,75s\nLV 1 ($700) = Freeze Time = 1,25s\nLV 2 ($1,100) = Freeze Time 1.25s\nLV 3 ($2,500) = Freeze Time 1,25s, 0,67 DPS\nLV 4 ($5,000) = Freeze Time 1,25s, 1,33 DPS\nLV 5 ($11,000) = Freeze Time 1,45s, 2 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower hunter') {
        messageCreate.reply({ content: 'Hunter Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($500) = 1,2 DPS\nLV 1 ($800) = 1,67 DPS\nLV 2 ($1,400) = 3,33 DPS\nLV 3 ($2,400) = 6,67 DPS\nLV 4 ($4,900) = 13,33 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower medic') {
        messageCreate.reply({ content: 'Medic Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($900) = Base Health = +5 Hp/Wave, 2 DPS\nLV 1 ($1,300) = Base Health = +5 Hp/Wave, 3 DPS\nLV 2 ($2,200) = Base Health = +7 Hp/Wave, 7,5 DPS\nLV 3 ($4,600) = Base Health = +7 Hp/Wave, 7,5 DPS\nLV 4 ($9,100) = Base Health = +10 Hp/Wave, 12,31 DPS\nLV 5 ($11,000) = Base Health = +10 Hp/Wave, 26,67 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower pyromancer') {
        messageCreate.reply({ content: 'Pyromancer Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($650) = Burn Time = 3, 1 DPS\nLV 1 ($1,000) = Burn Time = 3, 1 DPS\nLV 2 ($1,500) = Burn Time = 3, 5 DPS\nLV 3 ($2,700) = Burn Time = 4, 6 DPS\nLV 4 ($6,500) = Burn Time = 6, 14 DPS\nLV 5 ($14,000) = Burn Time = 10, 24 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower farm') {
        messageCreate.reply({ content: 'Farm Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($250) = +$50/wave\nLV 1 ($450) = +$100/wave\nLV 2 ($1,000) = +$250/wave\nLV 3 ($2,000) = +$500/wave\nLV 4 ($4,500) = +$750/wave\nLV 5 ($9,500) = +$1500/wave',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower shotgunner') {
        messageCreate.reply({ content: 'Shotgunner Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($500) = 2,24 DPS\nLV 1 ($700) = 5,33 DPS\nLV 2 ($1,050) = 5,33 DPS\nLV 3 ($2,550) = 20 DPS\nLV 4 ($6,750) = 40 DPS\nLV 5 ($13,750) = 64 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower militarybase') {
        messageCreate.reply({ content: 'Military Base Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($400) = HP = 25\nLV 1 ($600) = HP = 25\nLV 2 ($1,000) = HP = 60\nLV 3 ($2,200) = HP = 60, 15 DPS\nLV 4 ($8,200) = HP = 400, 38,33 DPS\nLV 5 ($34,200) = HP = 1200, 100 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower rocketeer') {
        messageCreate.reply({ content: 'Rocketeer Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($850) = 1,33 DPS\nLV 1 ($1,200) = 1,6 DPS\nLV 2 ($1,800) = 1,6 DPS\nLV 3 ($4,600) = 4,44 DPS\nLV 4 ($12,100) = 8,89 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower electroshocker') {
        messageCreate.reply({ content: 'Electroshocker Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($325) = Shock Time = 1s, 0 DPS\nLV 1 ($575) = Shock Time = 1s, 0 DPS\nLV 2 ($975) = Shock Time = 1s, 0 DPS\nLV 3 ($1,975) = Shock Time = 1,5s, 0,67 DPS\nLV 4 ($4,975) = Shock Time = 1,5s, 2 DPS\nLV 5 ($11,475) = Shock Time = 2s, 2 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower commander') {
        messageCreate.reply({ content: 'Commander Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($650) = Buff +10% Firerate, 0 DPS\nLV 1 ($1,500) = Buff +15% Firerate, 0 DPS\nLV 2 ($3,300) = Buff +15% Firerate, 2,67 DPS\nLV 3 ($8,800) = Buff +20% Firerate, 4 DPS\nLV 4 ($17,800) = Buff +25% Firerate, 6,67 DPS\n Commander Ability(Call to Arms) unlocked on lv 2 commander which Boosts all towers firerate in its range by an additional 30% for 10 seconds. Additionally, the Commander will be able to attack enemies with its own weapon for 10 seconds. (30s cooldown)',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower dj') {
        messageCreate.reply({ content: 'DJ Booth Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($600) = Buff +10% Range\nLV 1 ($900) = Buff +10% Range\nLV 2 ($1,750) = Buff +15% Range\nLV 3 ($4,250) = Buff +15% Range, 10% Discount\nLV 4 ($8,250) = Buff +25% Range, 10% Discount\nLV 4 ($17,250) = Buff +35% Range, 20% Discount',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower minigunner') {
        messageCreate.reply({ content: 'Minigunner Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($2,000) = 7,14 DPS\nLV 1 ($2,500) = 10 DPS\nLV 2 ($3,150) = 10 DPS\nLV 3 ($8,650) = 40 DPS\nLV 4 ($17,650) = 80 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'infotower ranger') {
        messageCreate.reply({ content: 'Ranger Tower Info\n▬▬▬▬▬▬▬▬▬▬▬\nLV 0 ($3,500) = 8 DPS\nLV 1 ($4,050) = 8 DPS\nLV 2 ($5,550) = 13 DPS\nLV 3 ($9,050) = 25 DPS\nLV 4 ($19,550) = 51,25 DPS\nLV 5 ($44,550) = 85,71 DPS',
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    const messages = ["yes", "Hell nah", "Very Pro", "nope"];
    if (messageCreate.content.toLowerCase() === 'is usa pro?') {
        messageCreate.reply({ content: messages[Math.floor(Math.random() * messages.length)],
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    const randnumvodka = Math.floor(Math.random() * 5001);
    var statusvodka = "";
    if (500 > randnumvodka && randnumvodka > 0)
        statusvodka = "very weak";
    else if (1000 > randnumvodka && randnumvodka > 500)
        statusvodka = "not bad";
    else if (2500 > randnumvodka && randnumvodka > 1000)
        statusvodka = "nice";
    else if (4000 > randnumvodka && randnumvodka > 2500)
        statusvodka = "OMG";
    else if (9999 > randnumvodka && randnumvodka > 4000)
        statusvodka = "nice job my man";
    if (messageCreate.content.toLowerCase() === 'drinks vodka') {
        messageCreate.reply({ content: `you drunk ${randnumvodka}ml of vodka\n${statusvodka}`
        });
    }
});
client.on('messageCreate', (messagecreate) => {
    if (messagecreate.content.toLowerCase() == 'ghost ping') {
        messagecreate.delete();
        messagecreate.channel.send('@everyone')
            .then(msg => {
            setTimeout(() => msg.delete(), 1);
        });
    }
});
client.on('messageCreate', (messageCreate) => {
    if (messageCreate.content.toLowerCase() === 'am gay' || messageCreate.content.toLowerCase() === "i'm gay" || messageCreate.content.toLowerCase() === "im gay" || messageCreate.content.toLowerCase() === "i am gay") {
        messageCreate.reply({ content: "you're going to the gulag"
        });
    }
});

client.on('messageCreate', (messageCreate) => {
    const numbers = ["1","2","3","4","5","6"];
    const numbers1 = ["1","2","3","4","5","6"];
    var ranroul = Math.floor(Math.random() * numbers.length);
    var ranroul1 = Math.floor(Math.random() * numbers1.length);
    var dol = "";
    if(ranroul === ranroul1)
        dol = "dead";
    else
        dol = "alive";
    if (messageCreate.content.toLowerCase() === '!roulette') {
        messageCreate.reply({ content: `the bullet is on ${ranroul+1}\nthe revolver shots bullet number ${ranroul1+1}\nyou're ${dol}`});
    };
});


client.on('messageCreate', (messageCreate) => {
    const benmessage = ["yes", "no", "bleugh", "hohoho"]
    if (messageCreate.content.toLowerCase().startsWith(`hey ben`)||messageCreate.content.toLowerCase().startsWith(`hi ben`)||messageCreate.content.toLowerCase().startsWith(`ben`)){
        messageCreate.reply({content:benmessage[Math.floor(Math.random() * benmessage.length)]},)
    } 
});
    


client.login(process.env.TOKEN);