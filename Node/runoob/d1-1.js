/**
 * Created by linshuangqiang on 2017/11/2.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();
var fn = function(){
    console.log('fn')
}
eventEmitter.on('connection',fn)
eventEmitter.emit('connection')
eventEmitter.on('connection1',function(){console.log(111)})
eventEmitter.emit('connection1')