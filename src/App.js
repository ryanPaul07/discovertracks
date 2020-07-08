import React, {Component, createRef} from 'react';

import Login from './components/Login';
import ExpiredToken from './components/ExpiredToken';
import NotEnoughData from './components/NotEnoughData';
import WelcomeMessage from './components/WelcomeMessage';
import Tracks from './components/Tracks';
import Videos from './components/Videos'

import hash from './spotifyWebAPI/uri_hash';
import { tumblrApiKey } from './tumblr_config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

let access_token = null;
const mainViewRef = createRef();

class App extends Component {
  
  state = {
    expired_token: false,
    spotify_login: false,
    initialLoad: false,
    notEnoughData: false,
    tracks: [],
  }

  componentDidMount() {
    access_token = hash.access_token; // retrieved from uri_hash.js

    if(access_token) {
      this.retrieveSpotifyData();      
      this.setState({ spotify_login: true});
    }
  }
 
  // Spotify API call
  retrieveSpotifyData = async () => {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', { 
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }
    })

    const json = await response.json();

    if(response.status === 401) {
      this.setState({expired_token: true});
    } else {
      // check if the returned API call has any data
      if(json.items.length !== 0) {
        const parsedItems = json.items.filter(item => item.preview_url != null); // based on the returned data, only store items which have a song preview

        // check if there are enoung tracks 
        if(parsedItems.length > 1) {
          // if successful until now, create and store tracks in state    
          this.setState({ tracks: parsedItems.map((pItem, index) => {
            return {
              id: index,
              artistsName: pItem.artists[0].name,
              songName: pItem.name,
              previewURL: pItem.preview_url,
              previewVideo: [],
              videoTime: 0,
              image: pItem.album.images[1],
              selected: false 
            };
            })
          })
          this.retrieveTumblrData(); // call Tumblr API after spotify API information is stored
        } else {
          this.setState({notEnoughData: true});
        }
      } else {
        this.setState({notEnoughData: true});
      }
    }
  }

  // Tumblr API call
  retrieveTumblrData = async () => {
    const response = await fetch(`https://api.tumblr.com/v2/blog/bimir.tumblr.com/posts/photo?limit=100&api_key=${tumblrApiKey}&offset=0`)
    const json = await response.json();
    const parsedVideo = json.response.posts.filter(post => post.type === "photo"); // filter response to only store gifs

    const numOfVids = ((this.state.tracks.length) * 6); // for each track there should be 6 gifs, in total there will be tracks * 6 gifs
    var i = 0;

    this.setState({ tracks: this.state.tracks.map((track, index) => {
        for(i; i < numOfVids; i++) {
            // push gif information for each track
            track.previewVideo.push({
              video: parsedVideo[i].photos[0].original_size.url,
              originBlog: parsedVideo[i].source_title,
              originURL: parsedVideo[i].source_url
            });
            // once a remainder of 5 is reached or 6 gifs (0 to 5), break out of loop and start storking gifs for the next track
            if((i % 6) === 5) {
              i++;  // update the index of the loop counter to start at the next index
              break;
            }
        }
          return track;
      }) 
    })
    this.setState({initialLoad: true}); // check to wait for the inital render of the page to cope with the API calls (for Recommendations tag)
  }

  // used to manage the currently selected track 
  UpdateSelected = (trackId) => {
    this.setState({ tracks: this.state.tracks.map(track => {
      if(track.id === trackId) {
        track.selected = true;
      }
      else {
        track.selected = false;
      }
      return track;
    })
  })
  }

  // once the track has finished, update the selected state to false
  ReachedEnd = (trackId) => {
    this.setState({ tracks: this.state.tracks.map(track => {
      if(track.id === trackId) {
        track.selected = false;
      }
      return track;
    })
  })
  }

  render() {
    const login = this.state.spotify_login;
    
    if(this.state.expired_token) {
      console.log("The provided token has expired, if you would like to learn more check out https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow");
      return (
        <div className="App">
          <div style={{backgroundColor:'#312533', height:'100vh'}}>
            <ExpiredToken />
          </div>
        </div>
      );
    } else {
      if(this.state.notEnoughData) {
        return (
          <div className="App">
            <div style={{backgroundColor:'#312533', height:'100vh'}}>
              <NotEnoughData />
            </div>
          </div>
        );
      } else {
        return (
          <div ref={mainViewRef} className="App">
            {login 
              ?
                <div className="mainView">
                  <WelcomeMessage />
                  <div className="Tracks">
                    <Container fluid>
                      <Tracks tracks={this.state.tracks} updateSelected={this.UpdateSelected}/>
                    </Container>  
                    {this.state.initialLoad &&
                      <div className="mailToView">
                        <div className="mailTo">
                          <a href="mailto:discovertracks@gmail.com?subject=Website (Recommendations/Issues)&body=<Email me any Tumblr blogs you would like to be featured next/ Or any issues/recommendations you have for this website.>">Recommendations</a>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="Video">
                    <Videos tracks={this.state.tracks} ReachedEnd={this.ReachedEnd}/>
                  </div> 
                </div>
              : 
                <div style={{backgroundColor:'#312533', height:'100vh'}}>
                  <Login login={this.login}/> 
                </div>
            }
          </div>
        );
      }
    }
  }
}

export default App;
