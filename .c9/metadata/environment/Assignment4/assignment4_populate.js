{"changed":true,"filter":false,"title":"assignment4_populate.js","tooltip":"/Assignment4/assignment4_populate.js","value":"const { Client } = require('pg');\nvar fs = require('fs');\nvar async = require(\"async\");\n\n\nvar db_credentials = new Object();\ndb_credentials.user = 'hankyeolna';\ndb_credentials.host = 'mydbinstance.ctotr4de22g0.us-east-1.rds.amazonaws.com';\ndb_credentials.database = 'hankyeolna';\ndb_credentials.password = 'dkwk3981';\ndb_credentials.port = 5432;\n\n\nconst client = new Client(db_credentials);\nclient.connect();\n\n\nvar addressesForDb = []\nvar content = fs.readFileSync('../Assignment3/assignment3.json');\nvar parsedJSON = JSON.parse(content);\n\nfor (var i = 0; i < 4; i++) {\n    var address = parsedJSON[i].InputAddress.StreetAddress\n    var real = new Object();\n    real.address = address;\n    real.latLong = { lat: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude, lng: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude }\n    addressesForDb[i] = real;\n}\n\nvar thisQuery;\n\n/*\nasync.eachSeries(addressesForDb, function(value, callback) {\n    const client = new Client(db_credentials);\n    client.connect();\n    var thisQuery = \"INSERT INTO aalocations VALUES (E'\" + value.address + \"', \" + value.latLong.lat + \", \" + value.latLong.lng + \");\";\n    client.query(thisQuery, (err, res) => {\n        console.log(err, res);\n        client.end();\n    });\n    setTimeout(callback, 1000); \n});\n*/\n\n\n\nthisQuery = \"SELECT * FROM aalocations;\";\nclient.query(thisQuery, (err, res) => {\n    console.log(err, res);\n    client.end();\n});\n\n\n\n/*\nthisQuery = \"DROP TABLE aalocations;\"; \nclient.query(thisQuery, (err, res) => {\n    console.log(err, res);\n    client.end();\n});\n*/ ","undoManager":{"mark":-2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":14},"action":"insert","lines":["const { Client } = require('pg');","var fs = require('fs');","var async = require(\"async\");","","","var db_credentials = new Object();","db_credentials.user = 'hankyeolna';","db_credentials.host = 'mydbinstance.ctotr4de22g0.us-east-1.rds.amazonaws.com';","db_credentials.database = 'hankyeolna';","db_credentials.password = 'dkwk3981';","db_credentials.port = 5432;","","","const client = new Client(db_credentials);","client.connect();","","","var addressesForDb = []","var content = fs.readFileSync('../Assignment3/assignment3.json');","var parsedJSON = JSON.parse(content);","","for (var i = 0; i < 4; i++) {","    var address = parsedJSON[i].InputAddress.StreetAddress","    var real = new Object();","    real.address = address;","    real.latLong = { lat: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude, lng: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude }","    addressesForDb[i] = real;","}","","var thisQuery;"],"id":1}],[{"start":{"row":29,"column":14},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":31,"column":0},"end":{"row":60,"column":3},"action":"insert","lines":["/*","async.eachSeries(addressesForDb, function(value, callback) {","    const client = new Client(db_credentials);","    client.connect();","    var thisQuery = \"INSERT INTO aalocations VALUES (E'\" + value.address + \"', \" + value.latLong.lat + \", \" + value.latLong.lng + \");\";","    client.query(thisQuery, (err, res) => {","        console.log(err, res);","        client.end();","    });","    setTimeout(callback, 1000); ","});","*/","","","","thisQuery = \"SELECT * FROM aalocations;\";","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();","});","","","","/*","thisQuery = \"DROP TABLE aalocations;\"; ","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();","});","*/ "],"id":3}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":60,"column":3},"end":{"row":60,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":45,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1538800109591}