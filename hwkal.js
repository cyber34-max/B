// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab dekk 

//==============[ By Always Ziyo Tzy ]==========//

const fs = require('fs')
const chalk = require('chalk')
//=============[ ----- ]============//
global.gr = 'http://www.ziyoo.com/' // gausah di ubah :v
global.wagc = https://chat.whatsapp.com/Ftx4jCceLLJ4FyfBAAQtfc" // yg ini silahkan ubah
global.ig = '@ziyoo' // ubah aja
global.email = 'leocc0831@gmail.com' //serah 
global.region = 'indonesia' // serah
global.domain = '_' // Isi Domain Lu
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.domainotp = "-" // Isi Sendiri
global.apikeyotp = "" // Isi Sendiri
global.ownername = 'Always ziyo' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6282163617264'] // ubah aja pake nomor lu
//==========================[BY Hw Mods]=======================//
global.keyopenai = ''
//====================[ BY Hw Mods]=============================//
global.botname = 'Hw v24' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'sticker' // ubah aja ini nama sticker
global.author = 'Always is here !!' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
// taaofc
global.thum = fs.readFileSync("./baseikal/image/thum.jpeg") 
global.good = fs.readFileSync("./baseikal/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseikal/video/mainmenu.mp4")
//=========================[ BATAS COOEG ]========================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})