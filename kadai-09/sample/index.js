const moduleA = require("./module-a.js")
const moduleB = require("./module-b.js")
const fs = require("fs")
moduleA()
console.log(moduleB)
//fs.writeFileSync("./kadai-09/sample/hello.text", "こんにちは")
const content = fs.readFileSync("./kadai-09/sample/hello.text").toString("utf-8")
console.log(content)