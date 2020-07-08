import React from 'react';

import Video from './Video';

function Videos(props) {

  // filter for selected video
  const result = props.tracks.filter(track => track.selected === true);
  
  if(result) {
    return (
      <Video video={result} ReachedEnd={props.ReachedEnd}/>
    );
  }
}

export default Videos;