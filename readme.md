# little linguist
Litle linguist is a sample project for discovering language distribution on github.
## quick start guide
See results on [here](http://codeworm96.github.io/github-lang-visualization/) OR

1. fetch this project and make sure you have installed ruby (I'm using MRI 2.2.0 and not sure if it works on other versions)
2. run `bundle install` (Note for China mainland users: 可能需要科学上网)
3. 'cp config.example config.json` add edit config.json to set you github token
4. run `bundle exec ./little_linguist`. it may take a lot of time to fetch data.
5. run `bundle exec ./little_linguist_serve` and browse 'http://localhost:4567/'

