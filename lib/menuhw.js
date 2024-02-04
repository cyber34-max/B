const chalk = require('chalk')
const fs = require ('fs')

global.menu = `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*FITUR MENU*
⏳ ɢᴀꜱᴍᴇɴᴜ
⏳ ɢᴀᴍᴇᴍᴇɴᴜ
⏳ ɪꜱʟᴀᴍᴍᴇɴᴜ
⏳ ʙᴜɢᴍᴇɴᴜ
⏳ ɢʀᴏᴜᴘᴍᴇɴᴜ
⏳ ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ
⏳ ᴊᴇʙᴇʜᴍᴇɴᴜ
⏳ ʙᴇʀɪᴛᴀᴍᴇɴᴜ
⏳ ᴏᴡɴᴇʀᴍᴇɴᴜ
⏳ ᴅᴏᴍᴀɪɴᴍᴇɴᴜ
⏳ ᴘᴀɴᴇʟᴍᴇɴᴜ
⏳ ʀᴇꜱᴇʟʟᴇʀᴍᴇɴᴜ
⏳ ꜰᴜɴᴍᴇɴᴜ
⏳ ᴀᴅᴅᴍᴇɴᴜ
⏳ ʀᴀɴᴅᴏᴍᴍᴇɴᴜ
⏳ ᴀʙꜱᴇɴᴍᴇɴᴜ
⏳ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
⏳ ꜱᴛᴏʀᴇᴍᴇɴᴜ
⏳ ꜱᴇᴀʀᴄʜᴍᴇɴᴜ
⏳ ᴛᴇxᴛᴍᴀᴋᴇʀ
⏳ ᴀɴᴛɪᴍᴇɴᴜ
⏳ ʟɪꜱᴛᴍᴜꜱɪᴋ
⏳ ᴄᴜᴄɪᴍᴀᴛᴀ
⏳ ᴀꜱᴜᴘᴀɴ
▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬
© Ａｌｗａｙｓ Ｚｉｙｏｏ`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
