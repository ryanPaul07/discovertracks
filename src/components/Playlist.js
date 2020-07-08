import React, {Component} from 'react';
import PlaylistProfile from './PlaylistProfile'
import Songs from './Songs';
import AddSong from './AddSong';



class Playlist extends Component {
  render() {
    const playlists = this.props.playlists;
 
    return playlists.map( playlist => (
      <div key={playlist.id}>
        <PlaylistProfile title={playlist.title} />
        <Songs song={playlist.songs} />
        <AddSong AddSong={this.props.AddSong} songKey={playlist.id}/>
        <br>
        </br>
      </div>
    ));
  }
}

export default Playlist;
