const fs = require('fs')
console.log(process.execPath)
console.log(__dirname + "\\source\\03_button.md")
console.log(process.cwd() + "\\source\\03_button.md")
console.log(process.cwd())
/*
    fs.readFile(process.cwd() + "\\source\\03_git单人使用.md", 'utf8', (err, data) => {
        if (err) {
            throw 'err'
        }

        res.render('index.html', {
            basename: "icecstone' blog",
            test: 'zs',
            markdown: data
        })
    })*/
console.log("获取markdown目录下的文章列表")

var readDir = fs.readdirSync(process.cwd());
var path = require('path')
console.log(path.resolve(__dirname, '..'));
//获取服务搭建的根路径
var serverRootPath = path.resolve(__dirname, '..')

//markdown文件路径
var markdownRootPath = path.join(serverRootPath, 'source/_posts')

//markdown文件名
var markdownFileName = fs.readdirSync(markdownRootPath);

console.log(markdownFileName);
/*
readDir.forEach(function (i, item) {
    console.log(item[i])
})*/

console.log("-------------------------")
console.log("读取文件")

var url_parts = "/source/_posts/03_hadoop%E8%A7%A3%E5%8E%8B%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%90%8E%E7%9A%84%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E.md"
console.log('转义测试')
url_parts = decodeURI(url_parts)
console.log(url_parts)
fs.readFile(path.join(path.resolve(__dirname, '..'), url_parts), 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
console.log('根据markdown文件名获取数据-----------------------------------------------')
var url_parts2 = '05_ip地址和端口号.md';
fs.readFile(path.join(path.join(path.resolve(__dirname, '..'),'/source/_posts'), url_parts2), 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

