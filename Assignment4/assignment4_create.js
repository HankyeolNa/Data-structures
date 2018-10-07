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

var thisQuery;
// Sample SQL statement to delete a table: 
// thisQuery = "DROP TABLE aalocations;"; 
// Sample SQL statement to query the entire contents of a table: 
// thisQuery = "SELECT * FROM aalocations;";
thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});


