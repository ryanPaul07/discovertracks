// Accessing Spotify through Implicit Grant Flow

// Endpoint used by Spotify to authorize webpage to access Spotify data
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Parameters attached to the URI
export const clientId = "c231d1d8ddc44ce58a6e6528b19247fd";
export const redirectUri = "http://localhost:3000/";
export const scope = [
  "user-read-private", 
  "user-read-email", 
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public", 
  "playlist-read-private", 
  "playlist-modify-private"
];

export const formattedScope = scope.join("%20");


