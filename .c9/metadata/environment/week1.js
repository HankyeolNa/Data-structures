{"filter":false,"title":"week1.js","tooltip":"/week1.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["// npm install request","// mkdir data","","var request = require('request');","var fs = require('fs');","","request('https://parsons.nyc/thesis-2018/', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["// npm install request","// mkdir data","","var request = require('request');","var fs = require('fs');","","request('https://parsons.nyc/thesis-2018/', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["var request = require('request');","var fs = require('fs');","var async = require(\"async\");","/*","var http = require('http');","http.createServer(function (req, res) {","    res.writeHead(200, {'Content-Type': 'text/plain'});","    res.end('Hello World\\n');","}).listen(process.env.PORT, process.env.IP);","*/","var lookup_list = [];","for (var i = 1; i < 10; i++) {","    lookup_list.push(i);","}","var url = 'https://parsons.nyc/aa/m0';","var requestFunction = function(index) {","    var requestUrl = url + index + '.html';","    var saveTxt = 'data/m0' + index + '.txt';","    request(requestUrl, function(error, response, body) {","        if (!error && response.statusCode == 200) {","            fs.writeFileSync(saveTxt, body);","        }","        else { console.log(\"Request failed!\") }","    });","}","","async.each(lookup_list, requestFunction, function (err) {","    if(err) console.log(\"async Error\")","});","","","request('https://parsons.nyc/aa/m10.html', function(error, response, body) {","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('data/m10.txt', body);","    }","    else { console.log(\"Request failed!\") }","","});"],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":39},"end":{"row":15,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1536121396165,"hash":"df399591e1eef538bf9fdcdf9cff5f00f96448d1"}