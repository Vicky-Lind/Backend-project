# DATA SEEDING FILE
# Copy/paste these requests into Postman to populate the database.

------------------------------------------------------------
# TEAMS
------------------------------------------------------------

# Team 1 — Real Madrid
POST /teams
{
  "name": "Real Madrid"
}

# Team 2 — Manchester City
POST /teams
{
  "name": "Manchester City"
}

# Team 3 — Bayern Munich
POST /teams
{
  "name": "Bayern Munich"
}

------------------------------------------------------------
# PLAYERS — TEAM 1 (Real Madrid)
------------------------------------------------------------

POST /players
{
  "name": "Thibaut Courtois",
  "position": "Goalkeeper",
  "number": 1,
  "teamId": 1
}

POST /players
{
  "name": "Dani Carvajal",
  "position": "Right Back",
  "number": 2,
  "teamId": 1
}

POST /players
{
  "name": "Éder Militão",
  "position": "Center Back",
  "number": 3,
  "teamId": 1
}

POST /players
{
  "name": "David Alaba",
  "position": "Center Back",
  "number": 4,
  "teamId": 1
}

POST /players
{
  "name": "Ferland Mendy",
  "position": "Left Back",
  "number": 23,
  "teamId": 1
}

POST /players
{
  "name": "Jude Bellingham",
  "position": "Midfielder",
  "number": 5,
  "teamId": 1
}

POST /players
{
  "name": "Federico Valverde",
  "position": "Midfielder",
  "number": 15,
  "teamId": 1
}

POST /players
{
  "name": "Toni Kroos",
  "position": "Midfielder",
  "number": 8,
  "teamId": 1
}

POST /players
{
  "name": "Vinícius Júnior",
  "position": "Winger",
  "number": 7,
  "teamId": 1
}

POST /players
{
  "name": "Rodrygo",
  "position": "Winger",
  "number": 11,
  "teamId": 1
}

POST /players
{
  "name": "Joselu",
  "position": "Striker",
  "number": 14,
  "teamId": 1
}

------------------------------------------------------------
# PLAYERS — TEAM 2 (Manchester City)
------------------------------------------------------------

POST /players
{
  "name": "Ederson",
  "position": "Goalkeeper",
  "number": 31,
  "teamId": 2
}

POST /players
{
  "name": "Kyle Walker",
  "position": "Right Back",
  "number": 2,
  "teamId": 2
}

POST /players
{
  "name": "Rúben Dias",
  "position": "Center Back",
  "number": 3,
  "teamId": 2
}

POST /players
{
  "name": "John Stones",
  "position": "Center Back",
  "number": 5,
  "teamId": 2
}

POST /players
{
  "name": "Joško Gvardiol",
  "position": "Left Back",
  "number": 24,
  "teamId": 2
}

POST /players
{
  "name": "Rodri",
  "position": "Defensive Midfielder",
  "number": 16,
  "teamId": 2
}

POST /players
{
  "name": "Kevin De Bruyne",
  "position": "Midfielder",
  "number": 17,
  "teamId": 2
}

POST /players
{
  "name": "Bernardo Silva",
  "position": "Midfielder",
  "number": 20,
  "teamId": 2
}

POST /players
{
  "name": "Phil Foden",
  "position": "Winger",
  "number": 47,
  "teamId": 2
}

POST /players
{
  "name": "Jack Grealish",
  "position": "Winger",
  "number": 10,
  "teamId": 2
}

POST /players
{
  "name": "Erling Haaland",
  "position": "Striker",
  "number": 9,
  "teamId": 2
}

------------------------------------------------------------
# PLAYERS — TEAM 3 (Bayern Munich)
------------------------------------------------------------

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

------------------------------------------------------------
# MATCH 1 — Real Madrid 3–1 Manchester City
------------------------------------------------------------

POST /matches
{
  "homeScore": 3,
  "awayScore": 1
}

# MatchID = 1

# Real Madrid stats (teamId = 1)

POST /matches/1/stats
{
  "playerId": 7,
  "teamId": 1,
  "goals": 2,
  "assists": 0,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 90
}

POST /matches/1/stats
{
  "playerId": 5,
  "teamId": 1,
  "goals": 1,
  "assists": 1,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 88
}

# Manchester City stats (teamId = 2)

POST /matches/1/stats
{
  "playerId": 9,
  "teamId": 2,
  "goals": 1,
  "assists": 0,
  "yellowCards": 1,
  "redCards": 0,
  "minutesPlayed": 90
}

------------------------------------------------------------
# MATCH 2 — Real Madrid 2–2 Bayern Munich
------------------------------------------------------------

POST /matches
{
  "homeScore": 2,
  "awayScore": 2
}

# MatchID = 2

# Real Madrid stats (teamId = 1)

POST /matches/2/stats
{
  "playerId": 11,
  "teamId": 1,
  "goals": 1,
  "assists": 1,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 85
}

POST /matches/2/stats
{
  "playerId": 8,
  "teamId": 1,
  "goals": 1,
  "assists": 0,
  "yellowCards": 1,
  "redCards": 0,
  "minutesPlayed": 90
}

# Bayern Munich stats (teamId = 3)

POST /matches/2/stats
{
  "playerId": 9,
  "teamId": 3,
  "goals": 1,
  "assists": 0,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 90
}

POST /matches/2/stats
{
  "playerId": 42,
  "teamId": 3,
  "goals": 1,
  "assists": 1,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 87
}

------------------------------------------------------------
# MATCH 3 — Manchester City 4–0 Bayern Munich
------------------------------------------------------------

POST /matches
{
  "homeScore": 4,
  "awayScore": 0
}

# MatchID = 3

# Manchester City stats (teamId = 2)

POST /matches/3/stats
{
  "playerId": 9,
  "teamId": 2,
  "goals": 3,
  "assists": 0,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 90
}

POST /matches/3/stats
{
  "playerId": 17,
  "teamId": 2,
  "goals": 1,
  "assists": 2,
  "yellowCards": 0,
  "redCards": 0,
  "minutesPlayed": 89
}

# Bayern Munich stats (teamId = 3)

POST /matches/3/stats
{
  "playerId": 42,
  "teamId": 3,
  "goals": 0,
  "assists": 0,
  "yellowCards": 1,
  "redCards": 0,
  "minutesPlayed": 90
}




DELETE /players/:id

PUT /players/:id
{
    "goals": 2
}