var request = require('request');
var fs = require('fs');
var async = require("async");
/*
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
*/
var lookup_list = [];
for (var i = 1; i < 10; i++) {
    lookup_list.push(i);
}
var url = 'https://parsons.nyc/aa/m0';
var requestFunction = function(index) {
    var requestUrl = url + index + '.html';
    var saveTxt = 'data/m0' + index + '.txt';
    request(requestUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync(saveTxt, body);
        }
        else { console.log("Request failed!") }
    });
}

async.each(lookup_list, requestFunction, function (err) {
    if(err) console.log("async Error")
});


request('https://parsons.nyc/aa/m10.html', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('data/m10.txt', body);
    }
    else { console.log("Request failed!") }

});