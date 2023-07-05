# RPGIDK


[ HOW TO INSTALL VIA VPS LINUX ]
1. OPEN TERMINAL / KETIK LANGSUNG VIA SSH LOGIN
2. INSTALL `sudo apt install build-essential` JIKA MELALUI USER || JIKA MELALUI ROOT : `apt update && apt upgrade && apt install build-essential`
3. INSTALL `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
4. `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
5. INSTALL `nvm install v16.11.1 node.js`
6. INSTALL `npm install pm2 -g`

[ GANTI SEMUA ISI di folder data/config.js, src/events/member/guildMemberAdd.js / ]
[ RENAME PADA EXAMPLE.ENV MENJADI .ENV ]
[ TENTUNYA GANTI JUGA ISINYA DARI TOKEN BOT, OWNER, DLL ]

[ CARA MENGHIDUPKAN BOT SETELAH MELALUI TAHAP DIATAS VIA LINUX ]
1. git clone https://github.com/Keyyskuy/RPGIDK.git
2. cd <NAMAFOLDER>
2. npm install
3. pm2 start bot.js --name <NAME PROCESS>
4. pm2 ls // untuk melihat status bot online apa tidak.


Noted : 
*Jika terjadi error atau something yg membuat bot tidak bisa login/online, berarti ada salah satu yang ketinggalan di install atau di ganti seperti ID / EMOJI / DLL.*
*Devs tidak bertanggung jawab apabila terjadi kerusakan atau kesalahan dalam penginstalan, devs hanya akan membantu jika terjadi error atau sejenisnya*


Goodluck,
By : Ninjas#9304



