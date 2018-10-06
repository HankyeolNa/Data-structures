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
var content = fs.readFileSync('Assignment3/assignment3.json');
//우선 저희가 과제3때 결과물들을 확인하기위해서 콘텐트 변수에 담았어요
//파일을 읽으면 저런이상한값이 바로찍히는데 이게 json파일이기때문에 저희가 조작할 수 있게 변환해주어야합니당.
//console.log(JSON.parse(content))
//보고계시졍? 
//여기서 필요한건 저기 스트릿어드레스랑 아웃풋지오코드의 위도랑 경도인거 아시졍? 
//여기서 이제 이것저것 막해봐야해욤
//저기보시면 끝에가 대괄호잖아요 :배열인거구
//콤마를기준으로 저희가 주소 4개를요청했기떄문에 배열안에 원소가 4개가있는거에요
//그중에 첫번째꺼만 가져왔습니다
//다른거 보이시나여? 
//여기서 스트릿어드레스를 뽑기위해서는
var parsedJSON = JSON.parse(content);
//console.log(parsedJSON[0].OutputGeocodes[0].OutputGeocode.Latitude)
//일케하면 나옵니당 그럼 [0] [1] 이런식으로 말고 한번에 다 뽑고싶으면 뭐라고 넣나요?
//그 배열형식 (대괄호) 는 [] 이렇게해야하고 {} 이형식은 쩜찍고 저앞에꺼(key)로 가져와야해염
//알고싶으신게 4개한번에 다하는거말씀하신겆네ㅕ네?네네
//반복문으로 4번했어요 저는 
//그리고 위도경도가져오려면
//저기에 또 대괄호인거보이시져?
//[0]을안하면 대괄호가 아직 그대로있고 [0]을하면 대괄호가 벗겨져염 
//여기서 다시 OutputGeocode  라는 키값 속에있는 latitude를 원하는거니까
//{}이거 하나벗겨진거 보이시죠? 
//이렇게 위도를가져올 수 있어요!!
//저도 아까 1시간동안 이것저것해보고 얻은결론이에용 
//이걸이제 스타터코드처럼 
//var addressesForDb = [ { address: '63 Fifth Ave, New York, NY', latLong: { lat: 40.7353041, lng: -73.99413539999999 } }, { address: '16 E 16th St, New York, NY', latLong: { lat: 40.736765, lng: -73.9919024 } }, { address: '2 W 13th St, New York, NY', latLong: { lat: 40.7353297, lng: -73.99447889999999 } } ];
//스타터코드보시면 []대괄호안에 {}안에 어드레스 필드가있고 그안에 latLong필드가잇고 그안에 {}가있고 이안에 lat,lngrㅏ들어가있죤?ㅔ네네
//우선 {} 이거는 객체라고하는데 만드는

/*
var example = new Object()
example.hi = "hello";
example.hello = "hi";
console.log(example);
*/
//이렇게만듭니당 
//이거로 다시질문해주세여
//호오..포함된다는게



for (var i = 0; i < 4; i++) {
    var real = new Object();
    real.address = parsedJSON[i].InputAddress.StreetAddress;
    real.latLong = { lat: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude, lng: parsedJSON[i].OutputGeocodes[0].OutputGeocode.Latitude }
    //console.log(real);
    addressesForDb[i] = real;
    //요건 아시겠어요?근데 var real 밑에 있는 real.address 랑 ,, real.latlong이real에 포함되어 있는건가여? real. 쩜
    //ㅋㅋㅋㅋ이거 엄청헷갈리는데 한번혼자해보셔야될꺼에염
    //이게좀더 간소화된코드에요 이건이해되셨졍? 
    //테이블 생성이랑 인서트랑 이건여?테이블생성은 이해됐는데 인서트가 뭐였죠?-?
}


//그럼 위에 포문코드가 이해되실꺼에염 
//되셧나여? 
var thisQuery;

/*
thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
*/

//{ address: '35 E 125 ST New York NY ',
 // latLong: { lat: '40.805958', lng: '40.805958' } }
 //이게 addresseForDb 1st wonso 
 //
 /*
var hello= [ { address: 'JINJOO APT', latLong: { lat: 40.7353041, lng: -73.99413539999999 } }]
async.eachSeries(hello, function(value, callback) {
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



thisQuery = "select address from aalocations;";
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
//그 배열안에 원소 4개가있엇잖아용 네
//그크기만큼 실행한다는 함수가 async.eachSeries함수에요
//총4번실행하는거죠
//첫번째 실행할때는 addressesFordb[0]에있는값을 value라는 변수가받는거에요
//아시겠나염!! !
//이름이 진주아파트인값이 삽입된거에요
//이제 확인을해보면
//from은 어디테이블에서 가져올건지 명시!
//더궁금하신거있나여?! 저거 근데 대문자로 꼭 써야하는건가요?? 셀렉이랑 프롬이랑 
//프로그램마다 다른데 한번해볼게요

//dk
/*
thisQuery = "DROP TABLE aalocations;"; 
client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
*/ 
