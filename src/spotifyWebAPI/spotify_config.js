// Accessing Spotify through Implicit Grant Flow

// Endpoint used by Spotify to authorize webpage to access Spotify data
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Parameters attached to the URI
export const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
export const redirectUri = "http://ryanPaul07.github.io/discovertracks";
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


