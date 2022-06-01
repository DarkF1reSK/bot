const {MessageEmbed} = require("discord.js")

module.exports = {
    description: "send embed",
    category: "misc",
    testOnly: true,
    slash: true,
    ownerOnly: true,
    options: [
        {
            name: "hodina",
            type: "STRING",
            description: "hodina",
            required: true,
        }
    ],

    callback: async({interaction}) => {
        const hodina = interaction.options.getString("hodina")
        const color = "DARK_PURPLE"

            const slj1 = new MessageEmbed()
                .setTitle(`**PODSTATNÉ MENÁ**`)
                .setColor(color)
                .setTimestamp()
                .addFields(
                    {name: "Delenie: ", value: "všeobecne/vlastne\n konkretne/abstraktné\n"},
                    {
                        name: "Urcujeme: ",
                        value: "rod(mužský, ženský, stredný)\nčislo(jednotne, mnozne)\npad(N,G,D,A,L,I)\nvzor(chlap, hrdina, dub, stroj, žena, ulica, dlaň, kosť, mesto, srdce, vysvedčenie, dievča,)\nživotnost{v muzskom rode}(zivotne/nezivotne)\n"
                    },
                )
            const slj2 = new MessageEmbed()
                .setTitle(`**PRIDAVNE MENA**`)
                .setColor(color)
                .setTimestamp()
                .addFields(
                    {
                        name: "Rozdelenie: ",
                        value: "akostne: pomenuvaju vlastnost, stupnuju sa, maju svoj protiklad\n vztahove: vyjadraju vlastnost, nestupnuju sa, nemaju protiklady\nprivlastnovacie: privlastnuju osobe alebo zvieratu, v zak. tvare pripony -ov, -in, í"
                    },
                    {
                        name: "Urcujeme: ",
                        value: "rod(muz, zen, str)\ncislo(jed.č, mn.č)\npad(N,G,D,A,L,I)\nvzor(pekny, cudzi, matkin, otcov, pavi)"
                    },
                    {
                        name: "Stupnovanie: ",
                        value: "pravidelne: rýchly, rýchlejší, najrýchlejší\nnepravidelne: dobrý, lepsi, najlepsi"
                    },
                )
                const slj3 = new MessageEmbed()
                .setTitle("**Neohybné slovne druhy**")
                .setColor(color)
                .setTimestamp()
                .addFields(
                    {
                        name: "Príslovky",
                        value: "vyjadrujú okolnosti deja\n**príslovky miesta:** `hore, vzadu, doma, vonku...`\n**príslovky času:** `dnes, neskoro, včas...`\n**príslovky spôsobu:** `dobre, rýchlo, divoko...`\n**príslovky príčiny:** `úmyselne, omylom, zámerne...`"
                    },
                    {
                        name: "Predložky",
                        value: "spájajú sa s podstatným menom alebo zámenom, bližšie určujú ich význam\n\n```POZOR! Niektoré slová môžu byť raz predložka, inokedy príslovka.\nNapr.: Chodieval často OKOLO.(príslovka)\nChodieval často OKOLO domu. (predložka)```"
                    },
                    {
                        name: "Spojky",
                        value: "spájajú slová a vety\nnapr.: a, i, aj, ani, alebo, či...",
                    },
                    {
                        name: "Častice",
                        value: "vyjadrujú osobný postoj, uvádzajú vety, zdôrazňujú slovo:\n**istota-neistota:** `asi, možno, iste, určite`\n**veľa-málo:** `iba, len, až, dokonca...`\n**časové hodnotenie:** `už, až`\n\n```POZOR! Niektoré slová môžu byť raz spojka, inokedy častica.\nNapr.: Kúpil ihly AJ nite.(spojka)\nVrátila sa AJ trikrát. (častica)```"
                    },
                    {
                        name: "Citoslovcia",
                        value: "**vyjadrujú postoje, pocity:** `napr: jaj, joj, fuj, ach...`\n**jednoduché povely:** `napr: pŕ, hijó`\n**napodobňujú zvuky:** `bum, tresk, šuch`\n\n```POZOR! V niektorých vetách môže citoslovce plniť úlohu vetného člena, vtedy ho neoddeľujeme čiarkou.\nNapr.: Ozvalo sa hlasné **BUCH**.(podmet)\nNapr.: Žaba **ČĽUP** do vody.(prísudok)```"
                    }
                )


                const fyz = new MessageEmbed()
                    .setTitle("**Paraelny obvod**")
                    .setColor(color)
                    .setTimestamp()
                    .setDescription("I = U/R \n R = U/I \n U = RxI ")
                    .addFields(
                        {
                            name: "Nazvy: ",
                            value: "I = ele.prud [jednotka amper]\nu = napatie [jednotka volt]\nR = odpor [jednotka ohm]\nP = vykon [jednotka watt]"
                        },
                        {
                            name: "----------------------------------------",
                            value: "I= I1+I2\nU =U1=U2\nR =R1xR2/R1+R2 (R =R1/2 ked je R1 a R2 rovnake)"
                        },
                        {name: "----------------------------------------", value: "P= UxI\nP = RxIxI \nP =UxU/R"}
                    )
                const fyz2 = new MessageEmbed()
                    .setTitle("**Seriovy obvod**")
                    .setColor(color)
                    .setTimestamp()
                    .setDescription("I = U/R \n R = U/I \n U = RxI ")
                    .addFields(
                        {
                            name: "Nazvy: ",
                            value: "I = ele.prud [jednotka amper]\nu = napatie [jednotka volt]\nR = odpor [jednotka ohm]\nP = vykon [jednotka watt]"
                        },
                        {   name: "----------------------------------------",
                            value: "I =I1=I2\n U =U1+U2\nR =R1+R2"},
                        {   name: "----------------------------------------",
                            value: "P =UxI\nP =RxIxI \nP =UxU/R"},
                    )
            


                const bio1 = new MessageEmbed()
                    .setTitle("**Skameneliny a vek zeme**")
                    .setColor(color)
                    .setTimestamp()
                    .addFields(
                        {name: "--",value: "Zem vznikla asi pred 4,6 miliardami rokov.\nDôkazy o živote v dávnych dobách poskytujú skameneliny.\nVeda skúmajúca skameneliny sa volá paleontológia.\n"},
                        {name: "--",value: "Skameneliny sú zvyšky pevných častí organizmov (kosti, schránky živočíchov, časti dreva...).  Málokedy sú to zvyšky celého organizmu (telá mamutov, hmyz v skamenenej živici). "},
                        {name: "K skamenelinám radíme: ", value: "Odtlačky listov a lastúr\nKamenné jadrá - ide o výplň dutín schránok"},
                        {name: "Pri skúmaní dejín Zeme je dôležité poznať vek hornín: ", value: "**1. Pomerný vek: **\nSa určuje podľa uloženia vrstiev hornín a skamenelín. Spodná vrstva je staršia ako vrstva uložená nad ňou. Vrstvy, ktoré obsahujú rovnaké skameneliny majú rovnaký vek.\n **2. Skutočný vek: **\n Vek, ktorý uplynul od vzniku hornín. Na jeho stanovenie sa využíva rozpad rádioaktívnych prvkov."},
                        {name: "Geologické éry: ", value: "prahory\nstarohory\nprvohory\ndruhohory\ntreťohory\nštvrtohory"},
                    )

                const bio2 = new MessageEmbed()
                     .setTitle("**krasové procesy**")
                     .setTimestamp()
                     .setColor(color)
                     .addFields(
                         {name: "--", value: "súvisia s rozpúšťaním vápenca zrážkovou vodou, ktorá obsahuje CO2 zo vzduchu "},
                         {name: "SPELEOLÓGIA", value: "vedný odbor, ktorý sa zaoberá krasovými procesmi"},
                         {name: "POVRCHOVÉ KRASOVÉ ÚTVARY: ", value: "**Škrapy** – priehlbiny oddelené hrebienkami\n **Závrty** – lievikovité alebo misovité priehlbiny\n**Ponor** – miesto, kde sa voda prepadá pod zem\n**Vyvieračka** – miesto, kde sa voda znova objavuje na zemskom povrchu  "},
                         {name: "PODZEMNÉ KRASOVÉ ÚTVARY: ", value: "**Komíny** – zvislé diery\n**Priepasti** – vznikajú postupným rozrušovaním komínov  "},
                         {name: "Kvaple: ", value: "**STALAKTITY** – rastú zo stropu nadol \n**STALAGMITY** – rastú zo zeme nahor \n**STALAGNÁTY** – vznikajú spojením stalaktitov a stalagmitov \n**BRČKÁ** – veľmi tenké stalaktity "}
                     )

                const bio3 = new MessageEmbed()
                     .setTitle("**Ladovce**")
                     .setColor(color)
                     .setTimestamp()
                     .addFields(
                         {name: "typy ladovcov: ", value: "pevninské, horské"},
                         {name: "Kde vznikajú ľadovce?", value: "Ľadovce vznikajú na miestach, kde je vždy veľmi chladno, a kde sa nedostáva slnečné žiarenie.\nĽadovce vznikajú v polárnych a vysokohorských oblastiach nad snežnou čiarou.\n"},
                         {name: "Horský ladovec: ", value: "Horský ľadovec vzniká vo vysokých pohoriach v oblastiach večného snehu – nad snežnou čiarou, kde sa sneh nikdy neroztopí."}, 
                         {name: "cinnost ladovca: ", value: "Ľadovec svojou činnosťou pretvára okolitú krajinu.\nĽadovec sa pribúdaním snehových vrstiev neustále zväčšuje\nV súčasnosti sa nachádzajú horské ľadovce napríklad v Alpách."},
                         {name: "ako vznika morena", value: "Ľadovec svojou činnosťou rozrušuje horniny a prenáša množstvo materiálu do nižších polôh\n Po roztopení ľadovca zostávajú na niektorých miestach hrubé vrstvy balvanov, kameňov, hliny a piesku.\nTieto navŕšené kopy hornín nazývame morény."},
                     )

                const bio4 = new MessageEmbed()
                     .setTitle("**činnost vetra**")
                     .setColor(color)
                     .setTimestamp()
                     .setDescription("Vietor je tvorcom, ale aj ničiteľom.")
                     .addFields(
                         {name: "Preto činnosť vetra môže byť: ", value: "**rušivá** – prejavuje sa odnášaním drobných úlomkov a obnažovaním povrchu skál\n**tvorivá** – prejavuje sa ukladaním piesku, najmä v púšťach."},
                         {name: "Rušivá činnosť vetra", value: "Rušivá činnosť vetra sa prejavuje odnášaním drobných úlomkov, obnažovaním a vymieľaním povrchu skál.\nProces vymieľania a rozrušovania holého skalného povrchu vetrom nazývame veterná erózia."},
                         {name: "Veternej erózii podlieha: ", value: "holý skalný povrch,\npôda na poliach v miestach, kde nerastú rastliny,\nodkryté pieskové steny.\n"},
                         {name: "rusivou cinnostou vetra vznikaju: ", value: "skalné hríby, skalné mosty, skalné brány, skalné mestá"},
                         {name: "tvoriva cinnost vetra", value: "Tvorivú činnosť vetra môžeme pozorovať najmä v púštnych oblastiach a na piesočných brehoch mora. Prejavuje sa ukladaním piesku.\nVietor svojou činnosťou prenáša, navieva piesok a ukladá ho na určité miesto - vytvára pieskové presypy – duny."}
                     )

                const bio5 = new MessageEmbed()
                     .setTitle("**Usadene horniny**")
                     .setColor(color)
                     .setTimestamp()
                     .addFields(
                         {name: "Rozdeľuju sa na: ", value: "úlomkovité usadené horniny-spevnené\nnespevnené\norganogénne usadené horniny\nchemické usadené horniny\n"},
                         {name: "Úlomkovité usadené horniny: ", value: "vznikli zvetrávaním, prenášaním, usadzovaním a spevňovaním úlomkov hornín v riekach, jazerách alebo na súši\n **patria sem: **\nNespevnené: štrk, piesok, prach, spraš a íl.\nSpevnené:zlepenec, pieskovec, ílovec a ílovitá bridlica.\n"},
                         {name: "Organogénne usadené horniny: ", value: "znikli činnosťou organizmov a z ich zvyškov, patria sem: čierne uhlie, hnedé uhlie, ropa..."},
                         {name: "Chemické usadené horniny: ", value: "vznikli vylúčením rozpustných látok z morskej, jazernej alebo minerálnej vody, patria sem: travertín, kamenná soľ, sadrovec..."}
                     )



                const che1 = new MessageEmbed()
                    .setTitle("**Sacharidy**")
                    .setColor(color)
                    .setTimestamp()
                    .setDescription("tvoria súčasť rastlinných a živočíšnych buniek, slúžia ako hlavný zdroj energie")
                    .addFields(
                        {
                            name: "rozdelenie: ",
                            value: "jednoduché -- zložene: oligosacharidy -- polysacharidy"
                        },
                        {
                            name: "dalej jeben na to, to nejde",
                            value: "kokotina",
                        }
                    )

                const che2 = new MessageEmbed()
                    .setTitle("**tuky**")
                    .setColor(color)
                    .setTimestamp()
                    .addFields(
                        {
                            name: "podla skupenstva delime na: ",
                            value: "tuhé -- oleje",
                        },
                        {
                            name: "tuhe: ",
                            value: "Tuhé tuky sú estery prevažne mastných kyselín, ktoré majú v štruktúre len jednoduché väzby. Sem patrí napríklad masť, maslo.",
                        },
                        {
                            name: "oleje: ",
                            value: "Oleje sú väčšinou estery mastných kyselín, ktoré majú v štruktúre násobné väzby ako napríklad kyselina olejová. Sem patrí napríklad rybí tuk, slnečnicový olej.",
                        },
                        {
                            name: "podla povodu delime na: ",
                            value: "rastlinne -- zivocisne",
                        },
                        {
                            name: "rastlinne: ",
                            value: "ziskava sa lisovanim semienok alebo plodov\nneobsahuju choresterol",
                        },
                        {
                            name: "zivocisne: ",
                            value: "Nachadzaju sa v mlieku, vajíčkach, v mäse",
                        },
                    )

                const che3 = new MessageEmbed()
                    .setTimestamp()
                    .setTitle("**bielkoviny**")
                    .setColor(color)
                    .setDescription("Bielkoviny patria neodmysliteľne medzi najdôležitejšie organické zlúčeniny. Stavebné bielkoviny tvoria telá všetkých organizmov. Imunita organizmu tiež úzko súvisí s bielkovinami.")
                    .addFields(
                        {
                            name: "--",
                            value: "Sú to viacprvkové organické zlúčeniny.",
                        },
                        {
                            name: "podla tvaru delime na: ",
                            value: "vláknite -- guľovite",
                        },
                        {
                            name: "funkcia bielkovin: ",
                            value: "stavebná - sú súčasťou všetkých bunkových membrán.\nmetabolická - katalyzujú všetky reakcie, ktoré prebiehajú v bunke.\ninformačná - tvoria protilátky nevyhnutné pre obranyschopnosť organizmu, sú súčasťou hormónov, ktoré regulujú procesy v  bunkách.",
                        },
                    )

                const che4 = new MessageEmbed()
                    .setTitle("**Kyslikate derivaty**")
                    .setTimestamp()
                    .setColor(color)
                    .addFields(
                        {
                            name: "Kyslíkaté deriváty",
                            value: "Sú deriváty, ktoré majú v charakteristickej skupine atóm kyslíka.",
                        },
                        {
                            name: "Patria tu: ",
                            value: "hydroxyderiváty, karbonylové zlúčeniny, karboxylové kyseliny.",
                        },
                        {
                            name: "Hydroxyderiváty",
                            value: "delime ich na: alkoholy -- fenoly ",
                        },
                        {
                            name: "alkoholy",
                            value: "metanol: je to nebezpečný jed\nbezfarebná kvapalina s charakteristickým zápachom a chuťou podobnou alkoholickým nápojom.\n\netanol: bezfarebná kvapalina s charakteristickým zápachom a chuťou alkoholu\nvyrába sa destiláciou",
                        }
                    )

                const che5 = new MessageEmbed()
                    .setTimestamp()
                    .setTitle("**derivaty uhlovodikov**")
                    .setColor(color)
                    .setDescription("Deriváty uhrovodíkov sú zlúčeniny, ktoré sú odvodené od uhlovodíkov nahradením jedného alebo viacerých atómov vodíka iným atómom alebo funkčnou skupinou. ")
                    .addFields(
                        {
                            name: "--",
                            value: "patria medzi najrozsirenejsie organicke zluceniny",
                        },
                        {
                            name: "--",
                            value: "hlovodíkový zvyšok vzniká odtrhnutím 1 alebo viacerých atómov vodíka z molekuly uhrovodíka",
                        },
                        {
                            name: "--",
                            value: "Charakteristická skupina .:•je atóm alebo skupina atómov, ktora, sa viaže na uhrovodíkovy zvyšok. \n",
                        },
                        {
                            name: "--",
                            value: "teflonom sa pokrivaju hlinikove panvice, pouzivame drevene lizicky ak sa zacne lupat panvica patri do zberu",
                        },
                    )

            
                const geo1 = new MessageEmbed()
                     .setTitle("hospodarstvo")
                     .setTimestamp()
                     .setColor(color)
                     .addFields(
                        {
                            name: "------------------------------",
                            value: "je hospodarsky najvyspelejsim statom sveta",
                        },
                        {
                            name: "Pre hospodárstvo USA je typické",
                            value: "nerastne bohastvo: ropa, uran, zemny plyn\nrudy:zelezo, med, cin\nzemiaky, kukurica, psenica",
                        },
                        {
                            name: "Panamericka dialnica:",
                            value: "prepaja celu ameriku",
                        }
                  )
                const geo2 = new MessageEmbed()
                    .setTitle("obyvatelstvo")
                    .setTimestamp()
                    .setColor(color)
                    .addFields(
                        {
                            name: "zije tam viac ako 300m obyvatelov",
                            value: "Uradnym jazykom je anglictina",
                        },
                        {
                            name: "-------------------------------------",
                            value: "70% bielych\n 12% ciernych\n 11% latinskeho povodu\n4% azijskeho povodu",
                        },
                        {
                            name: "povodny obyvatelia",
                            value: "indiani a eskimaci",
                        },
                        {
                            name: "najviac osidlena je vychodna cast",
                            value: "zivotna uroven obyvatelov USA sa zaraduje medzi najvyssie na svete",
                        },
                    )
                const geo3 = new MessageEmbed()
                    .setTitle("Mesta")
                    .setTimestamp()
                    .setColor(color)
                    .addFields(
                        {
                            name: "Hlavne mesto Washington D.C.",
                            value: "Najvacsie mesto New York",
                        },{
                            name: "idk kde to dat",
                            value: "naj. mesta: sao paulo,\nMexico: Ciuad de mexico\nEquador: quito\nPeru: lima\nBrazilia: brasil\nBolivia: la Paz",
                        }
                    )
                const geo4 = new MessageEmbed()
                      .setTitle("Canada")
                      .setTimestamp()
                      .setColor(color)
                      .addFields(
                        {
                            name: "Hlavne mesto: Otawa",
                            value: "Naj. mesto: Toronto",
                        },{
                            name: "--------------------------------",
                            value: "10 provincii ||| 3 teritoria",
                        },{
                            name: "Uradny jazyk: ",
                            value: "Anglictina, Francuzstina",
                        },{
                            name: "--------------------------------",
                            value: "rozloha: 9.9m km2",
                        },{
                            name: "provincia: ",
                            value: "spravna uzemna jednotka",
                        },{
                            name: "terutorium: ",
                            value: "obvod, uzemny celok (oblasti)",
                        },{
                            name: "najznamejsie narodne parky: ",
                            value: "Jasper, buffalo,",
                        },{
                            name: "Naj. osidlena na hraniciach usa",
                            value: "zije tu vela pristahovalcov",
                        },
                      )


            if (hodina === "slj") {
                return [slj1, slj2, slj3]
            }
            if(hodina === "fyz") {
                return [fyz, fyz2]
            }
            if(hodina === "bio") {
                return [bio1, bio2, bio3, bio4, bio5]
            }
            if(hodina === "che") {
                return [che1, che2, che3, che4, che5]
            }
            if(hodina === "geo") {
                return [geo1, geo2,geo3,geo4]
            }
            
        
    }
}