const cowsay = require("cowsay")
const csvParse = require("csv-parse")

console.log(cowsay)
const result = cowsay.say({
     text: "JavaScriptからCowsayを利用しています。"
    })

console.log(result)