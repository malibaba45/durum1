var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "AÇIKLAMA", // BAŞLIĞIN ALTINDAKİ YAZI
assets : {
large_image : "EKLEDİĞİNİZ FOTOĞRAFIN İSMİ", // FOTOĞRAF (EN KÜÇÜK 512 X 512 EN BÜYÜK 1024x1024)
large_text : "BAŞLIĞIN İSMİ" // BAŞLIK İSMİ 
},
buttons : [{label : "1. Butonun İsmi" , url : "KULLANILACAK URL"},{label : "2. Butonun İsmi", url : "KULLANILACAK URL"}]
}
})
})
console.log(`Durumunuz Başariyla Ayarlandi.`)
client.login({ clientId : "Botunuzun ID'si" }).catch(console.error);