/**
 * Created by linshuangqiang on 2017/11/2.
 * 同步读取文件
 */
var fs = require('fs');
var data = fs.readFileSync('note.txt');
console.log(data.toString());
console.log('end')
/*
*1.回掉函数
 end
* */