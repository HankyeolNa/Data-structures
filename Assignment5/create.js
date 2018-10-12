var diaryEntries = [];

class DiaryEntry {
  //new DiaryEntry(0, 'March 10, 1976', "I was born!", true, ["baby food", "baby formula"])
  constructor(primaryKey, week, date, product, reason) {
    this.hk = {};
    this.hk.S = primaryKey.toString();
    this.week = {}; 
    this.week.S = week;
    this.date = {};
    this.date.S = date;
    this.product = {};
    this.product.S = product; 
    this.reason = {};
    this.reason.S = reason;
  }
}
diaryEntries.push(new DiaryEntry(0, 'Week 1', "Oct 3", "Maison margiela sneakers", "Just what I wanted!"));
diaryEntries.push(new DiaryEntry(1, 'Week 2', "Oct 4", "Steve madden chelsea boots", "Preparing winter season"));
diaryEntries.push(new DiaryEntry(2, 'Week 3', "Oct 6", "Creed candle", "For giving present"));
diaryEntries.push(new DiaryEntry(3, 'Week 4', "Oct 8", "iHerb omega-3", "Health care"));

console.log(diaryEntries);

console.log(process.env.AWS_ID);

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
params.Item = diaryEntries[0];

params.TableName = "deardiary_hankyeol";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response file name ah
}); 

var params = {};
params.Item = diaryEntries[1];

params.TableName = "deardiary_hankyeol";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response file name ah
}); 

var params = {};
params.Item = diaryEntries[2];

params.TableName = "deardiary_hankyeol";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response file name ah
}); 

var params = {};
params.Item = diaryEntries[3];

params.TableName = "deardiary_hankyeol";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response file name ah
}); 