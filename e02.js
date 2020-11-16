const http = require ('http')
const port = process.argv[2]

if (!port) {
    console.log('usage : node e02.js <PORT>')
    process.exit(0)
}

const serveur = http.createServer( ( req, res ) => {
    
    if(req.method === 'POST') 
    {
        res.write('Heisenberg')
    }
    else if (req.method === 'GET'){
        res.write('<h1> Hello World ! </h1>')
    }
    res.end()
})

serveur.listen(port, () => {
    console.log(`Server is running at ${port}`)
})