var TwitterPackage = require('twitter');
var secret = {
  consumer_key : 'edvp1LKvnfh9rEZ4eG8bNc33S',
  consumer_secret : '8v4rNDM9irnmJhobe0LMMLKxSprT9PuGsI9iMYFWThaPqpkTmK',
  access_token_key : '756553318898413568-6GJkeisPxMjf73Slup0yaSPaFZtHqDg',
  access_token_secret : 'R6eGj23rLb7s3z3e9ni495suYj3g9DS0h6g2gXcJ6IhVm'
}

var Twitter = new TwitterPackage(secret);


Twitter.stream('statuses/filter', {track: '#Diwali'}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    
    console.log(tweet);
})
    //call the post function to tweet something
    
  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});

