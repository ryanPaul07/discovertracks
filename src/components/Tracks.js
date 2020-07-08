import React from 'react';

import Track from './Track';

function Tracks(props) {
  
  const tracks = props.tracks;

  return tracks.map(track => (
    <Track 
      imageArt={track.image} 
      songName={track.songName} 
      artistName={track.artistsName} 
      sound={track.previewURL} 
      id={track.id} 
      selected = {track.selected}
      UpdateSelected={props.updateSelected} 
      key={track.id}
    />
  ));
}

export default Tracks;