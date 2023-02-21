var http = require("http");
const PORT = 8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const {method} = req;
   
    
        if(req.url === '/welcome'){
            res.statusCode = 200;
            res.end(`<h1>Welcome to Dominos!</h1>`)
            return
        }
        if(req.url === '/contact'){
            res.statusCode = 200;
            res.end(JSON.stringify({
                phone: 18602100000, 
                email: "guestcaredominos@jublfood.com" 
            }))
            return
     }
    
    
        res.statusCode = 404;
       res.end(`<h1>404</h1>`)
    
  
}

httpServer.listen(PORT,()=>{
    console.log("Server listening on port", PORT );
})

module.exports = httpServer;