// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('Assignment2/m09.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {
    if(i==0||i==3||i==6||i==9)
    console.log(i+"번쨰 Address/Location : "+$(elem).text());
});


// write the project titles to a text file
var thesisTitles = ''; // this variable will hold the lines of text

var flag =1;
$('body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody>tr>td').each(function(i, elem) {
    if(i==0||i==3||i==6||i==9) {
        thesisTitles += flag +"번째 주소 : " + ($(elem).text()) + '\n';
        flag++;   
    }
        
    
});

fs.writeFileSync('Assignment2/submit.txt', thesisTitles);
