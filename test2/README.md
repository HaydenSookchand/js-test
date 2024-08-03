# js-test

# Test 2:

We need to implement a new API call to return the meta-data for each game. Most of the meta-data can be fetched as JSON from an API to each individual game server.  
The per-game fetch would be a GET to /game/{game-code}/metadata which returns  
{ "game-code": "xxxx", "game-name": "XX XXX", "rtp": 96, "hasFreeSpins": true}  
This data would need to be enhances with additional data that can be read from a fixed source (database, file, etc). The enhanced data would be the url to game thumbnail, release date and countries the game is available in.  
The output from the API should be JSON as an array containing all the games.

# Answer

[Broken down to tasks on Asana](https://app.asana.com/0/1207970559637903/1207970560234692)
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/asana-board.png "Asana Board")

## Epic - Implement Game Metadata API

**User Story 1: **

**User Story 2: Implement CI/CD Pipeline**

**User Story 3: Deploy Application to Google Cloud**
