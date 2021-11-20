const express = require("express")
const fs = require("fs")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const ejs = require("ejs")
const app = express()
const images = require('./data/dog-data')
const TelegramBot = require('node-telegram-bot-api')
const PORT = process.env.PORT || 8000
const TOKEN = '2142725507:AAEiAC2a0nnH_uhBuR8ltIObLINtLp384Sc'
const {img_acita,img_buldog,img_pitbull,img_lablador,img_basengi,img_germanshepherd } = images[0]
app.use(express.static("./public"))
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');
app.use(express.json())

app.get("/", (req, res) => res.render("index"))

// telegram 

const datauser = []

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.onText(/\/start/, msg => {
    const receiver = msg.chat.id
    bot.sendMessage(receiver, `Asalomu aleykum ${msg.from.first_name} itlar bozori botiga hush kelibsiz marhamt qilib menulardan brini tanlang`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: '🐶 Itlarning zoti'
                    },
                    {
                        text: '🐕 it zotlari haqida'
                    },
                ],
                [
                    {
                    text: '📞 Aloqa'
                }       
                ]
            ],
            resize_keyboard: true

        }
    })
})

bot.on("message", msg => {
    const receiver = msg.chat.id
    if(msg.text == "🐶 Itlarning zoti"){
        bot.sendMessage(receiver, `Marhamat ${msg.from.first_name} it zotlaridan birini tanlang`, {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "AKITA"
                        },
                        {
                            text: "Bulldog" 
                        }
                    ],
                    [
                        {
                            text: "Pitpull"
                        },
                        {
                            text: "Labrador"
                        }
                    ],
                    [
                        {
                            text: "Basengi"
                        },
                        {
                            text: "German Shepherd"
                        }
                    ],
                    [
                        {
                            text: "⬅️  Orqaga"
                        }
                    ]
                ]
            }
        })
    }
    else if(msg.text == "⬅️  Orqaga"){
        bot.sendMessage(receiver, "Asosiy Menu", {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: '🐶 Itlarning zoti'
                        },
                        {
                            text: '🐕 it zotlari haqida'
                        },
                    ],
                    [
                        {
                        text: '📞 Aloqa'
                    }       
                    ]
                ],
                resize_keyboard: true
    
            }
        })
    }
    else if(msg.text == "AKITA"){
        img_acita.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti Acita\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "Bulldog"){
        img_buldog.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti Bulldog\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "Pitpull"){
        img_pitbull.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti Pitpull\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "Labrador"){
        img_lablador.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti Labrador\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "Basengi"){
        img_basengi.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti Basengi\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "German Shepherd"){
        img_germanshepherd.forEach(element => {
            bot.sendPhoto(receiver, element, {
                caption: `Zoti German Shepherd\nYoshi ${(Math.random() * 5).toFixed(2)}\nNarhi ${Math.round(Math.random() * 500)}$`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Buyurtma berish',
                                callback_data: element
                            }
                        ]
                    ],
                    one_time_keyboard: true
                }       
            })

        });
    }
    else if(msg.text == "📞 Aloqa"){
        bot.sendPhoto(receiver, "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138133357%2F415747229603%2F1%2Foriginal.20210609-112854?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f20a22fed9e88beb650017429316b40f", {
        caption: "Contact Information: 978-701-5151"
        })
    }
    else if(msg.text == "🐕 it zotlari haqida"){
        bot.sendMessage(receiver, `Marhamat ${msg.from.first_name} it zotlaridan birini tanlang`, {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "AKITA zoti"
                        },
                        {
                            text: "Bulldog zoti" 
                        }
                    ],
                    [
                        {
                            text: "Pitpull zoti"
                        },
                        {
                            text: "Labrador zoti"
                        }
                    ],
                    [
                        {
                            text: "Basengi zoti"
                        },
                        {
                            text: "German Shepherd zoti"
                        }
                    ],
                    [
                        {
                            text: "⬅️  Orqaga"
                        }
                    ]
                ]
            }
        })
    }
    else if(msg.text == "AKITA zoti"){
        bot.sendPhoto(receiver, "https://i2.wp.com/topmira.com/images/1/Dogs1/7.%20%D0%90%D0%BA%D0%B8%D1%82%D0%B0-%D0%B8%D0%BD%D1%83.jpg", {
            caption: "Akita Inu - yapon madaniyatining munosib klassik vakili. Itga hamma narsada uyg'unlik berilgan. Uning tashqi ko'rinishi klassik shakl va o'ziga xoslikni muvaffaqiyatli uyg'unlashtirdi. To'g'ri qurilgan, katta va kuchli itning keng peshonasi, asl cho'ntagining quloqlari va murakkab buralgan dumi bor. Bunday tashqi ma'lumotlar Akita Inuni bir vaqtning o'zida tulki, bo'ri va ma'lum darajada ayiqqa o'xshatadi. Uning qudratli tanasi va mag'rur holati zotga zo'rlik beradi va ko'p sonli zotlarning orasida taniqli\nAkita Inu xarakteri chinakam samuray. Tashqi itoatkorlik va ulug'vorlik bilan itga issiq temperament berilgan. Voyaga etgan Akita misli ko'rilmagan ehtiyotkorlik va aql-idrokka ega. Nazorat qilinmagan tajovuz hujumlari bu zotga taalluqli emas. Shu bilan birga, it har doim o'z egalarini va u bilan yashaydigan hayvonlarni xavfdan himoya qilishga tayyor"
        })
    }
    else if(msg.text == "Bulldog zoti"){
        bot.sendPhoto(receiver, "https://i1.wp.com/aquarium-fish-home.ru/wp-content/uploads/2016/11/amerikanskiy-buldog-12-e1458663770183-420x352.jpg", {
            caption: "Frantsuz buldogi Bu hamroh it. Bundan ham kam emas. U dalada qushlarni ovlash yoki quyonlar ostiga kirish uchun tarbiyalanmagan. U aqlli va nafis va insonni qo'llab-quvvatlash uchun katta bo'lgan. Qanday bo'lmasin, kim o'z xo'jayini bilan divanda o'tirishni va televizorni tomosha qilishni yoqtiradi, biz uning og'ziga vaqti-vaqti bilan muomala qilsak, u o'yin-kulgini yoqmaydi yoki faol emas."
        })
    }
    else if(msg.text == "Pitpull zoti"){
        bot.sendPhoto(receiver, "https://i1.wp.com/dogcentr.ru/wp-content/uploads/2013/04/d7a03a5da3949bd283.jpg", {
            caption: "amerikalik pit buqa teriyeri (APBT) barcha teriyerlar orasida eng yaxshi ma'lum bo'lgan it zotlaridan biridir. Afsuski, bugungi kunda ham ular boshqa itlarga nisbatan 'kombinatsion tabiati' tufayli qarama-qarshiliklarni keltirib chiqarmoqda. Biroq, bunga ishonch hosil qilish uchun Barbara Shoening Bristol universitetida nashr etilgan tadqiqotini ko'rib chiqing tajovuzkorlik irq bilan bog'liq emas. Aslida, bu ko'plab fazilatlarga ega it, chunki u chaqqonligi, sabrliligi va odamlarga nisbatan mehribonligi bilan ajralib turadi. Shuning uchun u juda ko'p qirrali va ko'p qirrali zotdir."
        })
    }
    else if(msg.text == "Labrador zoti"){
        bot.sendPhoto(receiver , "https://www.mundoperros.es/wp-content/uploads/2019/03/perro-de-color-negro-y-con-collar-sentado-en-la-arena.jpg", {
            caption: "Labrador. O'yin ovchilari ishlatilgandek, ammo bu eng yaxshi ov zotidir, deyish mumkin emas. Bizning vaqtimizga, naslchilik tufayli bu itlar yanada xushmuomala va unumli bo'lishdi. Agar professional darajada bir ov bilan shug'ullangan va bu masalada assistent aniq bir itni tanlang bo'lsangiz, eng ehtimol siz boshqa zotlarga e'tibor qilish kerak. Bo'lsa-da, ov foydali bo'lishi mumkin Labrador katta xususiyati mavjud. Ular jag'ning mushaklarini to'liq boshqarishlari mumkin. Bu ularga og'ziga ham eng nozik ob'ektni oshirish va uni ezib emas imkonini beradi. bolalar yoki kichik itlar bilan 'o'yinlari' bilan, masalan, bir chiziq, yana, bu zotli uchun faqat yaxshi."
        })
    }
    else if(msg.text == "Basengi zoti"){
        bot.sendPhoto(receiver, "https://data.atomiyme.com/image/b0cc77647dcd0ec9.jpg", {
            caption: "Basenji itlarining zoti bir necha ming yillar davomida mavjud bo'lgan. U Rossiyaga 90-yillarning oxirida kiritilgan. U shuningdek, Afrikaning qaqshatqich iti deb ham ataladi, chunki bu zotning qiziq xususiyati shundaki, xavotirli paytlarda qichishish o'rniga, basenjining tirnash xususiyati shovqinli tovushlarni chiqaradi Itga ega bo'lishni o'ylaydigan odamlar bu hayvonlarga etibor berishlari kerak. Zot inson va ilmiy aralashuvisiz mustaqil ravishda shakllantirilgan va basenji hamrohi sifatida ishtirok etish juda qiziq."
        })
    }
    else if(msg.text == "German Shepherd zoti"){
        bot.sendPhoto(receiver, "https://static10.tgstat.ru/channels/_0/ed/ed97c61b6a89568cfac6c72fed770b57.jpg", {
            caption: "Dunyo bo'ylab ko'plab odamlar uchun nemis cho'pon hali ham ideal it qanday bo'lishi kerakligi haqidagi misoldir. Birinchidan, albatta, ularning yuqori aql-zakovati haqida gapirish kerak - dunyoda bu borada nemis cho'pon bilan raqobatlasha oladigan kam sonli zotlar mavjud. Ba'zida siz itning tanasida gaplashayotgan odam bilan gaplashayotgandek tuyulishi mumkin, u gapirish qobiliyati yo'qligiga qaramay, yuz ifodalari, ovozi va nutqi orqali o'z tajribalari va fikrlarini sizga etkazishga muvaffaq bo'ladi. tana tili. \n Nemis cho'poni odamni juda yaxshi tushunadi va egasi haqida gap ketganda, u ko'pincha uni istagini bildirishidan oldin ham tushunadi. Yangi odamni do'stlari doirasiga kiritish uchun ularga biroz vaqt kerak bo'ladi, lekin agar u bu doiraga kirsa, it uni uzoq vaqt eslab qoladi."
        })
    }
})

bot.on('callback_query',  data => {
    const receiver = data.from.id
    
    let username;

    const {data: id} = data

    let dog =  img_acita.find(e=> e == id)
    bot.sendMessage(receiver, 'Ismingizni kiriting', {
        reply_markup: {
            force_reply: true
        }
    }).then(payload => {
        const replyListenerId = bot.onReplyToMessage(payload.chat.id, payload.message_id, msg => {
            username = msg.text
            bot.removeReplyListener(replyListenerId)
            const receiver = data.from.id
            bot.sendMessage(receiver, 'Raqamni jonating', {
                reply_markup: {
                    keyboard: [
                        [
                            {
                                text: 'Contact',
                                request_contact: true
                            }
                        ]
                    ],
                    resize_keyboard: true
                }
            }).then(payload =>  {
                const replyListenerId = bot.onReplyToMessage(payload.chat.id, payload.message_id, msg => {
    
                    bot.removeReplyListener(replyListenerId)
        
                    const { contact: { phone_number: number } } = msg
                    
                    datauser.push({
                        username,
                        contact: number
                    })          
                    bot.sendMessage(receiver, 'Sizning buyurtmangiz qabul qilindi, yaqin orada aloqaga chiqamiz !!' + username, {
                        reply_markup: {
                            keyboard: [
                                [
                                    {
                                        text: "⬅️  Orqaga"
                                    }
                                ]
                            ],
                            resize_keyboard: true
                        }
                    })
                    
                })
            })
        })
    })
})
bot.on("polling_error", console.log);

app.get("/sels", (req, res) => res.send(JSON.stringify(datauser)))


app.listen(PORT, () => {
    console.log("server run port " + PORT)
})