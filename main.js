var dt = require('./datemodule')
var http = require('http')
var fs=require('fs')
var url = require('url')
http.createServer(function(request, response){
fs.readFile("./public/index.html",'UTF-8',function(err,html){
    response.writeHead(200,{'Content-Type':'text/html'});
    var q=url.parse(request.url,true).query
    var txt=q.year+ " "+q.month
    response.end(html+dt.date()+' '+txt)
})

}).listen(8081);
console.log('server is running at http://127.0.0.1:8081/')