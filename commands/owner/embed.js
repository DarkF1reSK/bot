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

        if(hodina === "slj") {
            const podm = new MessageEmbed()
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
            const pridm = new MessageEmbed()
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
            const neohybslovdruh = new MessageEmbed()
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


            return [podm, pridm, neohybslovdruh]
        }

            if (hodina === "fyz") {
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
                        {name: "----------------------------------------", value: "I =I1=I2\n U =U1+U2\nR =R1+R2"},
                        {name: "----------------------------------------", value: "P =UxI\nP =RxIxI \nP =UxU/R"}
                    )
                return [fyz, fyz2]
            }

            if (hodina === "bio") {
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
                return [bio1, bio2, bio3, bio4, bio5]
            }

    }
}