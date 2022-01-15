const moduleA = require("./module-a.js")
const moduleB = require("./module-b.js")


moduleA()
console.log(moduleB)

const content = fs.readFileSync("./kadai-09/sample/hello.text").toString("utf-8")
console.log(content)