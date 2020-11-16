const http = require ('http')

const port = process.argv[2]

if (!port) {
    console.log('usage : node e01.JS <PORT>')
    process.exit(0)
}

const server = http.createServer((req, res) => {
    res.write('<h1> Hello World ! </h1>')
    res.end()
})


server.listen(port, () => {
 console.log(`Server Started at http://localhost:${port}`)
})