import oauth2 as oauth
import json

CONSUMER_KEY = "m2YKmVVEAdYk0BA4Rnv2q1WCh"
CONSUMER_SECRET = "UcC6b82Am7W1zgma5v989F5QORfT6OpGuVJYPcdc1dwrEZ1rYM"
ACCESS_KEY = "1606222267-M8BgGE7aufzvrWLVbH8Qa65BEEm2QjmGH8ngBMp"
ACCESS_SECRET = "FxkdEtVGpp6YDuveNSwiHRl4CgMWvJ1jfkZU0txrJAySC"

consumer = oauth.Consumer(key=CONSUMER_KEY, secret=CONSUMER_SECRET)
access_token = oauth.Token(key=ACCESS_KEY, secret=ACCESS_SECRET)
client = oauth.Client(consumer, access_token)

timeline_endpoint = "https://api.twitter.com/1.1/statuses/home_timeline.json"
response, data = client.request(timeline_endpoint)

tweets = json.loads(data)
for tweet in tweets:
    print tweet['text']