/**
 * Created by linshuangqiang on 2017/11/2.
 */
var net = require('net');
var chatServer = net.createServer();
chatServer.on('connection',function(client){
    client.write('hello');
    client.write('node world\n');
    client.end('bey');
})
//使用另一个打开此命令telnet 127.0.0.1 9000
chatServer.listen(9000)
//var net = require('net')
//var chatServer = net.createServer()
//chatServer.on('connection', function(client) {
//    client.write('Hi!\n');
//    client.write('Bye!\n');
//    client.end()
//})
//chatServer.listen(9000)