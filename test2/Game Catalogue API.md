### Design Specification : Game Catalogue API

#### **Overview**

The goal is to implement a new API endpoint that returns metadata for all games. The metadata will be retrieved in two steps:

1.  Fetch basic metadata from individual game servers.
2.  Enhance the fetched metadata with additional details like game thumbnail URLs, release dates, and available countries from a fixed source (e.g., a database or file).

#### **API Endpoint** - /api/v1/games/metadata

-   **Method:** `GET`
-   **Response:** JSON array containing enhanced metadata for all games.

#### **Step 1: Fetching Basic Metadata**

For each game, we will make a GET request to the individual game server:

-   **Endpoint per game:** `/game/{game-code}/metadata`
-   **Response Example:**
    
	    `{
	      "game-code": "xxxx",
	      "game-name": "XX XXX",
	      "rtp": 96,
	      "hasFreeSpins": true
	    }` 
    

#### **Step 2: Enhancing Metadata**

The fetched metadata will be enhanced with additional information stored in a fixed source (e.g., a database or a JSON file). The additional data will include:

-   **Thumbnail URL**: The URL to the game’s thumbnail image.
-   **Release Date**: The date the game was released.
-   **Countries Available**: A list of countries where the game is available.

#### **Enhanced Metadata Structure**

	`{
	  "game-code": "xxxx",
	  "game-name": "XX XXX",
	  "rtp": 96,
	  "hasFreeSpins": true,
	  "thumbnailUrl": "https://example.com/thumbnail.jpg",
	  "releaseDate": "2024-01-01",
	  "countriesAvailable": ["US", "CA", "UK"]
	}`
