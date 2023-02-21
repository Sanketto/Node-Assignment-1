const http = require('http');
const server = http.createServer((req, resp) => {
    const {method} = req 
    if(method === 'GET') {
         resp.end(`<h1> Hello World </h1>
         <p> This is Sanket </p>`
         ) 
    }
    else {
       resp.end(`<h1>Invalid request</h1>`)
    }
 })

 server.listen(3000, () => {
    console.log("Server online!!!")
})