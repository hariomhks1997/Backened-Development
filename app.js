const http=require("http");
// function rqListener(req,res){

// }
// http.createServer(rqListener);
// http.createServer(function(req,res){

// });
const server=http.createServer((req,res)=>{
   const url=req.url;
   if (url === '/') {
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
    }
//console.log(res.url,req.method,req.headers);
   //console.log(req);
   //process.exit();
   res.setHeader('Content-Type',"text/html")
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>')
   res.write("<body><h1>Hello From My Node.js</h1></body>")
   res.write('</html>');
   res.end();
   
});
server.listen(3000);