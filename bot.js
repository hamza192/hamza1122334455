const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`for help:!help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



  client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
  
  


	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
	
	
	
	client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
























client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
}); 



client.on('message', message => {

    if (message.content === "!قفل الشات") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "!افتح الشات") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});



client.on('message', message => {
    if (message.content.startsWith("!صورة")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "!help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("『LEGO』 『اسم البوت』", true)
      
      .addField("『!help1』😘『اذا تبي جميع الاوامر مع اوامر اضافية』😵", true)
      
	    .addField("『!help2』👻『اذا تبي الاوامر العامة』😳", true)
	    
      .addField("『!help3』😮『اذا تبي  الاوامر الادارية』🤒", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on("message", message => {
 if (message.content === "!help1") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎 『معلومات عن السيرفر』 !سرفر                     

💎!ping 『لمعرفه سرعه البوت』

💎 『معلومات عن الاعضاء』!الاعضاء

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『اوامر ادارية』👑

👑 『لمعرفه عدد رومات السيرفر』!غرف

👑 『لتعطي شخص باند』!باند

👑 『لتعطي شخص كيك』!كيك

👑『لمسح الشات برقم』 مسح

👑^^edit  『لتعديل رساله 』



● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎲『القرعة』🎲

🎲^^roll 1   『القرعة من 1 الى 25』

🎲^^roll 2   『القرعة من 1 الى 50』

🎲^^roll 3   『القرعة من 1 الى 75』

🎲^^roll 4   『القرعة من 1 الى 100』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎮『العاب』🎮

🎮^^كت تويت

🎮^^مريم 

🎮^^خواطر 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎴『اوامر الصور』🎴

🎴 『لي عرض صورتك او صوره اي شخص』!صورة

🎴قريبا

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎎『انواع الترحيب』🎎

🎎 ترحيب 1 / ترحيب 2 

🎎 ترحيب 3 / ترحيب 4

🎎 ترحيب 5 / ترحيب 6 

🎎 ترحيب 7 / ترحيب 8

🎎 ترحيب 9 / ترحيب 10

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『الدعم الفني والمساعدة』💎


توجه لأي اداري


              مصمم البوت | hamza

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 




`)


message.author.sendEmbed(embed)

}
})





client.on("message", message => {
 if (message.content === "!help2") {
        message.react("😳")
                message.react("👻")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎 『معلومات عن السيرفر』 !سرفر                  

💎 『لمعرفه التاريخ』 !التاريخ

💎!ping 『لمعرفه سرعه البوت』

💎 『معلومات عن الاعضاء』 !اعضاء

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
	  

💎『الدعم الفني والمساعدة』💎

             توجه لأي اداري


             مصمم البوت | hamza


`)


message.author.sendEmbed(embed)

}
}); 
	
	
client.on("message", message => {
 if (message.content === "!help3") {
        message.react("😮")
                message.react("🤒")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑 『لتعطي شخص باند』 !باند

👑 『لتعطي شخص كيك』 !كيك

👑 『لمسح الشات برقم』 مسح

👑^^edit  『لتعديل رساله 』

👑!bc1 『خيارات البرودكاست』 

👑 『لمعرفه عدد رومات السيرفر』 !غرف

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『الدعم الفني والمساعدة』💎


              توجه لأي اداري

             مصمم البوت | hamza

`)
	

	message.author.sendEmbed(embed)

}
}); 







client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'كيف يمكن اساعدك',
        'ياهلا',
       'مرحبتين'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});



client.on('message', message => {
            if (message.content === '!قوانين') {
              message.channel.sendFile("https://cdn.discordapp.com/attachments/414235527672496129/414252926031233026/image.jpg");
}
});









client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '!تعال') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
})






client.on('message', (message) => {
    if (message.content.startsWith('!كيك')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 







client.on('message', (message) => {
    if (message.content.startsWith('!باند ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});





client.on('message', message => {
   if (message.content === "!قرعة1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "!قرعة2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "!قرعة3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "!قرعة4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});




const Eris = require("eris");
var kboosh = new Eris("NDA5NDAzMTg1ODE2NjY2MTEy.DZAkVA.cijxsH6kk4TUvrNNI577kvMkMek");
var kboosh_id = "394126841360941067";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "230681534674370560") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "!voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「"+x+"」"});
    messages = [];
}, 1);
    }
});


  

kboosh.connect("NDA5NDAzMTg1ODE2NjY2MTEy.DZAkVA.cijxsH6kk4TUvrNNI577kvMkMek")





















































client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});
	
	
	
	
	 client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!تكلم") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. the Member Shut up **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. the Member Shut up **").catch(console.error);
});
  }

};

});





client.login(process.env.BOT_TOKEN);
