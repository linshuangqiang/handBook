/**
 * Created by linshuangqiang on 2017/11/2.
 */
var net = require('net');
var chatServer = net.createServer();
var clientList = [];
chatServer.on('connection',function(client){
    client.write('hi\n ');
    clientList.push(client);
    client.on('data',function(data){
        for(var i =0; i < clientList.length;i++){
            clientList[i].write(data)
        }
    })
})
chatServer.listen(9000)