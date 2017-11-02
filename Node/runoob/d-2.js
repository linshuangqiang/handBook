/**
 * Created by linshuangqiang on 2017/11/2.
 * 异步读取文件
 */
var fs = require('fs');
var data = fs.readFile('note.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log(data);
    console.log(data.toString())
})
console.log('end')