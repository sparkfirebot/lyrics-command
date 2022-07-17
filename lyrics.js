// Top of your file or where you call the required packages or whatever
const fetch = require('node-fetch');
const Discord = require('discord.js');


// Command
      const lyrics = args.slice(0).join(" ");
      if (!lyrics) return message.channel.send(":x: You need to provide a song!");
      
      fetch(`https://some-random-api.ml/lyrics?title=${lyrics}`)
    .then(res => res.json())
    .then(json => {
         if (json.lyrics === "undefined") return message.channel.send(":x: Not found")
          const embed = new Discord.MessageEmbed()
          .setTitle(`${json.title} by ${json.author}`)
          .setDescription(`${json.lyrics}`)
          .setColor("0059c6")
         // .setThumbnail(`${json.thumbnail}`)
          .setFooter(`Lyrics API provided by Some Random Api (some-random-api.ml) and Genius`)
          
        message.channel.send(embed)
    });
