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

**User Story 1: Design API Spec**

**User Story 2: Fetch Metadata from Individual Game Servers**
As a developer,
I want to fetch metadata for each game from the respective game servers using their APIs,
So that I can gather the basic metadata needed for each game.

**User Story 3: Enhance Metadata with Additional Information**
As a developer,
I want to enhance the fetched metadata with additional information such as the game thumbnail URL, release date, and available countries,
So that the metadata provided by the API is comprehensive and includes all necessary details.

**User Story 4: Combine Metadata into a Single JSON Response**
As a developer,
I want to combine the fetched and enhanced metadata into a single JSON array,
So that I can provide a structured and comprehensive response to the API request.
