// プロパティの値を書き換える

const obj = {
    name: "Oki",
    age: 20,
    gender: "female",
}

console.log(obj)
obj.age = obj.age + 1
console.log(obj)
obj.hasCat = true
obj.hasDog = false
obj.address = "England"
console.log(obj)
delete obj.hasDog
console.log(obj)