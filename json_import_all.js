const baseurl = 'https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty';
var number_of_entries=100;


const request = require('request');
var fs = require('fs');
var file_id;


request(baseurl, function(error, response, body){
  file_id = body.substring(0, body.length-1);
  for(var i = 0; i< number_of_entries; i++){
    var post_url = "https://hacker-news.firebaseio.com/v0/item/" + file_id + ".json?print=pretty"; 
    request(post_url, function(error, response, body){
        var obj = JSON.parse(body);
        fs.appendFileSync('Outputs/json_all_info.txt',body); 
    });
    file_id = file_id - 1;
  }
});

