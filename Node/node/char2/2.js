/**
 * Created by linshuangqiang on 2017/11/2.
 */
var net = require('net');
var chatServer = net.createServer();
chatServer.on('connection',function(client){
    client.write('hello ');
    client.write('node world\n');
    client.on('data',function(data){
        console.log(data.toString())
    })
})
chatServer.listen(9000)