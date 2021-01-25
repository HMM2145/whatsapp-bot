exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
 *mau donasi ya*


اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ

“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma. Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]

*tsel* : 085298595430
*dana* : 0852-9859-5430
*gopay* :0852-9859-5430

├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
