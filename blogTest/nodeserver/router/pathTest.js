const fs = require('fs')
console.log(process.execPath)
console.log(__dirname + "\\source\\03_button.md")
console.log(process.cwd() + "\\source\\03_button.md")
console.log(process.cwd())
/*
fs.readFile(__dirname + "\\source\\03_button.md", 'utf8', (err, data) => {
    if (err) {
        throw 'err'
    }
    console.log(data)
})*/
var readDir = fs.readdirSync(process.cwd() + "\\source");

readDir.forEach(function (i, item) {
    console.log(item[i])
})