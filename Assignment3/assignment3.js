// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');
// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('Assignment2/m09.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);
/*
// print (to the console) names of thesis students
$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {
    if(i==0||i==3||i==6||i==9)
    console.log(i+"번쨰 Address/Location : "+$(elem).text());
});

*/
// write the project titles to a text file
var thesisTitles = ''; // this variable will hold the lines of text

var flag =1;
$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {
    if(i==0||i==3||i==6||i==9) {
        thesisTitles += flag +"번째 주소 : " + ($(elem).text()) + '\n';
        flag++;   
    }
        
    
});
var Split = thesisTitles.split(/\r\n|\r|\n/);

var realaddress1 = Split[3].split(',')[0];
var realaddress2 = Split[21].split(',')[0];
var realaddress3 = Split[39].split(',')[0];
var realaddress4 = Split[57].split(',')[0];



var apiKey = process.env.TAMU_KEY; 
console.log("apiKey : " + apiKey)
var meetingsData = [];
var addresses = [realaddress1,realaddress2,realaddress3,realaddress4];

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';
    
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            console.log(tamuGeo['FeatureMatchingResultType']);
            meetingsData.push(tamuGeo);
        }
    });
    setTimeout(callback, 3000);
}, function() {
    fs.writeFileSync('assignment3.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(meetingsData.length);
});