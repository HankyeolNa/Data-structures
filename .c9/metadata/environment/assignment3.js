{"changed":true,"filter":false,"title":"assignment3.js","tooltip":"/assignment3.js","value":"// npm install cheerio\n\nvar fs = require('fs');\nvar cheerio = require('cheerio');\nvar request = require('request'); // npm install request\nvar async = require('async'); // npm install async\nvar fs = require('fs');\n// load the thesis text file into a variable, `content`\n// this is the file that we created in the starter code from last week\nvar content = fs.readFileSync('data/m09.txt');\n\n// load `content` into a cheerio object\nvar $ = cheerio.load(content);\n/*\n// print (to the console) names of thesis students\n$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {\n    if(i==0||i==3||i==6||i==9)\n    console.log(i+\"번쨰 Address/Location : \"+$(elem).text());\n});\n\n*/\n// write the project titles to a text file\nvar thesisTitles = ''; // this variable will hold the lines of text\n\nvar flag =1;\n$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {\n    if(i==0||i==3||i==6||i==9) {\n        thesisTitles += flag +\"번째 주소 : \" + ($(elem).text()) + '\\n';\n        flag++;   \n    }\n        \n    \n});\nvar Split = thesisTitles.split(/\\r\\n|\\r|\\n/);\n\nvar realaddress1 = Split[3].split(',')[0];\nvar realaddress2 = Split[21].split(',')[0];\nvar realaddress3 = Split[39].split(',')[0];\nvar realaddress4 = Split[57].split(',')[0];\n\n\n\nvar apiKey = process.env.TAMU_KEY; \nconsole.log(\"apiKey : \" + apiKey)\nvar meetingsData = [];\nvar addresses = [realaddress1,realaddress2,realaddress3,realaddress4];\n\n// eachSeries in the async module iterates over an array and operates on each item in the array in series\nasync.eachSeries(addresses, function(value, callback) {\n    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';\n    apiRequest += 'streetAddress=' + value.split(' ').join('%20');\n    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;\n    apiRequest += '&format=json&version=4.01';\n    \n    request(apiRequest, function(err, resp, body) {\n        if (err) {throw err;}\n        else {\n            var tamuGeo = JSON.parse(body);\n            console.log(tamuGeo['FeatureMatchingResultType']);\n            meetingsData.push(tamuGeo);\n        }\n    });\n    setTimeout(callback, 3000);\n}, function() {\n    fs.writeFileSync('first.json', JSON.stringify(meetingsData));\n    console.log('*** *** *** *** ***');\n    console.log('Number of meetings in this zone: ');\n    console.log(meetingsData.length);\n});","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":68,"column":3},"action":"insert","lines":["// npm install cheerio","","var fs = require('fs');","var cheerio = require('cheerio');","var request = require('request'); // npm install request","var async = require('async'); // npm install async","var fs = require('fs');","// load the thesis text file into a variable, `content`","// this is the file that we created in the starter code from last week","var content = fs.readFileSync('data/m09.txt');","","// load `content` into a cheerio object","var $ = cheerio.load(content);","/*","// print (to the console) names of thesis students","$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {","    if(i==0||i==3||i==6||i==9)","    console.log(i+\"번쨰 Address/Location : \"+$(elem).text());","});","","*/","// write the project titles to a text file","var thesisTitles = ''; // this variable will hold the lines of text","","var flag =1;","$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {","    if(i==0||i==3||i==6||i==9) {","        thesisTitles += flag +\"번째 주소 : \" + ($(elem).text()) + '\\n';","        flag++;   ","    }","        ","    ","});","var Split = thesisTitles.split(/\\r\\n|\\r|\\n/);","","var realaddress1 = Split[3].split(',')[0];","var realaddress2 = Split[21].split(',')[0];","var realaddress3 = Split[39].split(',')[0];","var realaddress4 = Split[57].split(',')[0];","","","","var apiKey = process.env.TAMU_KEY; ","console.log(\"apiKey : \" + apiKey)","var meetingsData = [];","var addresses = [realaddress1,realaddress2,realaddress3,realaddress4];","","// eachSeries in the async module iterates over an array and operates on each item in the array in series","async.eachSeries(addresses, function(value, callback) {","    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';","    apiRequest += 'streetAddress=' + value.split(' ').join('%20');","    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;","    apiRequest += '&format=json&version=4.01';","    ","    request(apiRequest, function(err, resp, body) {","        if (err) {throw err;}","        else {","            var tamuGeo = JSON.parse(body);","            console.log(tamuGeo['FeatureMatchingResultType']);","            meetingsData.push(tamuGeo);","        }","    });","    setTimeout(callback, 3000);","}, function() {","    fs.writeFileSync('first.json', JSON.stringify(meetingsData));","    console.log('*** *** *** *** ***');","    console.log('Number of meetings in this zone: ');","    console.log(meetingsData.length);","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":68,"column":3},"end":{"row":68,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1538048246775}