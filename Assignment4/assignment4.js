const { Client } = require('pg');
var fs = require('fs');
var async = require("async");


var db_credentials = new Object();
db_credentials.user = 'hankyeolna';
db_credentials.host = 'mydbinstance.ctotr4de22g0.us-east-1.rds.amazonaws.com';
db_credentials.database = 'hankyeolna';
db_credentials.password = 'dkwk3981';
db_credentials.port = 5432;


const client = new Client(db_credentials);
client.connect();


var addressesForDb = []
var content = fs.readFileSync('../Assignment3/assignment3.json');
var parsedJSON = JSON.parse(content);

for (var i = 0; i < 4; i++) {
    var address = parsedJSON[i].InputAddress.StreetAddress
    var real = new Object();
    real.address = address;
    real.latLong = { lat: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude, lng: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude }
    addressesForDb[i] = real;
}

var thisQuery;

/*
thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
*/


/*
async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
});
*/



thisQuery = "SELECT * FROM aalocations;";
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});



/*
thisQuery = "DROP TABLE aalocations;"; 
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
*/ 
