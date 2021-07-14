const help = (prefix, pushname, getLevelingLevel, getLevelingXp, sender, time, patt, uangku) => { 
return `
 ╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ 「 INFORMAÇÕES BOT/OWNER」
│➛ Nick : ${NamaOwner} 
│➛ YouTube :「 ${ytb} 」
│➛ Bateria : ${battre}% 
│➛ Prefixo:「 ${prefix} 」
╰┬────────────┈ ⳹
││➛ Usuário : ${pushname}
││➛ Data/Hora : ${time}
││➛ Level : ${getLevelingLevel(sender)}
││➛ Patente : ${patt}
│╰────────────┈ ⳹
│ 「 MENU DE COMANDOS 」
│
│♢➛${prefix}menuadms
│♢➛${prefix}menudono
│♢➛${prefix}menumusic
│
└──────────────
│ 「 COMANDOS BÁSICOS 」
│ 
│♢➛${prefix}bot (comandos de instalação de um bot)
│♢➛${prefix}sticker (fzr figurinha) (resolução melhor)
│♢➛${prefix}fsticker (fzr figurinha)
│♢➛${prefix}toimg (marcar figurinha de img) 
│♢➛${prefix}togif (marca figurinha de gif) 
│♢➛${prefix}gtts (linguagem) (txt)
│♢➛${prefix}wait (marcar img) (ele identifica)
│♢➛${prefix}tomp3 (converte video em mp3) 
│♢➛${prefix}ping (Velocidade do bot)
│♢➛${prefix}destrava (só adm pode)
│♢➛${prefix}play (Música q c qr)
│♢➛${prefix}gimage (nome da img q qr)
│♢➛${prefix}rename NOME | NOME (MARC A FIG)
│
└──────────────
│ 「 BRINCADEIRAS 」
│
│♡➛${prefix}gay
│♡➛${prefix}casal
│♡➛${prefix}corno
│♡➛${prefix}gado
│♡➛${prefix}tapa (marque algum(a) amiga(o)
│♡➛${prefix}rankgay
│♡➛${prefix}rankpau
│♡➛${prefix}rankotakus
│♡➛${prefix}rankgays
│♡➛${prefix}rankgostosas
│♡➛${prefix}rankcornos
│♡➛${prefix}gerarnick (nick)
│ 
└──────────────
│ 「 ALTERADOR DE VIDEO 」
│
│♢➛${prefix}fastvid (marque o vídeo)
│♢➛${prefix}slowvid (marque o vídeo) 
│♢➛${prefix}reversevid (marque o vídeo)
│
└──────────────
│ 「 ALTERADOR DE VOZ 」
│
│❖➛${prefix}grave (marque o áudio)
│❖➛${prefix}grave2 (marque o áudio) 
│❖➛${prefix}fast (marque o áudio)
│❖➛${prefix}adolesc (marque o áudio)
│❖➛${prefix}esquilo (marque o áudio)
│❖➛${prefix}estourar (marque o áudio)
│❖➛${prefix}bass (marque o áudio)
│❖➛${prefix}bass2 (marque o áudio)
│❖➛${prefix}bass (marque o áudio)
│
└──────────────
│ 「 FOTO DE ANIMAIS 」
│ 
│♡➛${prefix}lagarto
│♡➛${prefix}ganso
│♡➛${prefix}gato
│ 
└──────────────
│ 「 ANIMES FOTOS/GIF 」
│ 
│♡➛${prefix}walpaperanime
│♡➛${prefix}avatarAnime
│♡➛${prefix}fotosAnime
│♡➛${prefix}bonecas
│♡➛${prefix}ngif
│♡➛${prefix}carinho
│ 
└──────────────
│ 「 INFORMAÇÕES/PESQUISA 」
│
│❖➛${prefix}clima (sua região)
│❖➛${prefix}covidglobal
│❖➛${prefix}covid19
│
└──────────────
│「 PESQUISAS/BAIXAR 」
│
│❖➛${prefix}ytsearch (nome da msc)
│❖➛${prefix}ytsearch2 (nome da msc)
│❖➛${prefix}ytmp4 (url do search) 
│❖➛${prefix}ytmp3 (url do search) 
│❖➛${prefix}play (Música q c qr)
│❖➛${prefix}play2 (Música q c qr)
└──────────────
│「 LOGOS/CRIAR (TXT) 」
│
│❖➛${prefix}rainbow (txt)
│❖➛${prefix}neonsky (txt)
│❖➛${prefix}neonye (txt)
│❖➛${prefix}shine (txt)
│❖➛${prefix}grass (txt)
│❖➛${prefix}neonblue (txt)
│❖➛${prefix}flower (txt)
│❖➛${prefix}batle (txt)
│❖➛${prefix}neongreen (txt)
│❖➛${prefix}coffe (txt)
│❖➛${prefix}coffe2 (txt)
│❖➛${prefix}pubg (txt)
│❖➛${prefix}horror (txt)
│❖➛${prefix}fire (txt)
│❖➛${prefix}stone (txt)
│❖➛${prefix}break (txt)
│❖➛${prefix}neon (txt)
│❖➛${prefix}hallowen (txt)
│❖➛${prefix}vidro (txt)
│❖➛${prefix}carbon (txt)
│❖➛${prefix}metalblue (txt)
│❖➛${prefix}pink (txt)
│❖➛${prefix}colaq (txt)
│❖➛${prefix}ossos (txt)
│❖➛${prefix}blood (txt)
│❖➛${prefix}areia (txt)
│❖➛${prefix}natal (txt)
│❖➛${prefix}style (txt)
│❖➛${prefix}neve (txt)
│❖➛${prefix}narutobanner (txt)
│❖➛${prefix}pornhub (txt) 
│❖➛${prefix}space (txt)
│❖➛${prefix}grafity (txt)
│❖➛${prefix}jokerlogo (txt)
│❖➛${prefix}love (txt)
│❖➛${prefix}lava (txt)
│❖➛${prefix}luxury (txt)
│❖➛${prefix}steel (txt)
│❖➛${prefix}narutobanner (txt)
│❖➛${prefix}attp (txt)
│❖➛${prefix}attp1 (txt)
│❖➛${prefix}attp2 (txt)
│❖➛${prefix}attp3 (txt)
│❖➛${prefix}attp4 (txt)
│❖➛${prefix}attp5 (txt)
│❖➛${prefix}attp6 (txt)
│❖➛${prefix}ttp (txt)
│❖➛${prefix}ttp2 (txt)
│❖➛${prefix}ttp3 (txt)
│❖➛${prefix}ttp4 (txt)
│❖➛${prefix}ttp5 (txt)
│❖➛${prefix}ttp6 (txt)
│
└──────────────
│️「 INFO 」
│
│NOME : ${NamaOwner}
│INSTA : ${instagram}
│NÚMERO : ${ownerNumber} 
│YOUTUBE :〘 ${ytb} 〙
│
╰─「 ${NamaBot} 」`
}

exports.help = help



