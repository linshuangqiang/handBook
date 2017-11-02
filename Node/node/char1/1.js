/**
 * Created by linshuangqiang on 2017/11/2.
 */
var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello,node')
}).listen('8080','127.0.0.1');
console.log('server start')