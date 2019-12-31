const { Client } = require('discord.js');
const { token } = require('./settings');
const syllable = require('syllable');
const client = new Client();

client.on("error", (e) => console.error(e));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var words = msg.content.toLowerCase().split(" ");
  var ac = false;
  console.log(`author id ${msg.author.id}!`);
  if (words.length > 1 && msg.author.id != '599052208650190899') {
    var length = words.length;
    var pointer = 0;
    var a = '';
    var c = '';
    while (ac === false && pointer != (length - 1)) {
      if (words[pointer].startsWith("a") && words[pointer + 1].startsWith("c")) {
	if ((syllable(words[pointer]) === 3 || syllable(words[pointer]) === 4) && words[pointer + 1].length > 2) {
          a = words[pointer];
          a = `A${a.slice(1, a.length)}`;
          c = words[pointer + 1];
          c = `C${c.slice(1, c.length)}`;
          ac = true;
	}
      }
      pointer++;
    }
    if (ac === true) {
      msg.reply(`Hello ${a} ${c}, welcome to the papacy.`);
    }
  }
});

client.login(token);
