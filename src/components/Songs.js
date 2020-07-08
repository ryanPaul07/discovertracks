import React, {Component} from 'react';

import Container from 'react-bootstrap/Container'



class Songs extends Component {
  render() {
    const songs = this.props.song;

    return songs.map( (songs, index) => (
      <Container fluid key={index} >
        <h3>artist: {songs.artistName}</h3>
        <h3>song: {songs.songName}</h3>
      </Container>
    ));
  }
}

export default Songs;