var back = require('./assets/ipc/back').back;
var fs = require('fs');
var path = require('path');
//var FileReader = require('FileReader');
var Buffer = require('Buffer');


//back.on('save-File', function(filepath, filename, blob){
//    console.log('save-File called');
//    var buffer = new Buffer(blob)
//    fs.writeFileSync(path.join(filepath, filename), buffer);
//
//})

back.on('save-Image', function(filepath, filename, data){
    console.log(data);
    var buffer = new Buffer(data, 'base64');
    fs.writeFileSync(path.join(filepath, filename), buffer);
    console.log('saved Image');
})

back.on('hello', function(){
    console.log('Hello World');
})
back.on('Hello', function(msg){
    console.log('badiya hoo', msg);
})

console.log("Hello From Node Js")

//const http = require("http");
//
//var server = http.createServer(function(req,res){
//    res.write("Hello World");
//    res.end();
//}).listen(4001);
