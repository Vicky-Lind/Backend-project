#Here we can copy the data I created, and hopefully just paste it into the db. I created 3 teams and for each team 2 players. Each team and player also have stats, if we want to add them also.

---------------------

#Team 1
POST /teams
{
  "name": "Real Madrid",
  "league": "La Liga",
  "country": "Spain"
}

#Team 2
POST /teams
{
  "name": "Manchester City",
  "league": "Premier League",
  "country": "England"
}

#Team 3
POST /teams
{
  "name": "Bayern Munich",
  "league": "Bundesliga",
  "country": "Germany"
}

-------------------

#TeamID 1 Players

POST /players
{
  "name": "Vinícius Júnior",
  "position": "Winger",
  "number": 7,
  "teamId": 1
}

POST /players
{
  "name": "Jude Bellingham",
  "position": "Midfielder",
  "number": 5,
  "teamId": 1
}

#TeamID 2 Players

POST /players
{
  "name": "Erling Haaland",
  "position": "Striker",
  "number": 9,
  "teamId": 2
}

POST /players
{
  "name": "Rúben Dias",
  "position": "Defender",
  "number": 3,
  "teamId": 2
}

#TeamID 3 Players

POST /players
{
  "name": "Harry Kane",
  "position": "Striker",
  "number": 9,
  "teamId": 3
}

POST /players
{
  "name": "Jamal Musiala",
  "position": "Midfielder",
  "number": 42,
  "teamId": 3
}

----------------------