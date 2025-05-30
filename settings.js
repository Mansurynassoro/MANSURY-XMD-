/*
  project_name : MANSURY-XMD Bot
  Version : 2.4.0
  Owner : mansury nassoro 
  Do Not Clone 


*/

//----------------------[ MANSURY-XMD]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your MANSURY-XMD session id here

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'MANSURY-XMD'

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '255758547182' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "MANSURY-XMD" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Accra" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go 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.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@Mansury_nassoro"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©MANSURY-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © MANSURY-XMD, 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ MANSURY-XMD ]----------------------//
