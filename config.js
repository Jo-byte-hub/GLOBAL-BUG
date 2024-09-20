global.namaown = "Joshua" // your owner name here
global.namabot = "© Josh Tech" // your bot name here
global.versisc = "9.5.0" //
global.owner = ["2349115983460"] // your owner number here
global.tele = "https://t.me/Joshua" // your telegram here
global.url = "https://www.youtube.com/@Joshua" // Your YouTube Here
global.namastore = "LynnZxD" // UBAH NAMA STORE LU
global.simbol = "✪" // You Can Change Simbol
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Ganti Logo Disini
global.painlogo = "http://telegra.ph/file/9a332c815ad31956d5ce6.jpg" 

global.my = {
      saluran: "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH",
      idCH: "120363319098372999@newsletter",
      youtube: "https://www.youtube.com/@Joshua",
      telegram: "https://t.me/Joshua",
      Instagram: "https://www.instagram.com/Josh"
   }


global.mess = {
    success: 'Done',
    admin: '_*❗My boss is Joshua!*_',
    botAdmin: '_*❗Only my handsome boss can use me 😊 !*_',
    OnlyOwner: '_*❗only Joshua knows me 😊 !*_',
    OnlyGrup: '_*❗Joshua said i should work for groups only !*_',
    private: '_(❗It's for private use only !*_',
    wait: '_*Josh BOT is processing your request *_',
    notregist: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*_',
    premium: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB_*.',
     bugrespon: `\`[ ! ]\`ᴡᴀɪᴛ ; ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴇɴᴅɪɴɢ ᴠɪʀᴜꜱ ᴀᴛᴛᴀᴄᴋ`,
     donebug: `\`[ ! ]\`ᴠɪʀᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
