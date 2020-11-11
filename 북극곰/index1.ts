//import db from 'quick.db'
const Discord1 = require('discord.js')
const client1 = new Discord1.Client()
const sleep1 = ms => new Promise(r => setTimeout(r, ms))
const prefix1 = '곰아 '
const developer1 = [`718805028441423912`]





client1.on('message', async message => {
    
    if  (message.content.startsWith('곰아')) {         
        if (message.content === '곰아') {
            message.channel.send('왜?')
        }
        else {
          if (message.content === prefix1 + '안녕') {
                message.channel.send('안녕!')
            }
        else {
            const a = message.content.split(/곰아/)
            message.channel.send(`${a[1]}이(가) 뭐야?`)
    }
}
}

})



















































client1.login(process.env.TOKEN)