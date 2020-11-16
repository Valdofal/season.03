 const http = require ('http')
 let port = process.argv[2]
 const fs = require('fs')

 if (!port) {
    port = 4242;
 }

 const serveur = http.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.write(fs.readFileSync('index.html', 'utf-8'))
    res.end()
 })
 serveur.listen(port, () => {
     console.log(`Server is running at ${port}`)
 })