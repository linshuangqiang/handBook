/**
 * Created by linshuangqiang on 2017/11/2.
 */
var express = require('express')
var app = express.createServer()
app.get('/', function(req, res) {
    res.send('Welcome to Node Twitter')
})
app.listen(8000)