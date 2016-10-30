console.log("The main app started");

var jsonfile = require('jsonfile')
var TwitterPackage = require('twitter');
var secret = {
  consumer_key : 'm2YKmVVEAdYk0BA4Rnv2q1WCh',
  consumer_secret : 'UcC6b82Am7W1zgma5v989F5QORfT6OpGuVJYPcdc1dwrEZ1rYM',
  access_token_key : '1606222267-M8BgGE7aufzvrWLVbH8Qa65BEEm2QjmGH8ngBMp',
  access_token_secret : 'FxkdEtVGpp6YDuveNSwiHRl4CgMWvJ1jfkZU0txrJAySC'
}

var Twitter = new TwitterPackage(secret);
var jsonfile = require('jsonfile')

/*
 
var file = '/tmp/data.json'
var obj = {name: 'JP'}
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})
 
*/

for (i = 0; i < 100; i++) { 

  setTimeout(function () {
   Twitter.get('search/tweets', {q: 'trump'}, function(error, tweets, response) {
     console.log(tweets);
  })
  }, 5000)
}



Twitter.stream('statuses/filter', {track: '#election2016'}, function(stream) {


  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);
    var messages = ["This app gets a json file floor",
    
    ]

    function getRandom(messages) {
      var randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    }
    //build our reply object
    var statusObj = {status: getRandom(messages) + tweet.user.screen_name}

    //call the post function to tweet something
    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });




  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});