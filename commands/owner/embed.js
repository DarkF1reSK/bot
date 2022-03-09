const {MessageEmbed} = require("discord.js")

module.exports = {
    description: "send embed",
    category: "misc",
    testOnly: true,
    slash: true,
    ownerOnly: true,


    callback: async({interaction}) => {
        /*const podm = new MessageEmbed()
            .setTitle(`**PODSTATNÉ MENÁ**`)
            .setColor("RANDOM")
            .setTimestamp()
            .addFields(
                {name: "Delenie: ", value: "všeobecne/vlastne\n konkretne/abstraktné\n"},
                {name: "Urcujeme: ", value: "rod(mužský, ženský, stredný)\nčislo(jednotne, mnozne)\npad(N,G,D,A,L,I)\nvzor(chlap, hrdina, dub, stroj, žena, ulica, dlaň, kosť, mesto, srdce, vysvedčenie, dievča,)\nživotnost{v muzskom rode}(zivotne/nezivotne)\n"},

                )
        const pridm = new MessageEmbed()
            .setTitle(`**PRIDAVNE MENA**`)
            .setColor("RANDOM")
            .setTimestamp()
            .addFields(
                {name: "Rozdelenie: ", value: "akostne: pomenuvaju vlastnost, stupnuju sa, maju svoj protiklad\n vztahove: vyjadraju vlastnost, nestupnuju sa, nemaju protiklady\nprivlastnovacie: privlastnuju osobe alebo zvieratu, v zak. tvare pripony -ov, -in, í"},
                {name: "Urcujeme: ", value: "rod(muz, zen, str)\ncislo(jed.č, mn.č)\npad(N,G,D,A,L,I)\nvzor(pekny, cudzi, matkin, otcov, pavi)"},
                {name: "Stupnovanie: ", value: "pravidelne: rýchly, rýchlejší, najrýchlejší\nnepravidelne: dobrý, lepsi, najlepsi"},


                )

        return [podm, pridm] */

        const fyz = new MessageEmbed()
            .setTitle("**Paraelny obvod**")
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription("I = U/R \n R = U/I \n U = RxI ")
            .addFields(
                {name: "Nazvy: ", value: "I = ele.prud [jednotka amper]\nu = napatie [jednotka volt]\nR = odpor [jednotka ohm]"},
                {name: "----------------------------------------", value: "I= I1+I2\nU =U1=U2\nR =R1xR2/R1+R2 (R =R1/2 ked je R1 a R2 rovnake)"},
                {name: "----------------------------------------", value: "P= UxI\nP = RxIxI \nP =UxU/R"}
            )
        const fyz2 = new MessageEmbed()
            .setTitle("**Seriovy obvod**")
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription("I = U/R \n R = U/I \n U = RxI ")
            .addFields(
                {name: "Nazvy: ", value: "I = ele.prud [jednotka amper]\nu = napatie [jednotka volt]\nR = odpor [jednotka ohm]"},
                {name: "----------------------------------------", value: "I =I1=I2\n U =U1+U2\nR =R1+R2"},
                {name: "----------------------------------------", value: "P =UxI\nP =RxIxI \nP =UxU/R"}
            )
        return [fyz, fyz2]
    }
}
