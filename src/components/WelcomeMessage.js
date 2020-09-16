import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function WelcomeMessage(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  
  return(
    <>
      <Modal show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome 
          </Modal.Title>      
        </Modal.Header>
        <Modal.Body>
          This website will allow you to discover new music, based on  
          <a style={{color:'#1DB954'}} href="https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/" target="_blank" rel="noopener noreferrer" role="button"> Spotify's Personalization API Endpoint</a>.
          Each track will also have a unique mashups of gifs based on 
          <a style={{color:'#1DB954'}} href="https://www.tumblr.com/docs/en/api/v2" target="_blank" rel="noopener noreferrer" role="button"> Tumblr's Blog /posts API Endpoint</a>.
          If you would like to learn more about this website or some of my other projects, check out my 
          <a style={{color:'rgb(247, 55, 95)'}} href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer" role="button"> Github!</a>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WelcomeMessage;