//import db from 'quick.db'
const Discord = require('discord.js')
const client = new Discord.Client()
const sleep = ms => new Promise(r => setTimeout(r, ms))
const prefix = '곰아 '
const developer = [`718805028441423912`]





client.on('message', async message => {
    
    if  (message.content.startsWith('곰아')) {         
        if (message.content === '곰아') {
            message.channel.send('왜?')
        }
        else {
          if (message.content === prefix + '안녕') {
                message.channel.send('안녕!')
            }
        else {
            const a = message.content.split(/곰아/)
            message.channel.send(`${a[1]}이(가) 뭐야?`)
    }
}
}
    








































































})


client.login('Nzc1Mjg5MDI3MzQyNDk5ODYx.X6kKLA.Bc72E4lCpcTe2SgeR7b-CPNLRwo')