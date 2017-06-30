/**
 * Created by goosetaculous on 6/26/17.
 */
(()=>{

    const questions       = require('./question')
    const basicCard =  require('./BasicCard')
    const clozedCard = require('./ClozedCard')

    console.log("DEMO basicCard \n")
    var firstPresident = new basicCard("Who was the first President of the United States?","George Washington")

    console.log(`Front of the card "${firstPresident.front}"`)
    console.log(`Back of the card "${firstPresident.back}"`)

    console.log("\nDEMO ClozedCard \n")
    var valid = new clozedCard("George Washington was the first president of the United States","George Washington")

    //var testCloze2 = new clozedCard("George Washington was the first president of the United States","George Washington")
    console.log(`Cloze text is "${valid.cloze}"`)
    console.log(`Partial text is "${valid.partial}"`)
    console.log(`FullText text is "${valid.fullText}"`)
    console.log("\nTesting invalid\n")
    var invalid =  new clozedCard("George Washington was the first president of the United States","James Washington")
    console.log(`Cloze text is "${invalid.cloze}"`)
    console.log(`FullText text is "${invalid.fullText}"`)






})()